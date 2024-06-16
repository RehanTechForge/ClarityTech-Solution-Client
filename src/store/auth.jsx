import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [services, setServices] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const BASE_URL = import.meta.env.VITE_BASE_SERVER_URL;

  // console.log("BAse URL", import.meta.env.VITE_BASE_SERVER_URL);

  // Function to store the token in local storage
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };


  // Function to check user authentication
  const userAuthentication = async () => {
    try {
      setIsloading(true);
      const response = await fetch(`${BASE_URL}/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("data", data.userData);
        setUser(data.userData);
        setIsloading(false);

      } else {
        console.error("Error fetching user data");
        setIsloading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const authorizationToken = `Bearer ${token}`

  const getServices = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/data/service`, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        setServices(data);
      }
    } catch (error) {
      console.log(`Serivce fetch Error ${error}`);
    }
  }

  // Function to log out the user
  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  // useEffect to retrieve token from localStorage and authenticate user
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  // useEffect to call userAuthentication after token is set
  useEffect(() => {
    getServices();
    if (token) {

      userAuthentication();
    }
  }, [token]);

  let isLoggedIn = !!token;
  console.log("token", token);
  console.log("isLoggedin", isLoggedIn);
  console.log("my token is", token);

  return (
    <AuthContext.Provider value={{ storeTokenInLS, isLoggedIn, LogoutUser, user, services, authorizationToken, isLoading, BASE_URL }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};