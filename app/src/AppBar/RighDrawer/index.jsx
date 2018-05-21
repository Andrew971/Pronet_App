import React, { Component,Fragment } from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import Wrapper from '../../Components/RightDrawer/Wrapper'
import Menu from '../../Components/RightDrawer/Content'
import MenuItems from '../../Components/RightDrawer/MenuItems'
import MenuTypo from '../../Components/RightDrawer/MenuTypo'
import {Nav} from '../../js/constants';


export class RightDrawer extends Component {
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
    const { RightDrawerDisplay,history,match } = this.props
    const { showSubMenu } = this.state
    return (
      <Wrapper RightDrawerDisplay={RightDrawerDisplay}>
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


</Wrapper>
  );
  }

}


const mapStateToProps = (state) => {

  return {
    RightDrawerDisplay: state.AppBar.RightDrawerDisplay
  }

}
export default withRouter(connect(mapStateToProps)(RightDrawer));
