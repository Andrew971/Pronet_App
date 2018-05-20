import React from 'react';
import ReactDOM from 'react-dom';
const Root = document.getElementById('portal-root');

export default class Portal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    Root.appendChild(this.el);
  }

  componentWillUnmount() {
    Root.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}
