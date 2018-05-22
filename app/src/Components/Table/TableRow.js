import styled from "styled-components";

export default styled.tr `
color: inherit;
min-height: 56px;
display: table-row;
outline: none;
vertical-align: middle;

&:hover{
  background-color:${props=>(props.hover?'rgba(186,182,182,.9)':'0')}
}

`;
