import React, { useEffect, useState } from 'react'
import { useAuth } from "../store/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
const AdminContact = () => {
  const { authorizationToken, BASE_URL } = useAuth();
  const [contactData, setContactData] = useState(null);

  const getContactsData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/admin/contacts`, {
        method: 'GET',
        headers: {
          "Authorization": authorizationToken
        }
      });
      const data = await response.json();
      if (response.ok) {
        setContactData(data);
        // console.log("Contact Data: ", data); // Logging data here after setting state
      } else {
        // console.error("Failed to fetch contact data");
        toast.error("Failed to fetch contact data");
      }
    } catch (error) {
      // console.error("Error fetching contact data:", error);
      toast.error("Error fetching contact data");
    }
  }

  const deleteContactById = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/api/admin/contacts/delete/${id}`, {
        method: 'DELETE',
        headers: {
          "Authorization": authorizationToken
        }
      });
      if (response.ok) {
        // Remove the deleted contact from the local state
        // setContactData(prevData => prevData.filter(contact => contact._id !== id));
        getContactsData();
        toast.success("Contact deleted successfully");
      } else {
        toast.error("Failed to delete contact");
      }
    } catch (error) {
      // console.error("Error deleting contact:", error);
      toast.error("Error deleting contact");
    }
  }

  useEffect(() => {
    if (authorizationToken) {
      getContactsData();
    }
  }, [authorizationToken]);
  return (
    <div className="container mx-auto mt-8 mb-10 sm:w-4/5">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Contacts</h1>
      </div>
      {contactData ? (
        <ul className="bg-indigo-100 shadow-md rounded-lg p-6">
          {contactData.map((contact) => (
            <li key={contact._id} className="border-b last:border-0 py-4 flex flex-col sm:flex-row items-start sm:items-center">
              <div className="flex-1">
                <p className="text-lg mb-2"><strong>Username:</strong> {contact.username}</p>
                <p className="text-lg mb-2"><strong>Email:</strong> {contact.email}</p>
                <p className="text-lg mb-2"><strong>Message:</strong> {contact.message}</p>
              </div>
              <div className="flex mt-4 sm:mt-0 sm:ml-4">
                <Link
                  to={`/admin/contacts/${contact._id}/edit`}
                  className="bg-indigo-500 text-white py-2 px-4 rounded mr-2 hover:bg-indigo-600"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteContactById(contact._id)}
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-lg text-gray-700 mt-4">Loading...</p>
      )}
    </div>
  )
}

export default AdminContact