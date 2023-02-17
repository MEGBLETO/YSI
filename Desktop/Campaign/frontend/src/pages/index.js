import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen w-full ">
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
                <p>Importer.xls</p>
              </div>
            </div>
            <table className="w-full border-black border-2">
              <th>Nom</th>
              <th>Description</th>
              <th>%Exp</th>
              <th>Date d'exp</th>
              <th>Actions</th>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
