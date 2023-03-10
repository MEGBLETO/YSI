import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navigation from "@/components/Navigation";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import readXlsxFile from "read-excel-file";
import ImportExelModal from "@/components/ImportExelModal";
import CreatecampaignModal from "@/components/CreatecampaignModal";
import axios from "axios";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';



export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [campaignModal, setShowCampaignModal] = useState(false);

  const [excelData, setExcelData] = useState([]);

  const [campaigns, setCampaigns] = useState();
  

  const [input, setTextinput] = useState();

  const createCampaign = async (data) => {
    await axios
      .post("http://localhost:5000/campaign/addcampaign/", data)
      .then((res) => {
        console.log(res);
      });
      window.location.reload()
      NotificationManager.success('Success message', 'campagne has been successfully created');
  };

  const getAllCampaigns = async () => {
    const campaigns = await axios.get(
      `http://localhost:5000/campaign/getcampaigns/`
    );
    if (campaigns) {
      setCampaigns(campaigns.data);
    }
  };

  // useEffect(() => {
  //   if (campaigns) {
  //     const filteredData = campaigns.filter((item) =>
  //       item.description.toLowerCase().includes(input.toLowerCase())
  //     );
  //     setCampaigns(filteredData);
  //   }
  // }, [input]);

  const handleClick = () => {
    setShowModal((prev) => !prev);
  };

  const handleCampaignClick = () => {
    setShowCampaignModal((prev) => !prev);
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

  useEffect(() => {
    formatExcelData();
  }, [excelData]);

  useEffect(() => {
    getAllCampaigns();
  }, []);

  return (
    <>
      <Navigation />
      <NotificationContainer/>
      <div className="min-h-[200vh] w-full ">
        {showModal ? (
          <ImportExelModal
            handleclick={handleClick}
            setExcelData={setExcelData}
          />
        ) : (
          <></>
        )}
        {campaignModal ? (
         <CreatecampaignModal handleCampaignClick={handleCampaignClick} createCampaign={createCampaign}/>
        ) : (
          <></>
        )}
        <div className="relative top-[10vh] w-full ">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold p-3">CAMPAGNES</h1>
          </div>
          <div className="w-10/12 min-h-[600px] mx-auto">
            <div className="flex justify-evenly items-center p-3 bg-green-600">
              <div className="space-x-2">
                <input
                  className="border-2 p-1 border-black"
                  // onChange={(e)=> setTextinput(e.target.value)}
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
                <p onClick={() => handleClick()}>Importer.xls</p>
              </div>

              <div
                onClick={() => handleCampaignClick()}
                className="flex items-center flex-col bg-gray-300 hover:shadow-md p-1 hover:cursor-pointer rounded-md"
              >
                <p>Create campaign</p>
                <PlusIcon className="w-3" />
              </div>
            </div>
            <table className="min-h-screen pb-3 w-full border-black border-2">
              <thead>
                <tr>
                  <th className="border-2 border-black">
                    <p>Nom</p>
                  </th>
                  <th className="border-2 border-black">
                    <p>Description</p>
                  </th>
                  <th className="border-2 border-black">
                    <p>Date de debut</p>
                  </th>
                  <th className="border-2 border-black">
                    <p>Date de Fin</p>
                  </th>
                  <th className="border-2 border-black">
                    <p>Budget</p>
                  </th>
                  <th className="border-2 border-black">
                    <p>Actions</p>
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {campaigns ? (
                  campaigns.map(campaign => (
                    <tr  className="p-2 border-black border-2">
                      <td className="border-2 text-center border-black">
                        <p>{campaign.title}</p>
                      </td>
                      <td className="border-2 text-center border-black">
                        <p>{campaign.description}</p>
                      </td>
                      <td className="border-2 text-center border-black">
                        <p>{campaign.startDate}</p>
                      </td>
                      <td className="border-2 text-center border-black">
                        <p>{campaign.endDate}</p>
                      </td>
                      <td className="border-2 text-center border-black">
                        <p>{campaign.budget}</p>
                      </td>

                      <td className="border-2 text-center border-black">
                        <p className="flex  items-center justify-evenly  text-center">
                          <PencilIcon className="text-yellow-700 cursor-pointer w-5 hover:w-7 hover:transition ease-in-out" />
                          <TrashIcon className="text-red-400 w-5 cursor-pointer hover:w-7 hover:transition ease-in-out" />
                          <PlusIcon className="text-red-400 w-5 cursor-pointer hover:w-7 hover:transition ease-in-out" />
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
