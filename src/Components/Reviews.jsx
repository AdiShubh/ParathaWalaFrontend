import React from "react";

const Reviews = () => {
  return (
    <>
      <div className="text-center p-2 text-3xl">
        Some thoughs about us shared by our customers
      </div>
      <div className="grid grid-cols-4 p-4 ">
        <div
          className="border border-orange-600 m-4 p-6 
        shadow-lg rounded-md content-center "
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, .
          </p>
          <p className="text-right pr-6 mt-1">- Shubham</p>
        </div>
        

        {/* REviews block - 2 */}
        <div
          className="border border-orange-600 m-4 p-6 
        shadow-lg rounded-md content-center "
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, .
          </p>
          <p className="text-right pr-6 mt-1">- Shubham</p>
        </div>
        {/* REviews block - 3*/}
        <div
          className="border border-orange-600 m-4 p-6 
        shadow-lg rounded-md content-center "
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, .
          </p>
          <p className="text-right pr-6 mt-1">- Shubham</p>
        </div>
        {/* REviews block - 4 */}
        <div
          className="border border-orange-600 m-4 p-6 
        shadow-lg rounded-md content-center "
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, .
          </p>
          <p className="text-right pr-6 mt-1">- Shubham</p>
        </div>
      </div>
    </>
  );
};

export default Reviews;
