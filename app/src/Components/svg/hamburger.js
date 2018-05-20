import React from 'react';
import styled from "styled-components";

const StyledHamburger = styled.svg `
    fill: currentColor;
    width: ${props=>(props.size?props.size:"1em")};
    height: ${props=>(props.size?props.size:"1em")};
    display: inline-flex;
    font-size: 24px;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    user-select: none;
`;

const Hamburger = ({color,size}) => (<StyledHamburger viewBox="0 0 24 24" color={color && color} aria-hidden="true" focusable="false" size={size&&size}>
  <g>
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>

  </g>

</StyledHamburger>);
export default Hamburger
