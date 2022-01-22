import React from "react";

const Containt = () => {
  return (
    <div className="flex flex-col h-screen align-items-center">
      <div className="flex flex-col ">
        <div className="flex flex-col my-6">
          <div className="p-2">
            <h1>Vous aimez le BoatOn Book ? Racommandez-le?</h1>
          </div>
          <div className="flex">
            <h1 className="border-r-2 border-black min-w-10 p-3 text-blue-900">
              {" "}
              3 Mois Gratuits pour vous
            </h1>
            <h1 className="min-w-10 p-3 text-blue-900">
              {" "}
              3 Mois Gratuits pour vous
            </h1>
          </div>
        </div>
        <div className="flex relative flex-col space-y-3">
          <h1 className="p-3 bg-yellow-400 w-1/2 cursor-pointer">
            J'envoie un SMS
          </h1>
          <h1 className="p-3 bg-yellow-400 w-1/2 cursor-pointer">
            J'envoie un SMS
          </h1>
          <h1 className="p-3 bg-yellow-400 w-1/2 cursor-pointer">
            J'envoie un SMS
          </h1>
          <h1></h1>
        </div>


        <table className=" border-2 my-5 border-black p-2">
          <thead>
            <tr>
              <th >Date</th>
              <th >Filleul</th>
              <th >Envoi</th>
              <th >Statut</th>
              <th >Action</th>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <td className="flex flex-wrap">6 Mai 2020</td>
              <td className="flex flex-wrap">carnel MEGBLETO</td>
              <td className="flex flex-wrap">carnel MEGBLETO</td>
              <td className="flex flex-wrap">carnel MEGBLETO</td>
            </tr>
            <tr>
            <td className="flex flex-wrap">carnel MEGBLETO</td>
            <td className="flex flex-wrap">carnel MEGBLETO</td>

            </tr>
          </tbody>
        </table>

        <div className="flex text-center place-items-center border-2 border-blue-900 p-2">
          <div>
            <h1 className="text-3xl text-blue-900 p-1">+80%</h1>
          </div>
          <div>
            <h1 className="text-xl flex-wrap">
              des utillisateurs recommandent BoatOn
            </h1>
          </div>
        </div>
        <p className="p-4">
          * A noter: Vous pouvez parrainer jusqua 5 filleuls sur cette page. si
          vous souhaitez en parrainer davantage, nhesitez pas a nous envoyer un
          petit mot paul@boaton.fr!
        </p>
      </div>
    </div>
  );
};

export default Containt;
