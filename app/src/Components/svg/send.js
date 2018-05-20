import React from 'react';
import styled from "styled-components";

const StyledSend = styled.svg `
    width: ${props=>(props.size?props.size:"1em")};
    height: ${props=>(props.size?props.size:"1em")};
    margin-right:2rem;
    fill: currentColor;
      display: inline-block;
      font-size: 24px;
      transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      user-select: none;
      flex-shrink: 0;
`;

const Send = ({color,size}) => (<StyledSend viewBox="0 0 24 24" color={color && color} aria-hidden="true" focusable="false" size={size&&size}>
  <g><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></g>

</StyledSend>);
export default Send
