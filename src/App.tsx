import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Hello from '@components/Hello';
import UserPage from './pages/UserPage';

import style from './App.scss';

const App = (): JSX.Element => (
  <div className={style.componentWrapper}>
    <h2>Hello App</h2>
    <BrowserRouter>
      <nav className={style.routingWrapper}>
        <b>Routing: </b>
        <Link to="/">Home</Link>
        <Link to="/user">User profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
