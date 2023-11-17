import React from "react";

const Navbar = () => {
  return (
    <>
      <div>
        {/* <nav className="border-4 border-black flex justify-center justify-between"> */}
        <nav className="flex justify-between relative ">
          <div className="">
            <img
              className="absolute mt-[-6.7rem] ml-[-3rem] "
              src="/images/logo-1.png"
              alt=""
            />
            {/* <img className="absolute mt-[-6.7rem] ml-[-3rem] " src="/images/gift_logo1.png" alt="" /> */}
          </div>

          <ul className="flex space-x-10 px-8 py-4 ml-32 font-bold">
            <li className="">
              <a
                className="hover:underline"
                href="#"
                style={{ color: "black" }}
              >
                Home
              </a>
            </li>
            <li className="">
              <a className="" href="#" style={{ color: "black" }}>
                Leaderboard
              </a>
            </li>
            <li className="">
              <a className="" href="#" style={{ color: "black" }}>
                Store
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "black" }}>
                Learn & Earn
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "black" }}>
                About
              </a>
            </li>
          </ul>
          <div>
            {/* <button className=" ml-[-12rem] mt-3 border-2 border-red-700 rounded-full bg-red-500 text-white px-4 py-1">
              Cheer up a buddy
            </button> */}

            <button
              class="cursor-pointer inline-flex items-center rounded-full ml-[-13rem] mt-3 px-4 py-2  font-semibold text-black-500 hover:text-white border-2 border-rose-500
                    hover:bg-rose-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 hover:bg-rose-500 duration-300  focus:bg-transparent"
            >
              Cheer up a buddy
            </button>
          </div>

          <div className="px-5 py-4 flex space-x-5">
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="red"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </a>

            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </a>

            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </a>
          </div>
        </nav>
      </div>

      {/* <div>
      <div className="navbar flex justify-between items-center p-2 relative">
        <div className="hamburger inline-block p-4 md:hidden">
          <div className="line h-0.5 w-6 my-1 bg-black"></div>
          <div className="line h-0.5 w-6 my-1 bg-black"></div>
          <div className="line h-0.5 w-6 my-1 bg-black"></div>
        </div>

        <div className="">
          <img className="absolute mt-[-9rem] ml-[-9rem] " src="/images/logo-1.png" alt="" />

          <ul className="absolute inset-0 ">
            <li></li>
          <li className="">
            <a className="" href="#" style={{ color: "black" }}>
              Home
            </a>
          </li>
          <li className="">
            <a className="" href="#" style={{ color: "black" }}>
              Leaderboard
            </a>
          </li>
          <li className="">
            <a className="" href="#" style={{ color: "black" }}>
              Store
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: "black" }}>
              Learn & Earn
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: "black" }}>
              About
            </a>
          </li>
          
        </ul>
        </div>


        <div className=" flex p-2 space-x-1">
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="red"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </a>

          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </a>

          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </a>
        </div>


      </div>

    </div> */}
    </>
  );
};

export default Navbar;
