import { NavLink } from "react-router-dom";
import Analytics from "../Components/Analytics";
import ChooseUs from "../Components/ChooseUs";
import Testimonials from "../Components/Testimonials";

export const Home = () => {
  return (
    <>
      <main>
        <section className="bg-indigo-800 py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center text-white gap-10">
              <div className="flex flex-col justify-center text-center md:text-left">
                <p className="text-lg font-light mb-2">We are the World Best IT Company</p>
                <h1 className="text-4xl font-bold mb-4 leading-tight">Welcome to Muhammad <br /> Rehan</h1>
                <p className="mb-6">
                  Are you ready to take your business to the next level with cutting-edge IT solutions?
                  Look no further! At Muhammad Rehan, we specialize in providing innovative IT services
                  and solutions tailored to meet your unique needs.
                </p>
                <div className="flex justify-center md:justify-start gap-5">
                  <NavLink to="/contact">
                    <button className="bg-indigo-500 py-2 px-6 rounded-md capitalize hover:bg-indigo-600 transition duration-300">connect now</button>
                  </NavLink>
                  <NavLink to="/services">
                    <button className="border border-indigo-500 py-2 px-6 rounded-md capitalize hover:bg-indigo-600 transition duration-300">learn more</button>
                  </NavLink>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/images/home.png"
                  alt="coding together"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      <Analytics />
      <ChooseUs />
      <Testimonials />
      {/* 3rd section  */}
      <section className="section-hero bg-gray-100 py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Hero image */}
          <div className="flex justify-center order-2 lg:order-1">
            <img
              src="/images/design.png"
              alt="coding together"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          {/* Hero text */}
          <div className="flex flex-col justify-center text-center lg:text-left order-1 lg:order-2">
            <p className="text-xl text-indigo-700">We are here to help you</p>
            <h1 className="text-4xl font-bold text-indigo-900 my-4 leading-tight">
              Get Started Today
            </h1>
            <p className="text-gray-700 mb-6">
              Ready to take the first step towards a more efficient and secure IT
              infrastructure? Contact us today for a free consultation and let's
              discuss how Muhammad Rehan can help your business thrive in the
              digital age.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5 mt-6">
              <NavLink to="/contact">
                <button className="bg-indigo-600 text-white py-3 px-6 rounded-md shadow hover:bg-indigo-700 transition duration-300 capitalize">
                  Connect now
                </button>
              </NavLink>
              <NavLink to="/services">
                <button className="border border-indigo-600 text-indigo-600 py-3 px-6 rounded-md shadow hover:bg-indigo-50 transition duration-300 capitalize">
                  Learn more
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;