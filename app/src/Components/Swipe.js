import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from "styled-components";

const Container = styled.div`
overflow: hidden; /* Enable scroll if needed */



@media (min-width: 660px) {
}
  `;

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
      window.addEventListener("touchmove", this.slideDrawer);
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
      const {dispatch, drawerLeftDisplay, drawerRightDisplay} = this.props;
      let {innerHeight, innerWidth} = window;
      let middleX = innerHeight / 2;
      let middleY = innerWidth / 2;
      let leftEdge = innerWidth / 8;
      let rightEdge = innerWidth - leftEdge;
      let topEdge = innerHeight / 8;
      let bottomEdge = innerHeight - topEdge;
      let borderStartX = innerHeight / 4;
      let borderEndX = middleX + borderStartX;
      let borderStartY = innerWidth / 4;
      let borderEndY = middleY + borderStartX;
      let endX = e.changedTouches[0].clientX;
      let endY = e.changedTouches[0].clientY;
      let swipX = ((startY && endY >= borderStartX) && (startY && endY <= borderEndX));
      let swipY = ((startX && endX >= borderStartY) && (startX && endX <= borderEndY));
      let right = (startX < middleY && distanceX > middleY && endX > startX && startX <= leftEdge );
      let left = (startX > middleY && distanceX > middleY && endX < startX && startX >= rightEdge);
      let up = (startY > middleX && distanceY > middleX && endY < startY && startY >= bottomEdge);
      let down = (startY < middleX && distanceY > middleX && endY > startX && startY <= topEdge);
      let tap = ((startX && startY) === (endX && endY) || (distanceX && distanceY) === 0);

      (!drawerRightDisplay) && (!drawerLeftDisplay) && (right) && (swipX) && dispatch({type: "LEFT_DRAWER_DISPLAY"});

      (!drawerRightDisplay) && (drawerLeftDisplay) && (left) && (swipX) && dispatch({type: "LEFT_DRAWER_HIDE", payload: false});

      (!drawerLeftDisplay) && (!drawerRightDisplay) && (left) && (swipX) && dispatch({type: "RIGHT_DRAWER_DISPLAY"});

      (!drawerLeftDisplay) && (drawerRightDisplay) && (right) && (swipX) && dispatch({type: "RIGHT_DRAWER_HIDE", payload: false});

      (up) && (swipY) && console.log('Up');
      (down) && (swipY) && console.log('Down');
      (tap) && console.log('tap');

      // console.log('innerHeight:' + innerHeight, 'innerWidth:' + innerWidth);
      // console.log('startX:' + startX, 'startY:' + startY);
      // console.log('distanceX:' + distanceX, 'distanceY:' + distanceY);
      // console.log('middleX:' + middleX, 'middleY:' + middleY);
      // console.log('leftEdge:' + leftEdge, 'rightEdge:' + rightEdge);
      // console.log('topEdge:' + topEdge, 'bottomEdge:' + bottomEdge);
      // console.log('borderStartX:' + borderStartX, 'borderEndX:' + borderEndX);
      // console.log('borderStartY:' + borderStartY, 'borderEndY:' + borderEndY);
      // console.log('endX:' + endX, 'endY:' + endY);
      // console.log('right:' + right, 'left:' + left);
      // console.log('up:' + up, 'down:' + down);
      // console.log('tap:' + tap);
      // console.log('swipX:' + swipY, 'swipY:' + swipY);


    }

    slideDrawer = e =>{
      let moveX = e.changedTouches[0].clientX;
      console.log(moveX);
    }
    render() {
      const {drawerDisplay, children} = this.props

      return (<Container open={drawerDisplay}>
        {children}
      </Container>);
    }
  }

  const mapStateToProps = (state) => {
    return {drawerLeftDisplay: state.UI.drawerLeftDisplay, drawerRightDisplay: state.UI.drawerRightDisplay, drawerDisplay: state.UI.drawerDisplay};
  };

  export default connect(mapStateToProps)(Swipe);
