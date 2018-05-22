import React, {Fragment} from 'react';
import Table from '../../../Components/Table/Table';
import TableBody from '../../../Components/Table/TableBody';
import TableCell from '../../../Components/Table/TableCell';
import TableHead from '../../../Components/Table/TableHead';
import TableRow from '../../../Components/Table/TableRow';
import Checkbox from '../../../Components/Checkbox';
import Overflow from '../../../Components/overflow';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

class TableContent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }
  test = () => console.log('ok');
  isSelected = id => this.props.selected.indexOf(id) !== -1;

  render() {
    const {handleClick, onSelectAllClick, numSelected, data, rowCount,page,rowsPerPage} = this.props

    return (<Fragment>
      <Overflow axeX>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell onChange={onSelectAllClick}>
                <Checkbox  indeterminate={numSelected > 0 && numSelected < rowCount}  checked={numSelected === rowCount} />
              </TableCell>
              <TableCell first="first">Col 1</TableCell>
              <TableCell>col 2</TableCell>
              <TableCell>Fat (g)</TableCell>
              <TableCell>Carbs (g)</TableCell>
              <TableCell>Protein (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => {
                const isSelected = this.isSelected(n.id);

                return (<TableRow onClick={() => handleClick(n.id)} key={n.id} hover="hover">
                  <TableCell>
                    <Checkbox checked={isSelected}/>
                  </TableCell>
                  <TableCell first="first">
                    {n.name}
                  </TableCell>
                  <TableCell>{n.calories}</TableCell>
                  <TableCell>{n.fat}</TableCell>
                  <TableCell>{n.carbs}</TableCell>
                  <TableCell>{n.protein}</TableCell>
                </TableRow>);
              })
            }
          </TableBody>
        </Table>
      </Overflow>

    </Fragment>);
  }
}
const mapStateToProps = (state) => {

  return {}

}

export default(withRouter(connect(mapStateToProps)(TableContent)));
