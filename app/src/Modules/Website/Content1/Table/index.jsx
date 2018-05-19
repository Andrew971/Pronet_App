import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import TablePagination from '@material-ui/core/TablePagination';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
];

class TableContent extends React.Component {

render () {
  const { classes } = this.props;

  return (
    <Fragment>
      <div className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
          <TableCell padding="checkbox">
   <Checkbox

   />
 </TableCell>
            <TableCell>Col 1</TableCell>
            <TableCell>col 2</TableCell>
            <TableCell>Fat (g)</TableCell>
            <TableCell>Carbs (g)</TableCell>
            <TableCell>Protein (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow hover
                    onClick={event => console.log('ok')}
                    role="checkbox"
                    aria-checked={false}
                    tabIndex={-1}
                    key={n.id}
                    selected={false}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox  />
                    </TableCell>
                <TableCell component="th" scope="row">
                  {n.name}
                </TableCell>
                <TableCell>{n.calories}</TableCell>
                <TableCell>{n.fat}</TableCell>
                <TableCell>{n.carbs}</TableCell>
                <TableCell>{n.protein}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
      <TablePagination
        component="div"
        count={data.length}
        rowsPerPage={1}
        page={5}
        backIconButtonProps={{
          'aria-label': 'Previous Page',
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page',
        }}
        onChangePage={()=>console.log('ok')}
        onChangeRowsPerPage={()=>console.log('ok')}
      />
  </Fragment>
  );
}
}
TableContent.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {

  return {}

}

export default (withRouter(withStyles(styles)(connect(mapStateToProps)(TableContent))));
