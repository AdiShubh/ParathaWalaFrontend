import React from "react";
import map from "../assets/logo.jpeg";

const Footer = () => {
  return (
    <>
      <section className="bg-gray-500 p-1">
        <div className="text-center text-3xl my-6  ">Connect with us ....</div>
        <div
          className=" grid grid-cols-3 gap-3
         mx-auto w-[1200px] m-4 mb-8"
        >
          <div className="rounded-md overflow-hidden shadow-md shadow-black ">
            <img src={map} />
          </div>
          <div
            className=" text-center p-2
           bg-slate-200 rounded-md shadow-md shadow-black"
          >
            <p className="text-xl mb-2">Address</p>
            <p>
              194, Bhagyashri Colony, Vijay Nagar ,<br />
              Indore MP
            </p>
          </div>
          <div
            className="  text-center p-2
           bg-slate-200 rounded-md shadow-md shadow-black"
          >
            <p className="text-xl mb-2">Contact Details</p>
            <p className="m-2"> Phone Number : 9900000000</p>
            <p className="m-2"> Email : 0DwYf@example.com</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
