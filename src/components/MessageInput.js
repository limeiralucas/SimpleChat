import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../actions';

class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);

    this.sendMessage = props.sendMessage;
  }

  handleOnChange(event) {
    this.setState({ value: event.target.value });
  }

  handleOnKeyDown(event) {
    if (event.key === 'Enter') {
      const { value } = this.state;
      if (value.trim() !== '') {
        this.sendMessage(value, 'Lucas');
        this.setState({ value: '' });
      }
    }
  }

  render() {
    const { value } = this.state;
    return (
      <input
        type="text"
        id="messageInput"
        className="messageInput"
        value={value}
        onChange={this.handleOnChange}
        onKeyDown={this.handleOnKeyDown}
      />
    );
  }
}

export default connect(
  null,
  { sendMessage },
)(MessageInput);
