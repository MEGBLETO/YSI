import React from 'react';

const Sidenav = () => {
  return <div className="border-2 p-1">
      <ul className="flex flex-col justify-between h-full">
          <li>Mes informations personelles</li>
          <li>Mon Bateau</li>
          <li>Mes Emplacements</li>
          <li>Mes demandes</li>
          <li>Mes Messages</li>
          <li>Mes Parrainages</li>
      </ul>
  </div>;
};

export default Sidenav;
