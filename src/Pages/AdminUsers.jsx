import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import { Link } from 'react-router-dom';

const AdminUsers = () => {
  const { authorizationToken, BASE_URL } = useAuth();
  const [users, setUser] = useState([]);
  const getAllUserData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/admin/users`, {
        method: "GET",
        headers: {
          "Authorization": authorizationToken,
        },
      });

      // const data = await response.json();
      // console.log("User data", data);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // console.log("User data", data);
      setUser(data);

    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": authorizationToken,
        },
      });
      const data = await response.json();
      // console.log("User Delete", data);
      if (response.ok) {
        getAllUserData()
      }
    } catch (error) {
      console.error("Error By Delete User", error);
    }
  }
  useEffect(() => {
    getAllUserData();
  }, [authorizationToken]);
  return (
    <section className="bg-gray-100 py-8">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Users</h1>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <thead className="bg-gray-50">
              <tr className="text-xs text-gray-700 uppercase">
                <th scope="col" className="px-6 py-3 text-left font-medium">
                  Username
                </th>
                <th scope="col" className="px-6 py-3 text-left">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 text-left">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Edit
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user._id} className="text-sm text-gray-800">
                  <td className="px-6 py-4 whitespace-nowrap font-medium">
                    {user.username}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.phone}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Link
                      to={`/admin/users/${user._id}/edit`}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => deleteUser(user._id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

  )
}

export default AdminUsers