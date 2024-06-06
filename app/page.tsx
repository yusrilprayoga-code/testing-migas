"use client";

const home = () => {
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
                  <div className=" mt-4
                    flex
                    items-center
                    justify-center
                    w-full
                  ">
                    <div className=" bg-blue-500 p-4 rounded-lg shadow-md">
                      <div className="text-center">
                        <h2 className="text-3xl font-bold text-white">
                          100
                        </h2>
                        </div>
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
