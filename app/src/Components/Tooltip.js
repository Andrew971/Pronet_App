import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled, {keyframes} from "styled-components";
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const Tip = styled.div `
position: relative;
display: inline-block;

/* Tooltip text */
.tooltiptext {
position:absolute;
visibility: hidden;
width: 100px;
background-color: rgba(200,196,196,.79);
color: rgb(56,56,56);
text-align: center;
padding: 5px 0;
top: 3rem;
left: -3rem;

}

&:hover .tooltiptext {
visibility: visible;
animation: 1s ${fadeIn} ease-in-out;
}


`;


class ToolTip extends Component {


  render() {
    const {children,title} =this.props
    return (<Tip>
      {children}
      <span className="tooltiptext">{title}</span>
    </Tip>);
  }
}

const mapStateToProps = (state) => {
  return {};
}
export default connect(mapStateToProps)(ToolTip);
