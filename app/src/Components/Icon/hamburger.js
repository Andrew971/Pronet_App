import React, {PureComponent} from 'react';
import styled, {css,keyframes} from "styled-components"
const Spine = keyframes `
  100% {
    transform: rotate(360deg);
  }
}
`;
const cross = css `

.bar1 {
   -webkit-transform: rotate(-45deg) translate(-4px, 4px);
   transform: rotate(-45deg) translate(-4px, 4px);
}

.bar2 {opacity: 0;}

.bar3 {
   -webkit-transform: rotate(45deg) translate(-3px, -3px);
   transform: rotate(45deg) translate(-3px, -3px);

`
const StyledHamburger = styled.div `
display: block;
    cursor: pointer;
border-radius:50%;
padding:0.5rem;
max-width: 100%;

.bar1, .bar2, .bar3 {
  width:${props=>props.width||"1rem"};
  height: ${props=>props.height||"2px"};
    background-color: ${props=>props.color||"rgb(249,249,249)"};
    margin: 3px 0;
    transition: 0.4s;
}
&:hover{
  animation: ${Spine} 1s linear 1;

}
 ${props => (
  props.open
  ? cross
  : '')}


`;

class Hamburger extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  myFunction() {
    const {open}=this.state
    !open && this.setState({open: true})
    open && this.setState({open: false})

  }
  // componentWillUnMount=()=>{
  //   this.setState({
  //     open: false
  //   })
  // }
  render() {
// const { open} =this.state
const { color,width,height,open} =this.props
    return (<StyledHamburger onClick={() => {
        this.myFunction()
      }} open={open} color={color} width={width} height={height}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>

    </StyledHamburger>);
  }

}

export default Hamburger
