import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5003/toys/seller/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user]);
  return (
    <div>
      <div className="mx-3 lg:mx-20">
        <div className="w-full overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Seller</th>
                <th>Toy Name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Update Info</th>
                <th>Delete Toy</th>
              </tr>
            </thead>
            <tbody>
              {myToys.map((toy) => (
                <>
                  <tr>
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
                    </td>
                    <td>{toy.subcategory}</td>
                    <th>${toy.price}</th>
                    <td className="text-center">{toy.quantity}</td>

                    <td className="">
                      <Link
                        to={`/updateinfo/${toy._id}`}
                        className="btn-outline btn"
                      >
                        Update
                      </Link>
                    </td>

                    <td className="">
                      <button className="btn-outline btn">Delete</button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
