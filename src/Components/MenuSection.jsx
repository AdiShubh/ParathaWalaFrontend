import React from "react";
import ParathaItem from "../assets/ParathaItem.jpg";

const MenuSection = () => {
  return (
    <>
      <section className="">
        <h2 className="text-4xl text-center p-4"> Menu </h2>
        <div className=" grid grid-flow-col grid-cols-3 max-w-[1170px] mx-auto mb-8 ">
          <div
            className="   m-[10px] h-fit
           rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={ParathaItem}
              alt="Alu Paratha "
              className="h-[300px] w-fit"
            />

            <div className="text-center text-2xl p-2"> Methi Paratha</div>
            <div className="flex justify-between">
              <div className="px-2">Quantity : </div>
              <div className="px-2">Price : ₹ 100</div>
            </div>
            <div className=" text-center m-2">
              <button className="bg-blue-500 text-white px-2 py-1 rounded-[6px]">
                Add to Cart
              </button>
            </div>
            <p className="text-sm m-2 mt-4">* Served with Achar only</p>
          </div>
          <div
            className=" m-[10px] h-fit
           rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={ParathaItem}
              alt="Alu Paratha "
              className="h-[300px] w-fit"
            />

            <div className="text-center text-2xl p-2"> Methi Paratha</div>
            <div className="flex justify-between">
              <div className="px-2">Quantity : </div>
              <div className="px-2">Price : ₹ 100</div>
            </div>
            <div className=" text-center m-2">
              <button className="bg-blue-500 text-white px-2 py-1 rounded-[6px]">
                Add to Cart
              </button>
            </div>
            <p className="text-sm m-2 mt-4">* Served with Achar only</p>
          </div>

          <div
            className=" m-[10px] h-fit
           rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={ParathaItem}
              alt="Alu Paratha "
              className="h-[300px] w-fit"
            />

            <div className="text-center text-2xl p-2"> Methi Paratha</div>
            <div className="flex justify-between">
              <div className="px-2">Quantity : </div>
              <div className="px-2">Price : ₹ 100</div>
            </div>
            <div className=" text-center m-2">
              <button className="bg-blue-500 text-white px-2 py-1 rounded-[6px]">
                Add to Cart
              </button>
            </div>
            <p className="text-sm m-2 mt-4">* Served with Achar only</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuSection;
