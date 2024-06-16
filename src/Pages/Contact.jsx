import { useState } from "react";
import { useAuth } from "../store/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

const Contact = () => {
  const navigate = useNavigate();

  const [data, setData] = useState(defaultContactFormData);
  const { user, BASE_URL } = useAuth();
  const [loading, setLoading] = useState(false);
  // console.log(user);

  const [userData, setUserData] = useState(true);

  if (userData && user) {
    navigate("/contact")
    setData({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }


  // lets tackle our handleInput
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prev) => ({ ...prev, [name]: value }));
  };

  // handle fomr getFormSubmissionInfo
  const handleContactForm = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const response = await fetch(`${BASE_URL}/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // console.log("response: ", response);
      // alert(response);
      const responseData = await response.json();
      if (response.ok) {
        setData(defaultContactFormData);
        setLoading(false)
        // const responseData = await response.json();
        // alert(responseData);
        // console.log(responseData);
        toast.success(responseData.message);
      } else {
        // Handle API error here
        toast.error(responseData.extraDetails ? responseData.extraDetails : responseData.message);
        setLoading(false)
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className="section-contact bg-indigo-500 text-white py-12">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold text-center capitalize mb-8">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="contact-img">
              <img src="/images/support.png" alt="We are always ready to help" className="w-full" />
            </div>
            <div className="flex justify-center items-center">
              <form onSubmit={handleContactForm} className="w-full max-w-lg">
                <div className="mb-4">
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-300">Username</label>
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
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Email</label>
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
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Message</label>
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
                  <button type="submit" className="bg-indigo-700 py-2 px-5 rounded-md capitalize hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                    {loading ? <>
                      <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                      </svg>
                      Loading...
                    </> : 'Send'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <section className="mt-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              title="Google Map"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </section>
        </div>
      </section>
    </>
  );
};
export default Contact;