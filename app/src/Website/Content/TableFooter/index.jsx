import React, {Fragment} from 'react';
import TablePagination from '../../../Components/Table/TablePagination';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

class TableFooter extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }


  render() {
    const {rowsPerPage, page, data,handleChangePage,handleChangeRowsPerPage} = this.props

    return (<Fragment>
      <TablePagination count={data.length} rowsPerPage={rowsPerPage}
          page={page} backIconButtonProps={{
          'aria-label' : 'Previous Page'
        }} nextIconButtonProps={{
          'aria-label' : 'Next Page'
        }}    onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    </Fragment>);
  }
}
const mapStateToProps = (state) => {

  return {}

}

export default(withRouter(connect(mapStateToProps)(TableFooter)));
