import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ToysCategoryCard = ({ categoryName }) => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5003/toys/${categoryName}`) // Make a GET request to the server with the activeTab value in the URL
      .then((res) => res.json()) // Convert the response to JSON format
      .then((result) => {
        console.log(result);
        setToys(result); // Update the job state with the fetched result
      });
  }, []);

  return (
    <div className="grid gap-3 lg:grid-cols-4">
      {toys.map((toy) => (
        <div className="">
          <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
              <img
                src={toy.pictureURL}
                className="h-full w-full object-cover "
                alt="Product"
              />
            </div>
            <div className="p-6">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-blue-gray-900 block font-sans text-2xl font-bold leading-relaxed antialiased">
                  {toy.name}
                </p>

                <p className="text-blue-gray-900 block font-sans text-base font-medium leading-relaxed antialiased">
                  ${toy.price}
                </p>
              </div>
              <h2>Rating: {toy.rating}</h2>
              <p>{toy.description}</p>
            </div>
            <div className="p-6 pt-0">
              <Link to={`/toyDetails/${toy._id}`} className="btn-accent btn" type="button">
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToysCategoryCard;
