import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <section id="error-page">
        <div className=" content text-indigo-50 w-4/6 mx-auto flex justify-center items-center flex-col">
          <h2 className="text-[200px] font-extrabold">404</h2>
          <h4 className="text-2xl font-semibold">Sorry! Page not found</h4>
          <p className="text-center mb-5">
            Oops! It seems like the page you're trying to access doesn't exist.
            If you believe there's an issue,<br /> feel free to report it, and we'll
            look into it.
          </p>
          <div className="btns mb-10 flex gap-5">

            <NavLink to="/" className="border rounded-lg py-2 px-5 capitalize">return home</NavLink>
            <NavLink to="/contact" className="border rounded-lg py-2 px-5 capitalize">report problem</NavLink>
          </div>
        </div>
      </section>
    </>
  );
};
export default Error;