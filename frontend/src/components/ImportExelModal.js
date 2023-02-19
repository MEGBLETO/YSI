import React from "react";
import { useForm } from "react-hook-form";
import readXlsxFile from 'read-excel-file'


const ImportExelModal = ({ handleclick }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data.file[0]);


      readXlsxFile(data.file[0]).then((rows) => {
        console.log(rows)
      })
    } catch (error) {
      console.log(error);
      //   setError(error.response.data.message)
      //   setMessageColor('#FF0000')
    }
  };

  return (
    <div className=" flex min-h-[100vh] backdrop-blur-sm bg-white/30 z-10  w-full absolute items-center justify-center">
      <div
        onClick={() => handleclick()}
        className="flex justify-center  absolute text-2xl p-4 cursor-pointer bg-red-500 top-3 right-3 items-center"
      >
        x
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-2/6 h-1/2 justify-evenly items-center"
      >
        <h1 className="text-2xl font-bold">Upload Excel file</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div>
            <div className="flex w-full flex-col  p-2 justify-between">
              <label className="pr-2">File:</label>
              <input
                className="p-2 border-2 w-[300px] border-black "
                type="file"
                name="excel"
                {...register("file")}
              />
            </div>
          </div>
        </div>

        <button
          className="bg-black text-white p-3"
          type="submit"
          name="submit"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default ImportExelModal;
