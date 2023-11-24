import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({logged}) => {

  const navigate = useNavigate();
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    logged ? navigate("/login") : navigate("/login") ;
  };

  return (
    <div className="w-full h-[90px] bg-green-950">

      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <img className="w-[90px] rounded-lg" src="./src/assets/logos/logo-green.png"/>
        </div>
        <div className="hidden md:flex text-green-400">
          <ul className="flex items-center">
            <div >
              <button onClick={()=> {handleNav()}} >Login | Signup</button>
            </div>
            
            <span className="px-4"></span>
            <button onClick={() => navigate("/about")}>About us</button>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Navbar = ({logged}) => {

//   const navigate = useNavigate();
//   const [nav, setNav] = useState(false);

//   const handleLogin = () => {
//     navigate("/Login");
//   };

//   const handleSignup = () => {
//     navigate("/Signup");
//   };

//   return (
//     <div className="w-full h-[90px] bg-green-950">

//       <div className="w-full px-14 flex justify-between items-center h-full">
//         <div>
//           <img className="w-[90px] rounded-lg" src="./src/assets/logos/logo-green.png"/>
//         </div>
//         <div className="hidden md:flex text-green-400">
//           <ul className="flex items-center">
//             <div >
//               <button onClick={handleLogin}>Login</button>
//               <button onClick={handleSignup}>Signup</button>
//             </div>
            
//             <span className="px-4"></span>
//             <button onClick={() => navigate("/about")}>About us</button>
//           </ul>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Navbar;
