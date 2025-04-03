import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  const [results, setResults] = useState([]);
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
      </Link>

      <div className="relative w-[250px]">
        <SearchBar setResults={setResults} />
        {results.length > 0 && (
          <div className="absolute top-full w-full bg-richblack-800 border border-richblack-700 shadow-lg rounded-lg mt-2 z-50">
            <SearchResultsList results={results} />
          </div>
        )}
      </div>

      <nav>
        <ul className="text-richblack-100 flex gap-x-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Login - SignUp - LogOut - Dashboard */}
      <div className="flex items-center gap-x-4">
        {!isLoggedIn && (
          <Link to="/login">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700"
            >
              Log in
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700"
            >
              Sign up
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
              className="bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700"
            >
              Log Out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700"
            >
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
