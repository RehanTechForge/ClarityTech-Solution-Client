import React from 'react'
import { Link } from 'react-router-dom';
import { FaUsers, FaEnvelope, FaServicestack, FaChartLine, FaHistory } from 'react-icons/fa';

const AdminHome = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-5xl font-extrabold text-center text-indigo-900 mb-12">Admin Dashboard</h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        <Link to="/admin/users" className="block p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <FaUsers className="text-indigo-700 text-3xl mr-4" />
            <h2 className="text-3xl font-bold text-indigo-900">Manage Users</h2>
          </div>
          <p className="text-gray-700">View, edit, and manage user accounts.</p>
        </Link>

        <Link to="/admin/contacts" className="block p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-indigo-700 text-3xl mr-4" />
            <h2 className="text-3xl font-bold text-indigo-900">Manage Contacts</h2>
          </div>
          <p className="text-gray-700">Review and respond to contact messages.</p>
        </Link>

        <Link to="/admin/services" className="block p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <FaServicestack className="text-indigo-700 text-3xl mr-4" />
            <h2 className="text-3xl font-bold text-indigo-900">Manage Services</h2>
          </div>
          <p className="text-gray-700">Add, update, or remove services.</p>
        </Link>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <FaChartLine className="text-indigo-700 text-3xl mr-4" />
            <h2 className="text-3xl font-bold text-indigo-900">Statistics</h2>
          </div>
          <p className="text-gray-700 mb-2">Users: <span className="font-semibold text-indigo-700">1200</span></p>
          <p className="text-gray-700 mb-2">Services: <span className="font-semibold text-indigo-700">45</span></p>
          <p className="text-gray-700">Contacts: <span className="font-semibold text-indigo-700">300</span></p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow sm:col-span-2 lg:col-span-1">
          <div className="flex items-center mb-4">
            <FaHistory className="text-indigo-700 text-3xl mr-4" />
            <h2 className="text-3xl font-bold text-indigo-900">Recent Activity</h2>
          </div>
          <ul className="text-gray-700 list-disc pl-5">
            <li>User <span className="font-semibold text-indigo-700">JohnDoe</span> updated their profile.</li>
            <li>New contact message from <span className="font-semibold text-indigo-700">JaneSmith</span>.</li>
            <li>Service <span className="font-semibold text-indigo-700">"Web Development"</span> was added.</li>
          </ul>
        </div>
      </div>

      <footer className="text-center text-gray-600 mt-16">
        <p>&copy; 2024 Admin Dashboard. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default AdminHome