import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AdminUpdate = () => {
  const { authorizationToken, BASE_URL } = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });
  const params = useParams();

  const getSingleUserData = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/api/admin/users/${id}`, {
        method: "GET",
        headers: {
          "Authorization": authorizationToken,
        },
      });
      const userData = await response.json();
      //console.log("User Single Data", userData); /
      setData(userData);
    } catch (error) {
      console.error("Error By Fetching User Data", error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getSingleUserData(params.id);
    }
  }, [params.id, authorizationToken]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/api/admin/users/update/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": authorizationToken,
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success("Update Successfully");
        navigate("/admin/users")
      } else {
        toast.error("Update Failed");
      }
    } catch (error) {
      // console.log(error);
      toast.error("Update Failed");
    }
  };

  return (
    <>
      <section className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-indigo-900">Update User Data</h1>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={data.username}
                  onChange={handleInput}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Username"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={data.email}
                  onChange={handleInput}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Email"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  value={data.phone}
                  onChange={handleInput}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Phone"
                />
              </div>

              <div className="text-center">
                <button className="w-full bg-indigo-500 text-white py-3 rounded-lg font-semibold hover:bg-indigo-600 transition duration-300" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default AdminUpdate