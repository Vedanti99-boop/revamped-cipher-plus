import React from "react";

const TrendingRewards = () => {
  return (
    <>
      <div className="container mx-auto mt-[-4rem]">
        <p className="ml-[-5rem] font-bold text-2xl mt-[-3rem]">
          Trending Rewards
        </p>
        <br />

        <div className="flex flex-wrap -mx-28">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
            <div className="card mb-3">
              <div className="lg:flex">
                <div className="lg:w-1/3">
                  <img
                    src="images/shirt.jpg"
                    className="w-full h-full rounded-start object-cover"
                    alt="..."
                  />
                </div>
                <div className="lg:w-2/3">
                  <div className="card-body">
                    <h5 className="card-title text-xl font-medium">
                      Plain T-shirt
                    </h5>
                    <button className="w-4 h-4 border-2 border-black rounded-full bg-white flex items-center justify-center"></button>
                    <p className="card-text mb-2 mt-2 text-sm">1200 points</p>
                    <button class="hover:brightness-110 hover:animate-pulse font-bold py-2 px-3 rounded-full bg-gradient-to-r from-red-200 to-red-600 text-white">
                     Buy Now 
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
            <div className="card mb-3">
              <div className="lg:flex">
                <div className="lg:w-1/3">
                  <img
                    src="images/headphones.jpg"
                    className="w-full h-full rounded-start object-cover"
                    alt="..."
                  />
                </div>
                <div className="lg:w-2/3">
                <div className="card-body">
                    <h5 className="card-title text-xl font-medium">
                      Headphones
                    </h5>
                    <button className="w-4 h-4 border-2 border-black rounded-full bg-black flex items-center justify-center"></button>
                    <p className="card-text mb-2 mt-2 text-sm">1200 points</p>
                    <button class="hover:brightness-110 hover:animate-pulse font-bold py-2 px-3 rounded-full bg-gradient-to-r from-red-200 to-red-600 text-white">
                     Buy Now 
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
            <div className="card mb-3">
              <div className="lg:flex">
                <div className="lg:w-1/3">
                  <img
                    src="images/books2.jpg"
                    className="w-full h-full rounded-start object-cover"
                    alt="..."
                  />
                </div>
                <div className="lg:w-2/3">
                <div className="card-body">
                    <h5 className="card-title text-xl font-medium">
                     Books
                    </h5>
                    <button className="w-4 h-4 border-2 border-black rounded-full bg-white flex items-center justify-center"></button>
                    <p className="card-text mb-2 mt-2 text-sm">1200 points</p>
                    <button class="hover:brightness-110 hover:animate-pulse font-bold py-2 px-3 rounded-full bg-gradient-to-r from-red-200 to-red-600 text-white">
                     Buy Now 
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add more cards here as needed */}
        </div>
      </div>
    </>
  );
};

export default TrendingRewards;
