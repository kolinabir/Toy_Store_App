import React from "react";
import Banner from "./Banner";
import GallerySec from "./GallerySec";
import Experi from "./Experi";
import ShopByCat from "./ShopByCat";

const FirstPage = () => {
  return (
    <div className="lg:mx-20">
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        data-aos-anchor-placement="top-bottom"
      >
        <Banner></Banner>
      </div>
      {/* <GallerySec></GallerySec> */}
      <div className="lg:mx:20 mx-3 my-20" data-aos="zoom-in">
        <h2 className="mt-4 text-center text-3xl font-bold">
          Our Cars Gallery
        </h2>
        <p className="my-2 text-center text-slate-600">
          Click on any photo for better view
        </p>
        <Experi></Experi>
      </div>
      <div className="my-20">
        <h2 className="my-4 text-center text-3xl font-bold">
          Shop by Category
        </h2>
        <ShopByCat></ShopByCat>
      </div>
    </div>
  );
};

export default FirstPage;
