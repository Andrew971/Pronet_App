import React, {Component} from 'react';
import {connect} from 'react-redux';
import Container from '../../Components/SwipeContainer';

class Swipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startX: 0,
      startY: 0,
      distanceX: 0,
      distanceY: 0
    };
  }

  componentDidMount = () => {
    window.addEventListener("touchstart", this.touchstart);
    window.addEventListener("touchmove", this.touchmove);
    window.addEventListener("touchend", this.touchend);

  }

  touchstart = (e) => {
    let startX = e.changedTouches[0].clientX;
    let startY = e.changedTouches[0].clientY;

    this.setState({startX: startX, startY: startY})
  }
  touchmove = (e) => {
    const {startX, startY} = this.state;
    let moveX = e.changedTouches[0].clientX;
    let moveY = e.changedTouches[0].clientY;
    let distanceX = (startX < moveX)
      ? (startX - moveX) * -1
      : startX - moveX;
    let distanceY = (startY < moveY)
      ? (startY - moveY) * -1
      : startY - moveY;

    this.setState({distanceX: distanceX, distanceY: distanceY})
  }

  touchend = (e) => {
    const {startX, startY, distanceX, distanceY} = this.state;
    const {dispatch, menuDisplay, RightDrawerDisplay} = this.props;
    let {innerHeight, innerWidth} = window;
    let middleX = innerHeight / 2;
    let middleY = innerWidth / 2;
    let borderStartX = innerHeight / 4;
    let borderEndX = middleX + borderStartX;
    let borderStartY = innerWidth / 4;
    let borderEndY = middleY + borderStartX;
    let endX = e.changedTouches[0].clientX;
    let endY = e.changedTouches[0].clientY;
    let swipX = ((startY && endY >= borderStartX) && (startY && endY <= borderEndX));
    let swipY = ((startX && endX >= borderStartY) && (startX && endX <= borderEndY));
    let right = (startX < middleY && distanceX > middleY && endX > startX);
    let left = (startX > middleY && distanceX > middleY && endX < startX);
    let up = (startY > middleX && distanceY > middleX && endY < startY);
    let down = (startY < middleX && distanceY > middleX && endY > startX);
    let tap = ((startX && startY) === (endX && endY) || (distanceX && distanceY) === 0);

    (!RightDrawerDisplay) && (!menuDisplay) && (right) && (swipX) && dispatch({type: "MENU_DISPLAY"});

    (!RightDrawerDisplay) && (menuDisplay) && (left) && (swipX) && dispatch({type: "MENU_HIDE", payload: false});

    (!menuDisplay) && (!RightDrawerDisplay) && (left) && (swipX) && dispatch({type: "RIGHT_DRAWER_DISPLAY"});

    (!menuDisplay) && (RightDrawerDisplay) && (right) && (swipX) && dispatch({type: "RIGHT_DRAWER_HIDE", payload: false});

    (up) && (swipY) && console.log('Up');
    (down) && (swipY) && console.log('Down');
    (tap) && console.log('tap');

    // console.log('innerHeight:' + innerHeight, 'innerWidth:' + innerWidth);
    // console.log('startX:' + startX, 'startY:' + startY);
    // console.log('distanceX:' + distanceX, 'distanceY:' + distanceY);
    // console.log('middleX:' + middleX, 'middleY:' + middleY);
    // console.log('borderStartX:' + borderStartX, 'borderEndX:' + borderEndX);
    // console.log('borderStartY:' + borderStartY, 'borderEndY:' + borderEndY);
    // console.log('endX:' + endX, 'endY:' + endY);
    // console.log('right:' + right, 'left:' + left);
    // console.log('up:' + up, 'down:' + down);
    // console.log('tap:' + tap);
    // console.log('swipX:' + swipY, 'swipY:' + swipY);

  }

  render() {
    const {drawerDisplay, children} = this.props

    return (<Container open={drawerDisplay} innerRef={self => this.body = self}>
      {children}
    </Container>);
  }
}

const mapStateToProps = (state) => {
  return {menuDisplay: state.AppBar.menuDisplay, RightDrawerDisplay: state.AppBar.RightDrawerDisplay, drawerDisplay: state.AppBar.drawerDisplay};
};

export default connect(mapStateToProps)(Swipe);
