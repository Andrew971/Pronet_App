import React, { Component,Fragment } from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import Drawer from '../../Components/Drawer/Drawer'
import Menu from '../../Components/Drawer/Content'
import MenuItems from '../../Components/Drawer/MenuItems'
import MenuTypo from '../../Components/Drawer/MenuTypo'
import {Nav} from '../../js/constants';


export class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubMenu: false
    };
  }
  openSubMenu = () => {
    this.setState({ showSubMenu: !this.state.showSubMenu });
  };

  render() {
    const { drawerRightDisplay,history,match } = this.props
    const { showSubMenu } = this.state
    return (
      <Drawer isOpen={drawerRightDisplay} direction="right">
<Menu>
  {Nav.map(item=>
    <Fragment key={item.key}>
    <MenuItems onClick={()=>{
        !item.sub&&history.push(item.url)
        item.sub&&this.openSubMenu()
      }}>
{item.icon}
<MenuTypo size="2rem">
      {item.name}
      </MenuTypo>
    </MenuItems>
    {item.sub && item.sub.map(sub=>
      <Fragment key={sub.key}>
      {showSubMenu&&<MenuItems onClick={()=>{
        history.push(`${match.url}${sub.url}`)
      }} sub>
{sub.icon}
      <MenuTypo>
            {sub.name}
            </MenuTypo>
      </MenuItems>
    }
    </Fragment>
  )}

</Fragment>
  )}


</Menu>


</Drawer>
  );
  }

}


const mapStateToProps = (state) => {

  return {
    drawerRightDisplay: state.UI.drawerRightDisplay
  }

}
export default withRouter(connect(mapStateToProps)(MenuContainer));
