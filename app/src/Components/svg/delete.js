import React from 'react';
import styled from "styled-components";

const StyledDelete= styled.svg `
    width: ${props=>(props.size?props.size:"1em")};
    height: ${props=>(props.size?props.size:"1em")};
    fill: currentColor;
      display: inline-block;
      font-size: 24px;
      transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      user-select: none;
      flex-shrink: 0;
`;

const Delete = ({color,size}) => (<StyledDelete
   viewBox="0 0 24 24" color={color && color} aria-hidden="true" focusable="false" size={size&&size}>
<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
</StyledDelete>);
export default Delete
