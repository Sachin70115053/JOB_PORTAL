
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";
import jobImage from "../creator/image.png"; // Ensure the image path is correct

const Header = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchjobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="bg-gradient-to-r from-[#fdf6e3] via-[#f4ecf7] to-[#eaf2f8] transition-all duration-1000 min-h-screen flex items-center px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side Content */}
        <div className="text-left md:w-1/2">
          <span className="px-5 py-2 inline-flex items-center gap-2 rounded-full bg-gray-200 text-red-600 font-medium text-lg">
            <PiBuildingOfficeBold className="text-[#1B3B6F]" />
            Your Future, Your Success!
          </span>

          <h2 className="text-6xl font-extrabold leading-tight text-gray-800 mt-4">
            <span className="text-[#6A38C2]">Find Your Passion</span> <br />
            & Build Your <span className="text-[#6A38C2]">Dream Career</span>
          </h2>

          <p className="text-xl text-gray-700 font-light mt-4">
            Unleash your potential with top career opportunities. Connect with leading
            companies and step into a future designed for success.
          </p>

          {/* Search Bar */}
          <div className="flex w-full md:w-[80%] shadow-lg border border-gray-300 pl-3 rounded-full items-center gap-4 mt-6">
            <input
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search your dream job..."
              className="outline-none border-none w-full text-lg font-medium text-gray-700 bg-transparent"
            />
            <Button
              onClick={searchjobHandler}
              className="rounded-r-full px-6 py-3 bg-[#6A38C2] text-white font-semibold"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 flex justify-end mt-10 md:mt-0">
          <img src={jobImage} alt="Job Hunt" className="w-full md:w-[450px] h-auto object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Header;
