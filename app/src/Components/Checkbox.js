import React, {PureComponent,} from 'react';
import {connect} from 'react-redux';
import styled, {keyframes} from "styled-components"

const shake = keyframes `
   10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;
const Span = styled.span `
  color: ${props=>(props.checked ? 'rgb(225, 0, 80)':'rgba(0, 0, 0, 0.54)')};
  display: inline-flex;
  align-items: center;
  flex: 0 0 auto;
  width: 48px;
  height: 48px;
  padding: 0;
  font-size: 1.5rem;
  text-align: center;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;
  cursor: pointer;
  margin: 0;
  border: 0;
  outline: none;
  position: relative;
  user-select: 'none';
  vertical-align: middle;
  justify-content: center;
  -moz-appearance: none;
  text-decoration: none;
  background-color: transparent;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  &:active{
    animation: ${shake} 0.82s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
  }
`
const StyledCheckbox = styled.svg `
  fill: currentColor;
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 24px;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  user-select: none;
  flex-shrink: 0;
`

const Input = styled.input `
top: 0;
left: 0;
width: 100%;
cursor: inherit;
height: 100%;
margin: 0;
opacity: 0;
padding: 0;
position: absolute;

@media (max-width: 660px) {

}
`;

class Checkbox extends PureComponent {


  render() {
    const {checked,indeterminate} = this.props

    return (<Span checked={checked}>
      <StyledCheckbox focusable="false" viewBox="0 0 24 24" aria-hidden="true">

      {checked && <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path> }

      { !checked && <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>}

      {indeterminate && <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path>}
      </StyledCheckbox>
      <Input type="checkbox" />
    </Span>);
  }
}



const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Checkbox);
