import React, {PureComponent,} from 'react';
import {connect} from 'react-redux';
import styled,{keyframes} from "styled-components";
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
const StyledButton = styled.button`

  background: ${props => (props.primary ? props.theme.primary : 'transparent')};

  color: ${props => (props.primary ? props.theme.color.primary : props.theme.color.secondary)};
  box-shadow: ${props => (props.raised ? '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12) ': 0)};
  border-radius: ${props => (props.rounded ? '10rem' :'0.3rem')};
  font-size: ${props => props.size};
  border: ${props => props.outlined? '1px solid rgba(0, 0, 0, 0.14)':0};

  margin: 0.5rem;
  padding: 0.5em 2em;

  cursor:pointer;
  position:relative;
  background-position: center;
  transition: background 0.8s;

  outline: none;
  // &:focus{
  //   animation: ${shake} 0.82s cubic-bezier(.36,.07,.19,.97) both
  // }
  &:hover {
  background: ${props => (props.primary ? `${props.theme.primary} radial-gradient(circle, transparent 1%, ${props.theme.primary} 1%) center/15000%`: `rgb(209,209,209) radial-gradient(circle, transparent 1%, rgb(209,209,209) 1%) center/15000%`)} ;
}
&:active {
  background-color: ${props => props.outlined? 'rgb(162,162,162)':'rgb(209,209,209)'};
  background-size: 100%;
  transition: background 0s;
}

  @media (max-width: 740px) {
    font-size: 1.3rem;
    margin: 0.3em;
    padding: 0.15em .5em;

  }
}
`;

class Button extends PureComponent {



  render() {
    const {children,primary,raised,rounded,size, outlined} = this.props;
    return (<StyledButton primary={primary} raised={raised} rounded={rounded} size={size} outlined={outlined}>
      {children}
      </StyledButton>)
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Button);
