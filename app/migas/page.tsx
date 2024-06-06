"use client";

import Link from "next/link";

const page = () => {
  return (
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Welcome to Our Data Migas
            </h2>
          </div>
          <div className="col-md-12 pt-5">
            <Link
              href="/migas/addData"
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            >
              Add New Data
            </Link>
          </div>
          <div className="col-md-12 mt-4">
            <div className="border-4 border-dashed border-gray-200 rounded-lg ">
              <div className="flex justify-center items-center h-full">
                <div
                  className="
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
                  <div className="text-center">
                    <table
                      className="
                        table-auto
                        border-collapse
                        border
                        border-gray-800
                        w-full
                        mt-4
                    "
                    >
                      <thead
                        className="
                        bg-gray-800
                        text-white
                        text-center
                      "
                      >
                        <tr>
                          <th>Tahun</th>
                          <th>Produksi (Mbbl)</th>
                          <th>Income ($M)</th>
                          <th>Investasi ($M)</th>
                          <th>Opex ($M)</th>
                          <th>Di</th>
                          <th>Tax Income ($M)</th>
                          <th>Tax ($M)</th>
                          <th>NCF Undiscounted ($M)</th>
                        </tr>
                      </thead>
                      <tbody className="
                        text-center
                        bg-white
                        divide-y
                        divide-gray-200
                      ">
                        <tr>
                          <td>0</td>
                          <td></td>
                          <td>$8.500</td>
                          <td>$4.700</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>-$13.200</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>257</td>
                          <td>$8.224</td>
                          <td></td>
                          <td>$275</td>
                          <td>$850</td>
                          <td>$7.099</td>
                          <td>$3.940</td>
                          <td>$4.009</td>
                        </tr>
                        <tr>
                          <td>Total</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>$56.844</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
