import React, {Component,Fragment} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import Table from './Table';
import TableToolbar from './TableHead';
import Paper from '../../Components/Paper';

const data = [
  {
    id:0,
    name:"test",
    calories:1,
    fat:1,
    carbs:1,
    protein:1,
  },
  {
    id:1,
    name:"test",
    calories:1,
    fat:1,
    carbs:1,
    protein:1,
  },
  {
    id:2,
    name:"test",
    calories:1,
    fat:1,
    carbs:1,
    protein:1,
  },
];

class Content extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selected: [],
    };
  }

  handleSelectAllClick = (event) => {
    const checked= event.target.checked;
     (checked)&& this.setState({ selected: data.map(n => n.id) });
     (!checked)&&this.setState({ selected: [] });
   }

  handleClick = (id) => {

    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
      newSelected = (selectedIndex === -1)
      ? newSelected = [...selected,id]
      :(selectedIndex === 0)
      ? newSelected.concat(selected.slice(1))
      :(selectedIndex === selected.length - 1)
      ?newSelected.concat(selected.slice(0, -1))
      :(selectedIndex > 0)
      ? newSelected.concat(selected.slice(0, selectedIndex),selected.slice(selectedIndex + 1),
      ):'';

    this.setState({ selected: newSelected });
  };

  render() {
    const {selected}=this.state
    return (<Fragment>
      <Paper>
      <TableToolbar numSelected={selected.length}/>
      <Table  handleClick={this.handleClick} selected={selected}
        numSelected={selected.length}
        rowCount={data.length}
        data={data}
        onSelectAllClick={this.handleSelectAllClick} />
    </Paper>
  </Fragment>)
  }
}



const mapStateToProps = (state) => {

  return {}

}

export default withRouter(connect(mapStateToProps)(Content));
