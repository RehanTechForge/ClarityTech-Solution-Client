import React, { useState } from 'react';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddService = () => {
  const { authorizationToken, BASE_URL } = useAuth();
  const navigate = useNavigate();
  const [service, setService] = useState({
    service: '',
    image: null,
    description: '',
    price: '',
    provider: '',
  });
  const [loading, setLoading] = useState(false);

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
    formData.append('image', service.image);
    formData.append('description', service.description);
    formData.append('price', service.price);
    formData.append('provider', service.provider);

    try {
      const response = await fetch(`${BASE_URL}/api/admin/services/create`, {
        method: 'POST',
        headers: {
          Authorization: authorizationToken,
        },
        body: formData,
      });

      if (response.ok) {
        toast.success('Service added successfully!');
        setService({
          service: '',
          image: null,
          description: '',
          price: '',
          provider: '',
        });
        // Manually reset the file input field
        document.getElementById("serviceName").value = '';
        document.getElementById('file-input').value = '';
        navigate('/admin/services/create');
      } else {
        const errorData = await response.json();
        //console.error('Error adding service:', errorData);
        toast.error(`Failed to add service: ${errorData.message}`);
      }
    } catch (error) {
      // console.error('Error adding service:', error);
      toast.error('Failed to add service. Please try again.');
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  return (
    <section className=" text-black min-h-screen">
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-semibold mb-5">Add New Service</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data" className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="service" className="block text-sm font-medium ">
              Service Name
            </label>
            <input
              type="text"
              name="service"
              id="serviceName"
              value={service.serviceName}
              onChange={handleInput}
              className="bg-gray-800 border border-gray-600 text-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 focus:outline-none"
              placeholder="Enter Service Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium ">
              Image Upload
            </label>
            <input
              type="file"
              accept="image/*"
              name="image"
              id="file-input"
              onChange={handleImageChange}
              className="bg-gray-800 border border-gray-600 text-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium ">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              value={service.description}
              onChange={handleInput}
              className="bg-gray-800 border border-gray-600 text-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 focus:outline-none"
              placeholder="Enter Service Description"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium ">
              Price
            </label>
            <input
              type="text"
              name="price"
              id="price"
              value={service.price}
              onChange={handleInput}
              className="bg-gray-800 border border-gray-600 text-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 focus:outline-none"
              placeholder="Enter Price"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="provider" className="block text-sm font-medium ">
              Provider
            </label>
            <input
              type="text"
              name="provider"
              id="provider"
              value={service.provider}
              onChange={handleInput}
              className="bg-gray-800 border border-gray-600 text-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 focus:outline-none"
              placeholder="Enter Provider Name"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-5 rounded-md text-white uppercase"
            >
              {loading ? <>
                <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                </svg>
                Loading...
              </> : 'Add Service'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddService;