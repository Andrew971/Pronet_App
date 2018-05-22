import React, {Fragment} from 'react';
import Toolbar from '../../../Components/ToolBar';
import IconButton from '../../../Components/iconButton';
import Filter from '../../../Components/svg/filter';
import Delete from '../../../Components/svg/delete';
import Tooltip from '../../../Components/Tooltip';
import Typography from '@material-ui/core/Typography';

const TableToolbar = props => {
  const {numSelected} = props;

  return (<Toolbar selected={(
      numSelected > 0)
      ? true
      : false}>
    {
      numSelected > 0
        ? (<Typography color="inherit" variant="subheading">
          {numSelected} selected
        </Typography>)
        : (<Typography variant="title" id="tableTitle">
          Nutrition
        </Typography>)
    }
    <div style={{
        flex: 1
      }}/>
      {
      numSelected > 0
        ? (<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <Delete color="inherit"/>
          </IconButton>
        </Tooltip>)
        : (<Fragment>
          <Tooltip title="Filter list">
            <IconButton aria-label="Filter list">
              <Filter/>
            </IconButton>
          </Tooltip>

        </Fragment>)
    }
  </Toolbar>);
};

export default TableToolbar;
