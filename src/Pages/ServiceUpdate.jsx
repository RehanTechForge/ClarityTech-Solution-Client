import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../store/auth'; // Adjust path as per your project structure

const ServiceUpdate = () => {
  const { id } = useParams();
  const { authorizationToken, BASE_URL } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState({
    service: '',
    image: '', // Initialize image as an empty string
    description: '',
    price: '',
    provider: '',
  });

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/admin/services/${id}`, {
          method: 'GET',
          headers: {
            Authorization: authorizationToken,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setService(data); // Set fetched data to the state
        } else {
          console.error('Failed to fetch service');

        }
      } catch (error) {
        console.error('Error fetching service:', error);
      }
    };

    fetchService();
  }, [id, authorizationToken]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setService({ ...service, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setService({ ...service, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('service', service.service);
    if (service.image) {
      formData.append('image', service.image);
    }
    formData.append('description', service.description);
    formData.append('price', service.price);
    formData.append('provider', service.provider);

    try {
      const response = await fetch(`${BASE_URL}/api/admin/services/update/${id}`, {
        method: 'PATCH',
        headers: {
          Authorization: authorizationToken,
        },
        body: formData,
      });

      if (response.ok) {
        toast.success('Service updated successfully!');
        navigate('/admin/services');
      } else {
        const errorData = await response.json();
        // console.error('Error updating service:', errorData);
        toast.error(`Failed to update service: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error updating service:', error);
      toast.error('Failed to update service. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="service" className="block text-gray-700 text-sm font-bold mb-2">Service Name</label>
          <input
            type="text"
            id="service"
            name="service"
            value={service.service}
            onChange={handleInput}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={service.description}
            onChange={handleInput}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            value={service.price}
            onChange={handleInput}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="provider" className="block text-gray-700 text-sm font-bold mb-2">Provider</label>
          <input
            type="text"
            id="provider"
            name="provider"
            value={service.provider}
            onChange={handleInput}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Current Image</label>
          {service.image && (
            <div>
              <img src={service.image} alt="Service" className="max-w-xs mb-2" />
            </div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Upload New Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Updating...' : 'Update Service'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceUpdate;
