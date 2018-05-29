import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import Table from './Table';
import TableToolbar from './TableHead';
import Paper from '../../Components/Paper';
import base from '../../js/firebase'
// import Button from '../../Components/Button';
import TableFooter from './TableFooter';

class Content extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selected: [],
      page: 0,
      rowsPerPage: 5,
      data: []
    };
  }
  componentDidMount() {
    base.syncState('websiteContent', {
      context: this,
      state: 'data',
      asArray: true
    });
  }


  handleSelectAllClick = (event) => {
    const {data} = this.state
    const checked = event.target.checked;
    (checked) && this.setState({
      selected: data.map(n => n.id)
    });
    (!checked) && this.setState({selected: []});
  }

  handleClick = (id) => {

    const {selected} = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    newSelected = (selectedIndex === -1)
      ? newSelected = [
        ...selected,
        id
      ]
      : (selectedIndex === 0)
        ? newSelected.concat(selected.slice(1))
        : (selectedIndex === selected.length - 1)
          ? newSelected.concat(selected.slice(0, -1))
          : (selectedIndex > 0)
            ? newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1),)
            : '';

    this.setState({selected: newSelected});
  };

  handleChangePage = (event) => {
    let counter = Number(event.target.value)
    this.setState(prevState => {
      return {
        page: prevState.page + counter
      }
    })

  };

  handleChangeRowsPerPage = event => this.setState({
    rowsPerPage: Number(event.target.value)
  });

  render() {
    const {selected, page, rowsPerPage, data} = this.state
    const {dispatch} = this.props

    return (<Fragment>
      <Paper>
        <TableToolbar numSelected={selected.length}/>
        <Table handleClick={this.handleClick} selected={selected} numSelected={selected.length} rowCount={data.length} data={this.state.data} page={page} rowsPerPage={rowsPerPage} onSelectAllClick={this.handleSelectAllClick}/>
        <TableFooter page={page} rowsPerPage={rowsPerPage} data={data} handleChangePage={this.handleChangePage} handleChangeRowsPerPage={this.handleChangeRowsPerPage}/>
      </Paper>
      <button onClick={() => {
          dispatch({type: 'MODAL_SHOW'})
        }}>Create Content</button>

    </Fragment>)
  }
}

const mapStateToProps = (state) => {

  return {}

}

export default withRouter(connect(mapStateToProps)(Content));
