import React from "react";
import nftImg from "../assets/images/image-equilibrium.jpg";
import avatar from "../assets/images/image-avatar.png";

const Card = () => {
  return (
    <div className="main-bg">
      <div className="flex justify-center items-center h-screen">
        <div className="rounded-xl h-[600px] w-[350px] card-bg">
          <div className="flex justify-center">
            <div className="absolute opacity-0 hover:opacity-70 hover:cursor-pointer  mt-6 bg-cyan-300 rounded-xl h-[300px] w-[300px]">
              <div className="flex justify-center items-center h-full">
                <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fill-rule="evenodd">
                    <path d="M0 0h48v48H0z" />
                    <path
                      d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z"
                      fill="#FFF"
                      fill-rule="nonzero"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <img className="h-[300px] rounded-xl mt-6" src={nftImg} alt="" />
          </div>
          <p className="text-white text-2xl font-semibold ml-6 mt-6 hover:text-cyan-300 hover:cursor-pointer">
            Equilibrium #3429
          </p>
          <p className="mt-2 ml-6 mr-5 text-lg font-light text-gray-400">
            Our equilibrium collection promotes balance and calm
          </p>
          <div className="ml-6 mt-3">
            <svg
              className="inline"
              width="11"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                fill="#00FFF8"
              />
            </svg>{" "}
            <p className="inline text-cyan-300 ml-1">0.004 ETH</p>
            <p className="inline float-right mr-6 text-gray-400">3 days left</p>
            <svg
              className="inline float-right mr-2 mt-1"
              width="17"
              height="17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
                fill="#8BACD9"
              />
            </svg>
          </div>
          <div className="bg-gray-500 h-[1px] m-6"></div>
          <div className="ml-6">
            <img
              className="inline h-10 border-2 rounded-3xl"
              src={avatar}
              alt=""
            />
            <p className="inline ml-4 text-gray-400">
              Creation of{" "}
              <span className="text-white hover:text-cyan-300 hover:cursor-pointer">
                Jules Wyvern
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
