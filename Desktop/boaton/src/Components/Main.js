import React from 'react';
import Sidenav from './Sidenav';
import Containt from './Containt';

const Main = () => {
  return <div className="relative top-20 min-h-screen">
      <div className="grid grid-cols-2">
          <div className="w-1/2"><Sidenav/></div>
          <div className="col-span-1"><Containt/></div>

      </div>
  </div>;
};

export default Main;
