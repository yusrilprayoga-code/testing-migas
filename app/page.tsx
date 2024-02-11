"use client";

import { newVideos } from "@/utils";
import { useState, useEffect } from "react";
const home = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
      newVideos({
          title: "string",
          description: "string",
          image: "string",
          url: "string",
      }).then((result) => {
          setData(result);
      });
    }, []);
  return (
    <div>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="py-4">
              <div className="border-4 border-dashed border-gray-200 rounded-lg p-5 h-96">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Welcome to your dashboard
                  </h2>
                  <div className="grid grid-cols-3 gap-4 w-full mt-4">
                    <div className=" bg-blue-500 p-4 rounded-lg shadow-md">
                      <h2 className="text-2xl font-bold text-gray-900">
                        {data.length}
                      </h2>
                      <p className="text-gray-600">
                        Videos
                      </p>
                    </div>
                    <div className=" bg-amber-500 p-4 rounded-lg shadow-md">
                      <h2 className="text-2xl font-bold text-gray-900">20</h2>
                      <p className="text-gray-700">Comments</p>
                    </div>
                    <div className=" bg-lime-500 p-4 rounded-lg shadow-md">
                      <h2 className="text-2xl font-bold text-gray-900">30</h2>
                      <p className="text-gray-600">Users</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default home;
