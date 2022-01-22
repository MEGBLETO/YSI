import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="min-h-full ">
      <nav className="flex fixed z-10 justify-between w-full border-b-2 p-3 place-items-center text-sm bg-white sha">
        <div>
          <Link to="/">
            <h1 className="text-blue-900 text-xl font-bold">BoatOn</h1>
          </Link>
        </div>

        <ul className=" hidden sm:flex  flex-wrap space-x-3">
          <Link to="/stockage">
            <li>
              <div></div>Stockage
            </li>
          </Link>
          <Link to="/entretien">
            <li>
              <div></div> Entretien
            </li>
          </Link>
          <Link to="/assurance">
            <li>
              <div></div> Assurance
            </li>
          </Link>
          <Link to="/carnet">
            <li>
              <div></div>Carnet d'entretien
            </li>
          </Link>
        </ul>

        <ul className="hidden  sm:flex place-items-center space-x-3">
          <span className="border-2 border-blue-900 p-1">+33 0758197311</span>
          <li className="flex-wrap">Louer mon emplacement</li>
          <li>Le Blog</li>
          <li className="bg-blue-800 text-white p-1">Mon Profil</li>
        </ul>

        <AiOutlineMenu className="text-2xl hover: cursor-pointer sm:hidden" />
      </nav>
    </div>
  );
};

export default Nav;
