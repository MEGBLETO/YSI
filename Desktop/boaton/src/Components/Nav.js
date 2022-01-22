import React from 'react';
import { AiOutlineMenu} from 'react-icons/ai'

const Nav = () => {
  return <div>
      <nav className="flex justify-between w-full border-b-2 p-3 place-items-center text-sm">
          <div><h1 className="text-blue-900 text-xl font-bold">BoatOn</h1></div>

          <ul className=" hidden sm:flex  flex-wrap space-x-3">
              <li><div></div> Stockage</li>
              <li><div></div> Entretien</li>
              <li><div></div> Assurance</li>
              <li><div></div> Carnet d'entretien</li>
          </ul>

          <ul className="hidden  sm:flex place-items-center space-x-3">
           <span className="border-2 border-blue-900 p-1">+33 0758197311</span>
           <li className="flex-wrap">Louer mon emplacement</li>
           <li>Le Blog</li>
           <li className="bg-blue-800 text-white p-1">Mon Profil</li>
          </ul>

              <AiOutlineMenu className="text-2xl hover: cursor-pointer sm:hidden"/>
    
      </nav>


  </div>;
};

export default Nav;
