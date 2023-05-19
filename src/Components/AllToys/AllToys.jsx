import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
  const toys = useLoaderData();
  const toysToShow = toys.slice(0, 20);
  return (
    <div className="lg:mx-20 mx-3">
      <div className="w-full overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {toysToShow.map((toy) => (
            <>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={toy.pictureURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{toy.sellerName}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {toy.name}
                  <br />
                  <span className="badge-ghost badge badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>{toy.subcategory}</td>
                <th>${toy.price}</th>
                <td className="text-center">{toy.quantity}</td>

                <td className="">
                  <button className="btn-outline btn">
                    <Link
                      to={`/toyDetails/${toy._id}`}
                      className=""
                      type="button"
                    >
                      View Details
                    </Link>
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div></div>
  );
};

export default AllToys;
