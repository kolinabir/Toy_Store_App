import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateInfo = () => {
  const { id } = useParams();
  const [updateToy, setUpdateToy] = useState([]);
  function handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Retrieve the form input values
    const price = event.target.elements.price.value;
    const quantity = event.target.elements.quantity.value;
    const description = event.target.elements.description.value;
    const updatedData = {
      price: price,
      quantity: quantity,
      description: description,
    };
    fetch(`https://toy-server1-production.up.railway.app/toys/${id}`,{
        method : 'PUT',
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(updatedData)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount>0){
          alert('user updated successfully')
        }
      });
  }

  return (
    <div>
      <div className="bg-white shadow-2xl lg:mx-80 lg:my-20">
        <form onSubmit={handleSubmit} className="rounded-lg border lg:p-10">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="group relative z-0 mb-6 w-full">
              <input
                type="text"
                name="price"
                id="floating_first_name"
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_first_name"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                Toy Price
              </label>
            </div>
            <div className="group relative z-0 mb-6 w-full">
              <input
                type="text"
                name="quantity"
                id="floating_last_name"
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_last_name"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                Quantity Available
              </label>
            </div>
          </div>

          <div className="grid">
            <div className="group relative z-0 mb-6 w-full">
              <textarea
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="description"
                id="floating_phone"
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                placeholder=""
                required
              ></textarea>
              <label
                htmlFor="floating_phone"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                Description
              </label>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateInfo;
