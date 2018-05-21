import React, {Component} from 'react';
import styled, {css} from "styled-components"

const cross = css `

.bar1 {
   -webkit-transform: rotate(-45deg) translate(-7px, 7px);
   transform: rotate(-45deg) translate(-7px, 7px);
}

.bar2 {opacity: 0;}

.bar3 {
   -webkit-transform: rotate(45deg) translate(-6px, -6px);
   transform: rotate(45deg) translate(-6px, -6px);

`
const StyledHamburger = styled.div `
display: block;
    cursor: pointer;

.bar1, .bar2, .bar3 {
    width: 2rem;
    height: 3px;
    background-color: ${props=>props.color||"rgb(249,249,249)"};
    margin: 6px 0;
    transition: 0.4s;
}

 ${props => (
  props.open
  ? cross
  : '')}


`;

class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  myFunction() {
    this.setState({
      open: !this.state.open
    })
  }
  render() {
const { open} =this.state
const { color} =this.props
    return (<StyledHamburger onClick={() => {
        this.myFunction()
      }} open={open} color={color}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>

    </StyledHamburger>);
  }

}

export default Hamburger
