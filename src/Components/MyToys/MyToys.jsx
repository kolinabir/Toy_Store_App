import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const MyToys = () => {
  const { user, loading } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:5003/toys/seller/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, []);
  const handleDelete = (_id) => {
    fetch(`http://localhost:5003/toys/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("deleted successfully");
        }
      });
  };
  const handleAscending = () => {
    fetch(`http://localhost:5003/toys/orderAc/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  };
  const handleDescending = () => {
    fetch(`http://localhost:5003/toys/orderDc/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  };
  if (loading) {
    return (
      <div role="status">
        <svg
          aria-hidden="true"
          className="mr-2 inline h-10 w-10 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div>
      <div className="mx-3 lg:mx-20">
        <div className="h-[100vh] w-full overflow-x-auto">
            <h1 className="text-center my-4">Order Of Price:</h1>
          <div className="mb-10 flex justify-center gap-4">
            <button onClick={handleAscending} className="btn">
              Ascending
            </button>
            <button onClick={handleDescending} className="btn">Descending</button>
          </div>
          <table className="table w-full ">
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
            {myToys.length === 0 && (
              <div className="mx-auto my-20 flex  text-3xl font-bold">
                <h2>Nothing Added</h2>
              </div>
            )}
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
                      <button
                        onClick={() => handleDelete(toy._id)}
                        className="btn-outline btn"
                      >
                        Delete
                      </button>
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
