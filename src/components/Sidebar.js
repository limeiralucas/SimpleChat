/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getMessages } from '../actions';

class Sidebar extends PureComponent {
  constructor(props) {
    super(props);
    this.getMessages = props.getMessages;
  }

  render() {
    const { users } = this.props;
    return (
      <aside id="sidebar" className="sidebar">
        <section>User List</section>
        <ul id="usersList" className="usersList">
          {users.map(user => (
            <li key={user.id} id={user.id} onClick={e => this.getMessages(e.target.id)}>
              {user.name}
            </li>
          ))}
        </ul>
      </aside>
    );
  }
}

const mapDispatchToProps = { getMessages };

export default connect(
  null,
  mapDispatchToProps,
)(Sidebar);
