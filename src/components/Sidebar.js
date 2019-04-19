/* eslint-disable react/prop-types */
import React from 'react';

const Sidebar = ({ users = [] }) => (
  <aside id="sidebar" className="sidebar">
    <section>User List</section>
    <ul id="usersList" className="usersList">
      {users.map((user, index) => (
        <li key={index}>{user.name}</li>
      ))}
    </ul>
  </aside>
);

export default Sidebar;
