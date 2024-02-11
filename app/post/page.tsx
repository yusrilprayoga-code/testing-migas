"use client";

import { useState, useEffect } from "react";
import { newVideos } from "@/utils";
import Link from "next/link";
import { FilterNewVideos } from "@/types";

const page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    newVideos({
        id: parseInt("number"),
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
          <div className="col-md-12 pt-5">
            <Link
              href="/addVideo"
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            >
              Add New Post
            </Link>
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
                  {data.map((item: FilterNewVideos) => (
                    <div
                      className="
                            bg-white
                            p-4
                            rounded-lg
                            justify-between
                            hover:shadow-lg
                            transition-shadow
                            duration-300
                            ease-in-out
                            cursor-pointer
                    "
                      key={item.id}
                    >
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
                      <img
                        className="
                            w-full
                            object-cover
                            rounded-lg
                            mb-4
                            cursor-pointer

                      "
                        src={item.image}
                        alt={item.title}
                      />
                      <Link
                        className="
                            text-center
                            bg-blue-500
                            hover:bg-blue-700
                            text-white
                            font-bold
                            py-2
                            px-4
                            rounded
                            mt-2
                            block
                            "
                        href={`/editVideo/${item.id}`}
                      >
                        Edit Post
                      </Link>

                      <Link
                        className="
                            text-center
                            bg-red-500
                            hover:bg-red-700
                            text-white
                            font-bold
                            py-2
                            px-4
                            rounded
                            mt-2
                            block
                            "
                        href={`/delete/${item.id}`}
                      >
                        Delete Post
                      </Link>
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
