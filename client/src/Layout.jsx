import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <React.Fragment>
      <div className="p-4 flex flex-col min-h-screen">
        <Header />
        <Outlet />
      </div>
    </React.Fragment>
  )
}

export default Layout