import React from 'react';
import styled from "styled-components";

const StyledFilter = styled.svg `
    width: ${props=>(props.size?props.size:"1em")};
    height: ${props=>(props.size?props.size:"1em")};
    fill: currentColor;
      display: inline-block;
      font-size: 24px;
      transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      user-select: none;
      flex-shrink: 0;
`;

const Filter = ({color,size}) => (<StyledFilter
   viewBox="0 0 24 24" color={color && color} aria-hidden="true" focusable="false" size={size&&size}>
<path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path>
</StyledFilter>);
export default Filter
