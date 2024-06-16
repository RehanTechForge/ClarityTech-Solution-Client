import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Error from "./Pages/Error";
import { AuthProvider } from "./store/auth";
import Logout from "./Pages/Logout";
import AdminLayout from "./layouts/AdminLayout";
import AdminHome from "./Pages/AdminHome";
import AdminUsers from "./Pages/AdminUsers";
import AdminContact from "./Pages/AdminContact";
import AdminUpdate from "./Pages/AdminUpdate";
import AdminSerivce from "./Pages/AdminService";
import AddService from "./Pages/AddService";
import ServiceUpdate from "./Pages/ServiceUpdate";
import UpdateContacts from "./Pages/UpdateContacts";
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="" element={<AdminHome />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContact />} />
            <Route path="services" element={<AdminSerivce />} />
            <Route path="users/:id/edit" element={<AdminUpdate />} />
            <Route path="services/:id/edit" element={<ServiceUpdate />} />
            <Route path="contacts/:id/edit" element={<UpdateContacts />} />
            {/* <Route path="services/create" element={<AddService />} /> */}
            <Route path="services/create" element={<AddService />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
