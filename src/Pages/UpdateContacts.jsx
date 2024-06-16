import React, { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams, useNavigate } from "react-router-dom";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

const UpdateContacts = () => {
  const [data, setData] = useState(defaultContactFormData);
  const [loading, setLoading] = useState(false); // State to manage loading state of the form
  const { authorizationToken, BASE_URL } = useAuth();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getAllContacts();
  }, [params.id]);

  const getAllContacts = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/admin/contacts/${params.id}`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const responseData = await response.json();
      if (response.ok) {
        // console.log(responseData);
        setData({
          username: responseData.username || "",
          email: responseData.email || "",
          message: responseData.message || "",
        });

      } else {
        toast.error(responseData.extraDetails ? responseData.extraDetails : responseData.message);
      }
    } catch (error) {
      // console.error(error);
      toast.error("Failed to fetch contact information");
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleContactForm = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true while submitting form
    try {
      // Simulate API call or handle form submission logic here
      // For demonstration purposes, let's use a timeout to simulate loading
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Replace with actual API call

      toast.success("Form submitted successfully!");
      navigate("/admin/contacts");
    } catch (error) {
      // console.error("Error submitting form:", error);
      toast.error("Failed to submit form. Please try again.");
    } finally {
      setLoading(false); // Set loading state back to false after submission
    }
  };

  return (
    <section className="section-contact bg-indigo-100 text-indigo-500 py-12">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-center capitalize mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
          <div className="flex justify-center items-center">
            <form onSubmit={handleContactForm} className="w-full max-w-lg">
              <div className="mb-4 text-indigo-500">
                <label htmlFor="username" className="block mb-2 text-sm font-medium ">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={data.username}
                  onChange={handleInput}
                  required
                  className="bg-gray-800 border border-gray-600 text-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 focus:outline-none"
                  placeholder="Username"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-sm font-medium ">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={data.email}
                  onChange={handleInput}
                  required
                  className="bg-gray-800 border border-gray-600 text-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 focus:outline-none"
                  placeholder="Email"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 text-sm font-medium ">Message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={data.message}
                  onChange={handleInput}
                  required
                  rows="6"
                  className="bg-gray-800 border border-gray-600 text-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 focus:outline-none"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button type="submit" className="bg-indigo-700 py-2 px-5 rounded-md capitalize hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 relative text-indigo-50">
                  {loading ? <>
                    <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                    </svg>
                    Loading...
                  </> : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateContacts;
