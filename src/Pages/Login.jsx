import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();
  const { storeTokenInLS, BASE_URL } = useAuth()

  // let handle the input field value
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    // console.log(user);

    try {
      const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      // console.log("response data login: ", response);
      const responseData = await response.json();
      console.log(responseData);
      if (response.ok) {
        storeTokenInLS(responseData.token)
        toast.success("Login successful");
        setUser({ email: "", password: "" });
        console.log(responseData);
        setLoading(false)
        navigate("/");

      } else {
        toast.error(responseData.extraDetails ? responseData.extraDetails : responseData.message);
        setLoading(false)
      }
    } catch (error) {
      console.error("Error", error);
      toast.error("An error occurred. Please try again later.");
      setLoading(false)
    }
  };

  return (
    <>
      <section className="bg-indigo-500 text-white">
        <main>
          <div className="section-registration py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto w-full md:w-4/6 text-indigo-50 py-10">
              <div className="registration-image reg-img">
                <img
                  src="/images/register.png"
                  alt="A nurse with a cute look"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex justify-center items-center flex-col mb-10 md:mb-0">
                <h1 className="text-3xl font-semibold border-b-2 border-indigo-50 capitalize mb-8">Login Form</h1>
                <form onSubmit={handleSubmit} className="w-full md:w-[80%]">
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="off"
                      required
                      value={user.email}
                      onChange={handleInput}
                      className="bg-gray-800 border border-gray-600 text-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 focus:outline-none"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-300">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="off"
                      required
                      value={user.password}
                      onChange={handleInput}
                      className="bg-gray-800 border border-gray-600 text-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 focus:outline-none"
                      placeholder="Password"
                    />
                  </div>
                  <button type="submit" className="bg-indigo-700 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-5 rounded-md capitalize">
                    {loading ? <>
                      <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                      </svg>
                      Loading...
                    </> : 'Login'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
export default Login;