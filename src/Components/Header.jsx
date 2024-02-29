import React from "react";
import logoImage from "../assets/logo.jpeg";
import pImage from "../assets/pimage.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section className="bg-[url('assets/bg01.jpg')] h-[550px] bg-cover  ">
        <header
          className="max-w-[1170px]  mx-auto flex justify-between
        p-2"
        >
          <figure className="border">
            <img src={logoImage} alt="logo" className="w-[200px] h-full" />
          </figure>
          <div className=" w-[50%] flex  justify-between items-center">
            <div className="text-2xl text-white ">
              <Link to={"/"}>Home</Link>
            </div>
            <div className="text-2xl text-white text-shadow-sm">
              <Link to={"/About"}>About</Link>
            </div>
            <div className="text-xl text-white flex items-center">
              <Link to={"/Cart"}>
                <AiOutlineShoppingCart className="text-3xl" />
              </Link>
            </div>
            <div
              className="text-xl text-white border 
           px-2 rounded-md bg-orange-500 pb-[1px]"
            >
              <Link to={"/Login"}>Sign-in</Link>
            </div>
          </div>
        </header>
        <div
          className=" h-fit 
        m-2 max-w-[1170px]  mx-auto flex justify-between  pt-16"
        >
          <div
            className=" w-1/2 
          flex flex-col justify-center items-center"
          >
            <p className=" text-white text-7xl text-shadow-sm ">
              Tasty <br /> Parathas
            </p>
            <p className="text-white text-3xl ">
              Chalo tasty parathe <br />
              khate hai......
            </p>
          </div>

          <div className="  text-white w-1/2  ">
            <img src={pImage} alt="pimage" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
