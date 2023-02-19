
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navigation from "@/components/Navigation";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import readXlsxFile from "read-excel-file";
import ImportExelModal from "@/components/ImportExelModal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    console.log("hello");
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen w-full ">
        {showModal ? <ImportExelModal handleclick={handleClick} /> : <></>}
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
                <p onClick={() => handleClick()}>Importer.xls</p>
              </div>
            </div>
            <table className="w-full border-black border-2">
              <thead>
                <tr>
                  <th className="border-2 border-black">
                    <p>Nom</p>
                  </th>
                  <th className="border-2 border-black">
                    <p>Description</p>
                  </th>
                  <th className="border-2 border-black">
                    <p>%Exp</p>
                  </th>
                  <th className="border-2 border-black">
                    <p>Date d'exp</p>
                  </th>
                  <th className="border-2 border-black">
                    <p>Actions</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="p-2 border-black border-2">
                  <td className="border-2 text-center border-black">
                    <p>Hello</p>
                  </td>
                  <td className="border-2 text-center border-black">
                    <p>Hello</p>
                  </td>
                  <td className="border-2 text-center border-black">
                    <p>Hello</p>
                  </td>
                  <td className="border-2 text-center border-black">
                    <p>Hello</p>
                  </td>
                  <td className="border-2 text-center border-black">
                    <div className="relative w-full h-full flex items-center">
                      <PencilIcon className="w-[20px]" />
                      <TrashIcon className="w-[20px]" />
                    </div>
                  </td>
                </tr>
                <tr className="p-2 border-black border-2">
                  <td className="border-2 text-center border-black">
                    <p>Hello</p>
                  </td>
                  <td className="border-2 text-center border-black">
                    <p>Hello</p>
                  </td>
                  <td className="border-2 text-center border-black">
                    <p>Hello</p>
                  </td>
                  <td className="border-2 text-center border-black">
                    <p>Hello</p>
                  </td>
                  <td className="border-2 text-center border-black">
                    <p>Hello</p>
                  </td>
                </tr>
                <tr className="p-2 border-black border-2">
                  <td className="border-2 text-center border-black">
                    <p>Hello</p>
                  </td>
                  <td className="border-2 text-center border-black">
                    <p>Hello</p>
                  </td>
                  <td className="border-2 text-center border-black">
                    <p>Hello</p>
                  </td>
                  <td className="border-2 text-center border-black">
                    <p>Hello</p>
                  </td>
                  <td className="border-2 text-center border-black">
                    <p>Hello</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
