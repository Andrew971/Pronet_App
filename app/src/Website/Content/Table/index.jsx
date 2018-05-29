import React, {PureComponent,Fragment} from 'react';
import Table from '../../../Components/Table/Table';
import TableBody from '../../../Components/Table/TableBody';
import TableCell from '../../../Components/Table/TableCell';
import TableHead from '../../../Components/Table/TableHead';
import TableRow from '../../../Components/Table/TableRow';
import Checkbox from '../../../Components/Checkbox';
import Overflow from '../../../Components/overflow';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';


class TableContent extends PureComponent {

  isSelected = id => this.props.selected.indexOf(id) !== -1;

  render() {
    const {handleClick, onSelectAllClick, numSelected, data, rowCount,page,rowsPerPage,match,history} = this.props
    return (<Fragment>
      <Overflow axeX>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell onChange={onSelectAllClick}>
                <Checkbox  indeterminate={numSelected > 0 && numSelected < rowCount}  checked={numSelected} />
              </TableCell>
              <TableCell first="first">Name</TableCell>
              <TableCell>description</TableCell>
              <TableCell>Contenu</TableCell>
              <TableCell>Crée le</TableCell>
              <TableCell>Modifié le</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => {
                const isSelected = this.isSelected(n.id);

                return (<TableRow key={n.id} hover="hover">
                  <TableCell onClick={() => handleClick(n.id)}>
                    <Checkbox checked={isSelected}/>
                  </TableCell>
                  <TableCell onClick={() => history.push(`${match.url}/${n.name}`)} first="first">
                    {n.name}
                  </TableCell>
                  <TableCell>{n.description}</TableCell>
                  <TableCell>{n.field.length}</TableCell>
                  <TableCell>{n.created_at}</TableCell>
                  <TableCell>{n.updated_at}</TableCell>
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
