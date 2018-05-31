import React, {Component} from "react";
import {connect} from "react-redux";
import styled, {css} from "styled-components";

const Wrapper = styled.div`
  position: fixed; /* Stay in place */
  /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100vh; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  ${props => (props.isOpen ? "background-color:rgba(0,0,0,0.5)" : "none")};
  ${props => (props.isOpen ? "z-index: 1" : "z-index: -1")};

  #menu {
    ${props => (props.direction === "left" || "right" ? leftRight : TopBottom)};
  }

  @media (min-width: 660px) {
  }
`;
const leftRight = css`
width:15rem;
  height: 100%; /* 100% Full-height */
  top: 0;
`;
const TopBottom = css`
  height: auto;
  max-height: 100vh;
  top: 0;
  right: 0;
  left: 0 ${props => (props.direction === "bottom" ? "bottom:0;" : "")};
  ${props => (props.direction === "bottom" ? "top: auto;" : "top: 0;")};
`;

const StyledDrawer = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  z-index: 1200;
  outline: none;
  max-width: 15rem;
  max-height: 100vh;
  overflow-x: hidden; /* Disable horizontal scroll */

  ${props => (props.direction === "right" ? `right: ${props.position}rem` : `left:${props.position}rem`)};

  @media (min-width: 660px) {
  }
`;

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: -15
    };
  }
  componentDidMount = () => {
    window.addEventListener("click", this.clickOut);
    this.timerID = setInterval(() => this.setPositionOpen(), 1.5);
  };

  setPositionOpen = () => {
    const {position} = this.state;
    if (position >= 0) {
      clearInterval(this.timerID);
    } else {
      this.setState(prevState => {
        return {position: prevState.position + 1};
      });
    }
  };
  clickOut = e => {
    const {dispatch, drawerLeftDisplay, drawerRightDisplay} = this.props;
    let test = e.target.id || "try me";

    !drawerRightDisplay &&
      drawerLeftDisplay &&
      test === "clickOut" &&
      dispatch({type: "LEFT_DRAWER_HIDE", payload: false});
    drawerRightDisplay &&
      !drawerLeftDisplay &&
      test === "clickOut" &&
      dispatch({type: "RIGHT_DRAWER_HIDE", payload: false});
      this.timerID = setInterval(() => this.setPosition(), 1.5);
  };


  render() {

    const {children, isOpen, direction} = this.props;
    const {position} = this.state;
    console.log(this.state.position);
    return (
      <Wrapper
        direction={direction || "left"}
        onClick={e => this.clickOut(e)}
        id="clickOut"
        isOpen={isOpen}
      >
        <StyledDrawer isOpen={isOpen} direction={direction || "left"} id="menu"
        position={position}
        >
          {children}
        </StyledDrawer>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    drawerLeftDisplay: state.UI.drawerLeftDisplay,
    drawerRightDisplay: state.UI.drawerRightDisplay
  };
};

export default connect(mapStateToProps)(Drawer);
