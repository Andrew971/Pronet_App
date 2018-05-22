import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled, {css} from "styled-components";

const Wrapper = styled.div `
   position: fixed; /* Stay in place */
   z-index: 1; /* Sit on top */
   left: 0;
   top: 0;
   width: 100%; /* Full width */
   height: 100%; /* Full height */
   overflow: auto; /* Enable scroll if needed */
   background-color: rgb(0,0,0); /* Fallback color */
   background-color: rgba(0,0,0,0.4); /* Black w/ opacity */


@media (min-width: 660px) {
}
  `;
  const leftRight = css `
  height: 100%; /* 100% Full-height */
  top: 0;
  width: ${props => (
  props.isOpen
  ? "15rem"
  : "0")};
  ${props=>(props.direction === "right"? 'right: 0':'left:0')};
  `
  const Top = css `
  height: 100%; /* 100% Full-height */
  height: auto;
  max-height: 100vh;
  top: 0;
  right:0;
  left:0
  `
  const Bottom = css `
  height: auto;
  max-height: 100vh;
  top: auto;
  bottom:0;
  right:0;
  left:0
  `
const Menu = styled.div `
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  display:flex;
  flex: 1 0 auto;
  flex-direction: column;
  z-index: 1200;
  outline: none;

${props=>(props.direction === ("left")&&leftRight)};
${props=>(props.direction === ("right")&&leftRight)};
${props=>(props.direction === ("top")&&Top)};
${props=>(props.direction === ("bottom")&&Bottom)};

background-color: rgb(247,247,247); /* Fallback color */
overflow-x: hidden; /* Disable horizontal scroll */
padding-top: 20px; /* Place content 60px from the top */
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
color: rgba(250,250,250,1);


  @media (min-width: 660px) {
  }
    `;

class Drawer extends Component {

  componentDidMount = () => {
    window.addEventListener("click", this.clickOut);
  }
  clickOut = e => {
    const {dispatch, drawerLeftDisplay, drawerRightDisplay} = this.props;
    let test = (e.target.id) || "try me";

      (!drawerRightDisplay) && (drawerLeftDisplay) && (test === 'clickOut') && dispatch({type: "LEFT_DRAWER_HIDE", payload: false});
      (drawerRightDisplay) && (!drawerLeftDisplay) && (test === 'clickOut') && dispatch({type: "RIGHT_DRAWER_HIDE", payload: false});


  }
  render() {
    const {children, isOpen, direction} = this.props
    return (<Wrapper onClick={(e) => this.clickOut(e)} id="clickOut">
      <Menu isOpen={isOpen} direction={direction||'left'}>
        {children}
      </Menu>
    </Wrapper>);
  }
}

const mapStateToProps = (state) => {
  return {drawerLeftDisplay: state.UI.drawerLeftDisplay, drawerRightDisplay: state.UI.drawerRightDisplay,
  };
};

export default connect(mapStateToProps)(Drawer);
