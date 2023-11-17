import React from "react";

const Quote = () => {
  return (
    <>

    {/* <button className="border-2 border-red-500 rounded-full px-3 py-2">
              Claim Rewards
            </button> */}
      <div className="grid grid-cols-5 gap-4 mt-[-3rem] ">
        <div className="col-span-4">
          <div className="px-5 my-44 ">
            <p className="text-6xl w-1/2 mb-4 font-bold">Your Gateway to</p>
            <p className="text-6xl w-1/2 mb-4 font-bold">Exclusive Perks</p>

            {/* font-mono */}
            <button
              class="cursor-pointer inline-flex items-center rounded-full px-7 py-3 text-xl font-semibold text-black-900 hover:text-white border-2 border-rose-500
                    hover:bg-rose-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 hover:bg-rose-500 duration-300  focus:bg-transparent"
            >
              Claim Rewards
            </button>
          </div>
        </div>

        <div className="order-2 md:col-span-1 mt-48 bg-white bg-opacity-10 backdrop-blur-sm border border-opacity-30 border-white rounded-full shadow-lg  px-14 w-72 ml-[-4rem] h-36 ">
          <p className="my-4">
            <span className="text-3xl font-bold text-red-500">579</span>
            <span className="text-xl "> P</span>oints{" "}
            <span className="text-xl ">B</span>alance
          </p>
          <p className="">
            <span className="text-3xl font-bold text-red-500">5</span>
            <span className="text-xl "> B</span>adges
          </p>
        </div>
      </div>
    </>
  );
};

export default Quote;
