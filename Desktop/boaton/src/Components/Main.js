import React from 'react';
import Sidenav from './Sidenav';
import Containt from './Containt';

const Main = () => {
  return <div className="relative top-20 h-full">
      <div className="grid-col-1 sm:grid grid-cols-2 p-2">
          <div className="hidden sm:block w-1/2"><Sidenav/></div>
          <div className="col-span-1"><Containt/></div>
      </div>
  </div>
};

export default Main;
