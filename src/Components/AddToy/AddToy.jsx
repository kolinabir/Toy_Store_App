import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthProvider/AuthProvider";

// you can use React.forwardRef to pass the ref too

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subcategory = form.subcategory.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const pictureURL = form.pictureURL.value;
    const description = form.description.value;
    const data = {
      name: name,
      sellerName: sellerName,
      sellerEmail: sellerEmail,
      subcategory: subcategory,
      rating: rating,
      quantity: quantity,
      pictureURL: pictureURL,
      price: price,
      description: description
    };
    fetch("http://localhost:5003/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        alert('Toy Added Successfully')
        form.reset();
      });
  };
  return (
    <div className="lg:my-20">
      {" "}
      <section className="mx-auto mt-20 max-w-4xl rounded-md bg-indigo-600 p-6 shadow-md dark:bg-gray-800">
        <h1 className="text-center text-xl font-bold capitalize text-white dark:text-white">
          Add Your Toy Information
        </h1>
        <form onSubmit={onSubmit}>
          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="username"
              >
                Toy Name:
              </label>
              <input
                label="name"
                name="name"
                required
                type="text"
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-500"
              />
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="emailAddress"
              >
                Seller Name
              </label>
              <input
                defaultValue={user?.displayName}
                label="sellerName"
                name="sellerName"
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="emailAddress"
              >
                Seller Email
              </label>
              <input
                defaultValue={user?.email}
                label="sellerEmail"
                name="sellerEmail"
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-white dark:text-gray-200" htmlFor="price">
                Sub Category
              </label>
              <input
                label="subcategory"
                name="subcategory"
                id="subcategory"
                type="text"
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="price">
                Price
              </label>
              <input
                label="price"
                name="price"
                id="price"
                type="text"
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="rating">
                Ratings
              </label>
              <input
                label="rating"
                id="rating"
                name="rating"
                type="text"
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="quantity"
              >
                Available Quantity
              </label>
              <input
                label="quantity"
                id="quantity"
                name="quantity"
                type="text"
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="pictureURL"
              >
                Picture Url
              </label>
              <input
                label="pictureURL"
                id="pictureURL"
                name="pictureURL"
                type="text"
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div className="my-8 space-y-2">
          <label className="text-white dark:text-gray-200" htmlFor="price">
          Description
              </label>
            <textarea
            name="description"
              placeholder="description"
              className="textarea-bordered textarea textarea-lg w-full"
            ></textarea>
          </div>
          <div className="my-5 flex justify-center">
            <input className="btn" type="submit" value="submit"/>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddToy;
