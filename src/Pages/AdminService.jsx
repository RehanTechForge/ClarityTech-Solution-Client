import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
const AdminSerivce = () => {
  const [services, setServices] = useState([]);
  const { authorizationToken, BASE_URL } = useAuth();

  const getAllServices = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/data/service`, {
        method: 'GET',
        headers: {
          "Authorization": authorizationToken
        },
      });
      const data = await response.json();
      if (response.ok) {
        setServices(data);
      } else {
        toast.error('Failed to fetch services');
      }
    } catch (error) {
      //console.error('Error fetching services:', error); 
      toast.error('An error occurred while fetching services');
    }
  };

  useEffect(() => {
    getAllServices();
  }, [authorizationToken]);

  const handleDeleteService = async (id) => {
    // Implement logic to delete a specific service
    // console.log(`Delete service with ID: ${id}`);
    try {
      const response = await fetch(`${BASE_URL}/api/admin/services/delete/${id}`, {
        method: 'DELETE',
        headers: {
          "Authorization": authorizationToken
        },
      });
      if (response.ok) {
        toast.success("Service deleted successfully");
        getAllServices();
      }
    } catch (error) {
      alert("Failed to delete service")
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-indigo-900">Admin Services</h1>
        <div className='flex gap-5'>
          <NavLink to={"/admin/services/create"}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Add
          </NavLink>
          {/* <NavLink
            to="/admin/services/all-delete"
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Delete All
          </NavLink> */}
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div key={service._id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={service.image} alt={service.service} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-indigo-900">{service.service}</h2>
              <p className="text-gray-700 mb-2">{service.description}</p>
              <p className="text-gray-700 mb-2"><strong>Price:</strong> {service.price}</p>
              <p className="text-gray-700 mb-2"><strong>Provider:</strong> {service.provider}</p>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleDeleteService(service._id)}
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Delete
                </button>
                <NavLink to={`/admin/services/${service._id}/edit`}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Edit
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminSerivce