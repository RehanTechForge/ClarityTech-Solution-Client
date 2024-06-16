import React from 'react'
import { NavLink, Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../store/auth'
const AdminLayout = () => {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (!user.isAdmin) {
    return <Navigate to={"/"} />
  }
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-blue-800 text-white flex flex-col">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
        <nav className="mt-6 flex-1">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  isActive ? 'block py-2 px-4 bg-blue-700 rounded' : 'block py-2 px-4 hover:bg-blue-600 rounded'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/users"
                className={({ isActive }) =>
                  isActive ? 'block py-2 px-4 bg-blue-700 rounded' : 'block py-2 px-4 hover:bg-blue-600 rounded'
                }
              >
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/contacts"
                className={({ isActive }) =>
                  isActive ? 'block py-2 px-4 bg-blue-700 rounded' : 'block py-2 px-4 hover:bg-blue-600 rounded'
                }
              >
                Contacts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/services"
                className={({ isActive }) =>
                  isActive ? 'block py-2 px-4 bg-blue-700 rounded' : 'block py-2 px-4 hover:bg-blue-600 rounded'
                }
              >
                Services
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow p-4">
          <nav className="flex justify-end space-x-4">
            <NavLink to="/admin" className="text-blue-800 hover:text-blue-600">
              Home
            </NavLink>
            <NavLink to="/admin/users" className="text-blue-800 hover:text-blue-600">
              Users
            </NavLink>
            <NavLink to="/admin/contacts" className="text-blue-800 hover:text-blue-600">
              Contacts
            </NavLink>
            <NavLink to="/admin/services" className="text-blue-800 hover:text-blue-600">
              Services
            </NavLink>
          </nav>
        </header>
        <main className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>

  )
}

export default AdminLayout