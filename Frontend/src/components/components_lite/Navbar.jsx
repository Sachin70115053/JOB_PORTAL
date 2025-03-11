import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios"; // Import axios
import { setUser } from "@/redux/authSlice";
import { USER_API_ENDPOINT } from "@/utils/data";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      const res = await axios.post(`${USER_API_ENDPOINT}/logout`, {
        withCredentials: true,
      });
      if (res && res.data && res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      } else {
        console.error("Error logging out:", res.data);
      }
    } catch (error) {
      console.error("Axios error:", error);
      if (error.response) {
        console.error("Error response:", error.response.data);
      }
      toast.error("Error logging out. Please try again.");
    }
  };
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-[#6B3AC2]"> Job </span>{" "}
            <span className="text-[#FA4F09]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-10">
          <ul className="flex font-medium items-center gap-6">
            {user && user.role === "Recruiter" ? (
              <>
                <li>
                  <Link to={"/admin/companies"}>Companies</Link>
                </li>
                <li>
                  <Link to={"/admin/jobs"}>Jobs</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  {" "}
                  <Link to={"/Home"}>Home</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/Browse"}>Browse</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to={"/Jobs"}>Jobs</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/Creator"}>About</Link>
                </li>
              </>
            )}
          </ul>
          {!user ? (
            <div className=" flex items-center gap-2">
              <Link to={"/login"}>
                {" "}
                <Button variant="outline">Login</Button>
              </Link>
              <Link to={"/register"}>
                {" "}
                <Button className="bg-red-600  hover:bg-red-700">
                  Register
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex items-center gap-4 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{user?.fullname}</h3>
                    <p className="text-sm text-muted-foreground">
                      {user?.profile?.bio}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col my-2 text-gray-600  ">
                  {user && user.role === "Student" && (
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User2></User2>
                      <Button variant="link">
                        {" "}
                        <Link to={"/Profile"}> Profile</Link>{" "}
                      </Button>
                    </div>
                  )}

                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut></LogOut>
                    <Button onClick={logoutHandler} variant="link">
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;







// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
// import { Avatar, AvatarImage } from "../ui/avatar";
// import { Button } from "../ui/button";
// import { LogOut, User2 } from "lucide-react";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "sonner";
// import axios from "axios";
// import { setUser } from "@/redux/authSlice";
// import { USER_API_ENDPOINT } from "@/utils/data";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   const { user } = useSelector((store) => store.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [bgColor, setBgColor] = useState("bg-transparent");

//   const logoutHandler = async () => {
//     try {
//       const res = await axios.post(`${USER_API_ENDPOINT}/logout`, {
//         withCredentials: true,
//       });
//       if (res && res.data && res.data.success) {
//         dispatch(setUser(null));
//         navigate("/");
//         toast.success(res.data.message);
//       } else {
//         console.error("Error logging out:", res.data);
//       }
//     } catch (error) {
//       console.error("Axios error:", error);
//       if (error.response) {
//         console.error("Error response:", error.response.data);
//       }
//       toast.error("Error logging out. Please try again.");
//     }
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const colors = ["bg-purple-600", "bg-red-500", "bg-blue-500", "bg-pink-500"];
//       setBgColor(colors[Math.floor(Math.random() * colors.length)]);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <motion.div
//       className={`fixed w-full transition-all duration-500 ${bgColor} shadow-lg`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//     >
//       <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-6">
//         {/* Logo with animation */}
//         <motion.h1
//           className="text-3xl font-extrabold text-white cursor-pointer"
//           whileHover={{ scale: 1.1, rotate: 5 }}
//         >
//           <span className="text-yellow-300">Job</span>
//           <span className="text-green-300"> Portal</span>
//         </motion.h1>

//         <div className="flex items-center gap-10">
//           {/* Navigation Links */}
//           <ul className="flex font-semibold text-white items-center gap-6 text-lg">
//             {user && user.role === "Recruiter" ? (
//               <>
//                 <li className="hover:text-yellow-300 transition-transform duration-300 hover:scale-110">
//                   <Link to={"/admin/companies"}>Companies</Link>
//                 </li>
//                 <li className="hover:text-yellow-300 transition-transform duration-300 hover:scale-110">
//                   <Link to={"/admin/jobs"}>Jobs</Link>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li className="hover:text-yellow-300 transition-transform duration-300 hover:scale-110">
//                   <Link to={"/Home"}>Home</Link>
//                 </li>
//                 <li className="hover:text-yellow-300 transition-transform duration-300 hover:scale-110">
//                   <Link to={"/Browse"}>Browse</Link>
//                 </li>
//                 <li className="hover:text-yellow-300 transition-transform duration-300 hover:scale-110">
//                   <Link to={"/Jobs"}>Jobs</Link>
//                 </li>
//                 <li className="hover:text-yellow-300 transition-transform duration-300 hover:scale-110">
//                   <Link to={"/Creator"}>About</Link>
//                 </li>
//               </>
//             )}
//           </ul>

//           {/* Login/Register or User Profile */}
//           {!user ? (
//             <div className="flex items-center gap-2">
//               <motion.div whileHover={{ scale: 1.1 }}>
//                 <Link to={"/login"}>
//                   <Button variant="outline" className="text-white border-white">
//                     Login
//                   </Button>
//                 </Link>
//               </motion.div>
//               <motion.div whileHover={{ scale: 1.1 }}>
//                 <Link to={"/register"}>
//                   <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
//                     Register
//                   </Button>
//                 </Link>
//               </motion.div>
//             </div>
//           ) : (
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Avatar className="cursor-pointer transform hover:rotate-12 transition-transform">
//                   <AvatarImage
//                     src={user?.profile?.profilePhoto}
//                     alt="@shadcn"
//                   />
//                 </Avatar>
//               </PopoverTrigger>
//               <PopoverContent className="w-80 bg-gray-800 text-white shadow-lg">
//                 <div className="flex items-center gap-4 space-y-2">
//                   <Avatar className="cursor-pointer">
//                     <AvatarImage
//                       src={user?.profile?.profilePhoto}
//                       alt="@shadcn"
//                     />
//                   </Avatar>
//                   <div>
//                     <h3 className="font-bold text-lg">{user?.fullname}</h3>
//                     <p className="text-sm text-gray-400">{user?.profile?.bio}</p>
//                   </div>
//                 </div>

//                 <div className="flex flex-col my-2 text-gray-300">
//                   {user && user.role === "Student" && (
//                     <motion.div
//                       className="flex w-fit items-center gap-2 cursor-pointer hover:text-yellow-300 transition duration-300"
//                       whileHover={{ scale: 1.1 }}
//                     >
//                       <User2 />
//                       <Button variant="link" className="text-white">
//                         <Link to={"/Profile"}>Profile</Link>
//                       </Button>
//                     </motion.div>
//                   )}

//                   <motion.div
//                     className="flex w-fit items-center gap-2 cursor-pointer hover:text-red-400 transition duration-300"
//                     whileHover={{ scale: 1.1 }}
//                   >
//                     <LogOut />
//                     <Button onClick={logoutHandler} variant="link" className="text-white">
//                       Logout
//                     </Button>
//                   </motion.div>
//                 </div>
//               </PopoverContent>
//             </Popover>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Navbar;
