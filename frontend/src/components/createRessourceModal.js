import React from "react";
import { useForm } from "react-hook-form";


const createRessourceModal = ({handleressourceModal}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      createCampaign(data);
      handleressourceModal();
    } catch (error) {}
  };
  return (
    <div className=" flex min-h-[120vh] backdrop-blur-sm bg-white/30 z-10  w-full absolute items-center justify-center">
      <div
        onClick={() => handleressourceModal()}
        className="flex justify-center  absolute text-2xl p-4 cursor-pointer bg-red-500 top-3 right-3 items-center"
      >
        x
      </div>
      <div className="w-full flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex-col w-4/6 h-1/2 justify-evenly items-center"
        >
          <h1 className="text-center text-2xl font-bold">Add new ressouces</h1>

          <div className="w-full justify-center grid grid-cols-1 sm:grid-cols-2">
            <div className="flex w-full flex-col  p-2 justify-between">
              <label className="pr-2">Titre:</label>
              <input
                className="p-2 border-2 border-black"
                type="text"
                defaultValue=""
                name="long"
                {...register("label")}
              />
            </div>
           

            <div className="flex w-full flex-col  p-2 justify-between">
              <label className="pr-2">startDate:</label>
              <input
                className="p-2 border-2 border-black"
                type="date"
                defaultValue=""
                name="startDate"
                {...register("startDate")}
              />
            </div>
            <div className="flex w-full flex-col  p-2 justify-between">
              <label className="pr-2">endDate:</label>
              <input
                className="p-2 border-2 border-black"
                type="date"
                defaultValue=""
                name="endDate"
                {...register("endDate")}
              />
            </div>

            <div className="flex w-full flex-col  p-2 justify-between">
              <label className="pr-2">Url:</label>
              <input
                className="p-2 border-2 border-black"
                type="text"
                defaultValue=""
                name="ressourceUrl"
                {...register("url")}
              />
            </div>

            <div className="flex w-full flex-col  p-2">
              <label className="">Ressources:</label>
              <select
                className="p-2 border-2 border-black"
                type="selector"
                defaultValue=""
                name="types"
                {...register("types")}
              >
                <option value="">--Please choose an option--</option>
                <option value="Video">Video</option>
                <option value="Image">Image</option>
              </select>
            </div>

            {/* <div className="relative h-2/6 flex flex-col ">
                  <input
                    className="p-2 shadow-lg cursor-pointer h-5/6 text-white border-2 border-dotted border-black"
                    type="file"
                    accept=".pdf"
                    name="subject"
                    {...register("file")}
                    required
                  />
                  <label htmlFor="filelabel">Fichier</label>
                </div> */}

            <div className="flex w-full flex-col  p-2 justify-between">
              <label className="pr-2">Description:</label>
              <textarea
                className="p-2 border-2 border-black"
                type="text"
                rows="5"
                cols="33"
                defaultValue="description"
                name="description"
                {...register("description")}
              ></textarea>
            </div>
          </div>

          <div className="flex items-center w-full justify-center">
            <button
              className="bg-black items-center text-white p-3"
              type="submit"
              name="submit"
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default createRessourceModal;
