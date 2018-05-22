import React, { Component } from 'react';
import styled,{keyframes} from "styled-components";

const Spine = keyframes `
  100% {
    transform: rotate(360deg);
  }
}
`;
const StyledHamburger = styled.svg `
    fill: currentColor;
    width: ${props=>(props.size?props.size:"1em")};
    height: ${props=>(props.size?props.size:"1em")};
    display: inline-flex;
    font-size: 24px;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    user-select: none;
      animation: ${props=>(props.click?`${Spine} 1s linear 1`:'')};



`;


class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click:false
    };
  }
Spinner=()=>{
  const {click} = this.state
  this.setState({click:!click})
}
  render() {
    const {color,size,click} =this.props
    // const {click} = this.state
    return (
      <StyledHamburger viewBox="0 0 24 24" color={color && color} aria-hidden="true" focusable="false" size={size&&size} onClick={()=>{this.Spinner()}} click={click}>
        <g>
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>

        </g>

      </StyledHamburger>
        );
  }

}

export default Hamburger
