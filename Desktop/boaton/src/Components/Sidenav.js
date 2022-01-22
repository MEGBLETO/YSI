import React from 'react';
import { Link } from 'react-router-dom';

const Sidenav = () => {
  return <div className="border-2 p-1">
      <ul className="flex flex-col justify-between h-full">
          <Link to="/info"><li>Mes informations personelles</li></Link>
          <Link to="/assurance"><li>Mon Bateau</li></Link>
          <Link to="/assurance"><li>Mes Emplacements</li></Link>
          <Link to="/assurance"><li>Mes demandes</li></Link>
          <Link to="/assurance"><li>Mes Messages</li></Link>
          <Link to="/parrainage"><li>Mes Parrainages</li></Link>
          
      </ul>
  </div>;
};

export default Sidenav;
