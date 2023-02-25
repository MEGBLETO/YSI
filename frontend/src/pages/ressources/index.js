import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navigation from "@/components/Navigation";
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import readXlsxFile from "read-excel-file";
import ImportExelModal from "@/components/ImportExelModal";
import PhotoviewModal from "@/components/PhotoviewModal";
import RessourceModal from "../../components/createRessourceModal";
import axios from "axios";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [preview, setPreview] = useState(false);

  const [ressourceModal, setShowRessourceModal] = useState(false);
  const [excelData, setExcelData] = useState([]);

  const [ressources, setRessources] = useState();

  const createCampaign = async (data) => {
    await axios
      .post("http://localhost:5000/ressource/addressource", data)
      .then((res) => {
        console.log(res);
      });
  };

  const getAllRessources = async () => {
    const ressources = await axios.get(
      `http://localhost:5000/ressource/getressource`
    );

    if (ressources) {
      console.log(ressources.data);
      setRessources(ressources.data);
    }
  };

  const handleClick = () => {
    setShowModal((prev) => !prev);
  };

  const handleressourceModal = () => {
       setShowRessourceModal((prev) => !prev);
  };

  const formatExcelData = () => {
    let dataArray = [];

    for (let i = 1; i < excelData.length; i++) {
      let currentKey = excelData[i];
      let tempData = {
        title: currentKey?.[0],
        description: currentKey?.[1],
        startDate: currentKey?.[2],
        endDate: currentKey?.[3],
        budget: currentKey?.[4],
        ressources: currentKey?.[5],
      };
      dataArray.push(tempData);
    }
    dataArray.forEach((item) => {
      createCampaign(item);
    });
  };

  const showPreview = () => {
    setPreview((prev) => !prev);
  };

  useEffect(() => {
    formatExcelData();
  }, [excelData]);

  useEffect(() => {
    getAllRessources();
  }, []);

  return (
    <>
      <Navigation />
      <div className="min-h-[200vh] w-full ">
        {showModal ? (
          <ImportExelModal
            handleclick={handleClick}
            setExcelData={setExcelData}
          />
        ) : (
          <></>
        )}

        {preview ? (
          <PhotoviewModal
            handleclick={showPreview}
            setExcelData={setExcelData}
          />
        ) : (
          <></>
        )}
        {ressourceModal ? (
          <RessourceModal   handleressourceModal={handleressourceModal}/>
        ) : (
          <></>
        )}
        <div className="relative top-[10vh] w-full ">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold p-3">RESSOURCES</h1>
          </div>
          <div className="w-10/12 min-h-[600px] mx-auto">
            <div className="flex justify-evenly items-center p-3 bg-green-600">
              <div className="space-x-2">
                <input
                  className="border-2 p-1 border-black"
                  type="search"
                  placeholder="Search..."
                />
                <select className="p-1" name="pets" id="pet-select">
                  <option value="">----</option>
                  <option value="1">10</option>
                  <option value="2">20</option>
                  <option value="3">30</option>
                  <option value="4">40</option>
                  <option value="5">50</option>
                  <option value="6">100</option>
                </select>
              </div>
              <div className="bg-gray-300 hover:shadow-md p-1 hover:cursor-pointer rounded-md">
                <p onClick={() => handleressourceModal()}>Create a new Ressource</p>
              </div>
            </div>
            <table className="min-h-screen pb-3 w-full border-black border-2">
              <thead >
                <tr className="p-3">
                  <th className="border-2 border-black">
                    <p>Thème</p>
                  </th>
                  <th className="border-2 border-black">
                    <p>Description</p>
                  </th>
                  <th className="border-2 border-black">
                    <p>Date d'obtention des droits</p>
                  </th>
                  <th className="border-2 border-black">
                    <p>Date D'expiration</p>
                  </th>
                  <th className="border-2 border-black">
                    <p>Edit / Delete</p>
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {ressources ? (
                  ressources.map((ressource) => (
                    <tr className="p-2 border-black border-2">
                      <td className="border-2 text-center border-black">
                        <p>{ressource.label}</p>
                      </td>
                      <td className="border-2 text-center border-black">
                        <p>{ressource.description}</p>
                      </td>
                      <td className="border-2 text-center border-black">
                        <p>{ressource.rightDate}</p>
                      </td>
                      <td className="border-2 text-center border-black">
                        <p>{ressource.endDate}</p>
                      </td>
                      <td className="border-2 text-center border-black">
                        <p className="flex  items-center justify-evenly  text-center">
                          <PencilIcon className="text-yellow-700 cursor-pointer w-5 hover:w-7 hover:transition ease=in-out" />
                          <TrashIcon className="text-red-400 w-5 cursor-pointer hover:w-7" />
                          <EyeIcon
                            onClick={() => {
                              showPreview();
                            }}
                            className="text-green-400 w-5 cursor-pointer hover:w-7"
                          />
                        </p>
                      </td>
                    </tr>
                  ))
                ) : (
                  <></>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
