import React from 'react';
import '../assets/stylesheets/app.css';

import Sidebar from './Sidebar';
import MessageArea from './MessageArea';

const users = [{ name: 'Lucas' }, { name: 'Gabs' }];

const App = () => (
  <div className="mainContainer">
    <Sidebar users={users}>UHU</Sidebar>
    <MessageArea />
  </div>
);

export default App;
