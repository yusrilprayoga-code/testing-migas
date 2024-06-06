"use client";
import React, { useState } from "react";

const Page = () => {
  const [tahun, setTahun] = useState(1);
  const handleChangeTahun = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTahun(Number(e.target.value));
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="flex items-center justify-center">
        <h2 className="text-3xl font-bold text-gray-900">Add Data Migas</h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="Tahun"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Tahun
            </label>
            <div className="mt-2">
              <input
                id="tahun"
                name="tahun"
                type="number"
                min="1"
                max="20"
                value={tahun}
                onChange={handleChangeTahun}
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {[...Array(tahun)].map((_, index) => (
            <div key={index}>
              <div>
                <label
                  htmlFor={`Produksi-${index}`}
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Produksi Tahun {index + 1}
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="number"
                  id={`Produksi-${index}`}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          ))}
          <div>
            <label
              htmlFor="kapital"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Jumlah Kapital
            </label>
            <div className="mt-2">
              <input
                id="kapital"
                type="number"
                name="kapital"
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></input>
            </div>
          </div>
          <div>
            <label
              htmlFor="nonkapital"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Jumlah Non Kapital
            </label>
            <div className="mt-2">
              <input
                id="nonkapital"
                type="number"
                name="nonkapital"
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></input>
            </div>
          </div>
          <div>
            <label
              htmlFor="biaya"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Biaya Operasi
            </label>
            <div className="mt-2">
              <input
                id="biaya"
                type="number"
                name="biaya"
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></input>
            </div>
          </div>
          <div>
            <label
              htmlFor="harga"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Harga Minyak
            </label>
            <div className="mt-2">
              <input
                id="harga"
                type="number"
                name="harga"
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></input>
            </div>
          </div>
          <div>
            <label
              htmlFor="pajak"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Pajak
            </label>
            <div className="mt-2">
              <input
                id="pajak"
                name="pajak"
                type="number"
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></input>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
