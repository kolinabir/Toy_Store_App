import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toyDetail = useLoaderData();
  console.log(toyDetail);
  return (
    <div class="mx-auto my-10 max-w-[85rem] px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col-reverse lg:grid gap-4 md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
        <div>
          <h1 class="block text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl lg:text-6xl lg:leading-tight">
            Product Name: <br />{" "}
            <span class="text-blue-600">{toyDetail.name}</span>
          </h1>
          <p class="mt-3 text-lg text-gray-800 dark:text-gray-400">
            {toyDetail.description}
          </p>

          <div class="mt-7 grid w-full gap-3 ">
            <h2>Seller Name: {toyDetail.sellerName}</h2>
            <h2>Seller Email: {toyDetail.sellerEmail}</h2>
          </div>
          <div class="mt-7 grid w-full grid-cols-2 gap-3">
            <h2>Price: {toyDetail.price}</h2>
            <h2>Available Quantity: {toyDetail.quantity}</h2>
          </div>
          <h3 className="my-2 text-2xl font-bold">
            Ratings: {toyDetail.rating}
          </h3>
        </div>

        <div class="relative ml-4">
          <img
            class="w-full rounded-md"
            src={toyDetail.pictureURL}
            alt="Image Description"
          />
          <div class="absolute inset-0 -z-[1] -mb-4 -ml-4 mr-4 mt-4 h-full w-full rounded-md bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0 lg:-mb-6 lg:-ml-6 lg:mr-6 lg:mt-6"></div>

          <div class="absolute bottom-0 left-0">
            <svg
              class="ml-auto h-auto w-2/3 text-white dark:text-slate-900"
              width="630"
              height="451"
              viewBox="0 0 630 451"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="531"
                y="352"
                width="99"
                height="99"
                fill="currentColor"
              />
              <rect
                x="140"
                y="352"
                width="106"
                height="99"
                fill="currentColor"
              />
              <rect
                x="482"
                y="402"
                width="64"
                height="49"
                fill="currentColor"
              />
              <rect
                x="433"
                y="402"
                width="63"
                height="49"
                fill="currentColor"
              />
              <rect
                x="384"
                y="352"
                width="49"
                height="50"
                fill="currentColor"
              />
              <rect
                x="531"
                y="328"
                width="50"
                height="50"
                fill="currentColor"
              />
              <rect x="99" y="303" width="49" height="58" fill="currentColor" />
              <rect x="99" y="352" width="49" height="50" fill="currentColor" />
              <rect x="99" y="392" width="49" height="59" fill="currentColor" />
              <rect x="44" y="402" width="66" height="49" fill="currentColor" />
              <rect
                x="234"
                y="402"
                width="62"
                height="49"
                fill="currentColor"
              />
              <rect
                x="334"
                y="303"
                width="50"
                height="49"
                fill="currentColor"
              />
              <rect x="581" width="49" height="49" fill="currentColor" />
              <rect x="581" width="49" height="64" fill="currentColor" />
              <rect
                x="482"
                y="123"
                width="49"
                height="49"
                fill="currentColor"
              />
              <rect
                x="507"
                y="124"
                width="49"
                height="24"
                fill="currentColor"
              />
              <rect x="531" y="49" width="99" height="99" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
