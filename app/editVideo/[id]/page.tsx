"use client";

import { useState, useEffect } from "react";

import { editVideos, newVideos } from "@/utils";

const page = () => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    image: "",
    url: "",
  });
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await newVideos({ 
          id: parseInt("number"),
          title: "string",
          description: "string",
          image: "string",
          url: "string",
        });

        if (result.length > 0) {
          const firstItem = result[
            Math.floor(Math.random() * result.length)
          ];
          setFormData({
            id: String(firstItem.id),
            title: firstItem.title,
            description: firstItem.description,
            image: firstItem.image,
            url: firstItem.url,
          });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const result = await editVideos(formData as any);
      setFormData(result);
      alert('Video updated successfully');
      window.location.href = '/post';
    } catch (error) {
      console.error('Error updating video:', error);
    }
  };
  return (
    <>
    <div
      className="border-b border-gray-900/10 
    bg-white
    shadow-sm
    sm:rounded-lg
    sm:overflow-hidden
     p-32
    "
    >
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Edit Video
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Fill in the form to edit a video
      </p>

        <form
            onSubmit={handleFormSubmit}
            action="/post"
            className="space-y-8 divide-y divide-gray-200"
        >
            <div className="mt-10
        grid
        gap-6
        grid-cols-1
        sm:grid-cols-2
        sm:gap-x-8
        sm:gap-y-6

      ">
        <input type="hidden" name="id" value={formData.id} disabled />
        <div className="sm:col-span-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Title
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              required
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className=" p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Description
          </label>
          <div className="mt-2">
            <input
              id="description"
              name="description"
              value={formData.description}
              required
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Image Url
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              required
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
              className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Video Url
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="url"
              name="url"
              value={formData.url}
              required
              onChange={(e) =>
                setFormData({ ...formData, url: e.target.value })
              }
              className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded sm:col-span-4"
      >
        Edit Video
      </button>
        </form>
    </div>
    </>
  );
};

export default page;
