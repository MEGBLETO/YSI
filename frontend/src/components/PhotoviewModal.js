import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const PhotoviewModal = ({handleclick}) => {
  return (
    <div className="flex min-h-[120vh] backdrop-blur-sm bg-white/30 z-10  w-full absolute items-center justify-center">
      <div
        onClick={() => handleclick()}
        className="flex flex-col justify-center  absolute text-2xl p-4 cursor-pointer bg-red-500 top-3 right-3 items-center"
      >
        x
      </div>
      <div className=" flex items-center  justify-center w-full h-full">
      <PhotoProvider className="relative w-2/3 h-1/2 mx-auto " >
        <PhotoView src="https://source.unsplash.com/random/?beach/?villa">
          <img src="https://source.unsplash.com/random/?beach/?villa" alt="" />
        </PhotoView>
      </PhotoProvider>
      </div>
      
    </div>
  );
};

export default PhotoviewModal;
