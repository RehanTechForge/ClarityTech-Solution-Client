import { NavLink } from "react-router-dom";
import Analytics from "../Components/Analytics";
import { useAuth } from "../store/auth";
const About = () => {
  const { user, BASE_URL } = useAuth();
  return (
    <>
      <main className="bg-indigo-100">
        <section className="container mx-auto pt-10">
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pb-10">
            {/* Left Section */}
            <div className="p-6 md:pr-0">
              <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">About Us</h1>
              <p className="text-lg text-gray-700 mb-4">
                {user && user === undefined ? `Welcome ${user.username} to our website!` : `Welcome to our website!`}
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod odio non lobortis
                ultricies. Nam condimentum mauris nec dolor feugiat sagittis.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Nulla facilisi. Phasellus at felis vel velit lacinia sodales. Quisque a condimentum
                sapien, vel convallis libero.
              </p>
              <div className="flex gap-5 mt-8">
                <NavLink to="/contact">
                  <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-6 rounded-md capitalize focus:outline-none focus:ring-2 focus:ring-indigo-400">
                    Contact Us
                  </button>
                </NavLink>
                <NavLink to="/services">
                  <button className="border border-indigo-500 text-indigo-500 hover:text-white hover:bg-indigo-500 py-2 px-6 rounded-md capitalize focus:outline-none focus:ring-2 focus:ring-indigo-400">
                    Explore Services
                  </button>
                </NavLink>
              </div>
            </div>

            {/* Right Section (Image Section) */}
            <div className="flex justify-center items-center">
              <img
                src="/images/about.png"
                alt="About us"
                className="rounded-lg shadow-lg"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>

          {/* Additional Info Section */}
          <section className="bg-slate-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Left Section */}
              <div className="p-6 md:pr-0">
                <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod odio non lobortis
                  ultricies. Nam condimentum mauris nec dolor feugiat sagittis.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Nulla facilisi. Phasellus at felis vel velit lacinia sodales. Quisque a condimentum
                  sapien, vel convallis libero.
                </p>
              </div>

              {/* Right Section */}
              <div className="p-6 md:pl-0">
                <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Our Vision</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod odio non lobortis
                  ultricies. Nam condimentum mauris nec dolor feugiat sagittis.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Nulla facilisi. Phasellus at felis vel velit lacinia sodales. Quisque a condimentum
                  sapien, vel convallis libero.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className=" py-10 bg-indigo-900 text-white">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to take the next step?</h2>
              <p className="text-lg text-gray-200 mb-6">
                Contact us today to see how we can help your business grow.
              </p>
              <NavLink to="/contact">
                <button className="bg-white hover:bg-gray-200 text-indigo-900 py-2 px-6 rounded-md capitalize focus:outline-none focus:ring-2 focus:ring-gray-400">
                  Contact Us
                </button>
              </NavLink>
            </div>
          </section>
        </section>
      </main>

      <Analytics />
    </>
  );
};
export default About;