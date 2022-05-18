import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Hello from '@components/Hello';

import style from './App.scss';
import { UserProfile } from '@components/UserProfile/UserProfile';

export const App = (): JSX.Element => (
  <div className={style.componentWrapper}>
    <h2>Hello App</h2>
    <BrowserRouter>
      <nav className={style.routingWrapper}>
        <b>Routing: </b>
        <Link to="/">Hello component</Link>
        <Link to="/world">World component</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/world" element={<UserProfile userBio="A Programmer" userName="Jack" />} />
      </Routes>
    </BrowserRouter>
  </div>
);
