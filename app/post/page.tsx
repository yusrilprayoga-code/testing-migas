"use client";

import { useState, useEffect, use } from "react";
import { newVideos } from "@/utils";

const page = () => {
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
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Welcome to your post
            </h2>
          </div>
          <div className="col-md-12">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
              Add New Post
            </button>
          </div>
          <div className="col-md-12 mt-4">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-screen">
              <div className="flex justify-center items-center h-full">
                <div
                  className="
                    grid
                    grid-cols-3
                    gap-4
                    w-full
                    h-full
                    overflow-y-auto
                    p-4
                    bg-gray-100
                    border-4
                    border-dashed
                    border-gray-200
                    rounded-lg
                "
                >
                  {data.map((item: any) => (
                    <div key={item.id}>
                      <h2
                        className="
                                font-bold
                                text-gray-900
                                mb-4
                                hover:text-blue-500
                                cursor-pointer
                            "
                      >
                        <a href={item.url} target="_blank" rel="noreferrer">
                            {item.title}
                        </a>
                      </h2>
                      <img src={item.image} alt={item.title} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
