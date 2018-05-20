import React, {Component} from 'react';
import {connect} from 'react-redux';
import './styles.css'
// import {AppBarAction} from '/reducer';
import NavContainer from './nav';
import Main from './main';
import Body from '../Components/Container';

class Containers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      touch: 0
    };
  }

  componentDidMount = () => {
    window.addEventListener("touchstart", this.touchstart)
    window.addEventListener("touchend", this.touchend)
  }

  touchstart = (e) => {
    let start = e.changedTouches[0].clientX

    if(Number(start) < 1){
      this.setState({touch: start})
    }else{
      this.setState({touch: 800})
    }
  }

  touchend = (e) => {
    console.log(this.body)

    const {touch} = this.state
    const {dispatch, } = this.props
    let end = e.changedTouches[0].clientX

    if (end < touch) {
      dispatch({type: "MENU_HIDE", payload:false})
    } else {
      dispatch({type: "MENU_DISPLAY"})
    }

  }

  handle=()=>{
  }

  render() {
    const { menuDisplay} = this.props

    return (<Body menuDisplay={menuDisplay} innerRef={self=>this.body = self}>
      <NavContainer/>
      <Main/>
    </Body>);
  }
}

const mapStateToProps = (state) => {
  return {menuDisplay: state.AppBar.menuDisplay};
};

export default connect(mapStateToProps)(Containers);
