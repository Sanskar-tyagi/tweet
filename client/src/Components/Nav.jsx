import { FaTwitter, FaHashtag } from "react-icons/fa";
import { BiUserCircle, BiSolidDownArrow } from "react-icons/bi";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firbaseauth } from "../utils/firebase_config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
function Nav() {
  const [isLogin, setIslogin] = useState(false);
  const [user, setUser] = useState("");
  onAuthStateChanged(firbaseauth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser.email);
      setIslogin(true);
    } else {
      setIslogin(false);
    }
  });
  const navigate = useNavigate();
  const Logout = async function () {
    try {
      await signOut(firbaseauth);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <header className="p-4  dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <div className="flex">
          <a
            rel="noopener noreferrer"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <FaTwitter size={28} fill="#00acee" />
          </a>

          <div className="flex items-center pl-2">
            <div className="relative flex  py-2  pl-3 items-center rounded-xl focus:outline-none dark:bg-gray-800 dark:text-gray-100  ">
              <FaHashtag className="text-gray-400" />
              <input
                type="search"
                name="Search"
                placeholder="Explore..."
                className="w-32   pl-4 text-sm rounded-xl text-gray-400 sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100   "
              />
            </div>
          </div>
        </div>
        <div className="items-center flex-shrink-0  flex">
          {isLogin ? (
            <div className="flex relative gap-6 group bg-slate-600 cursor-pointer p-1 px-3 items-center justify-between rounded-xl">
              <div className="flex items-center  gap-2">
                <BiUserCircle size={28} />
                <span className="text-md">{user}</span>
              </div>
              <BiSolidDownArrow
                size={11}
                className="hover:cursor-pointer transition-all"
              />
              <div
                onClick={() => {
                  Logout();
                }}
                className="flex  absolute bg-slate-600 px-4 rounded-xl transition-all delay-100 py-2 right-0 opacity-0 group-hover:translate-y-10 group-hover:opacity-100"
              >
                <AiOutlineLogout size={24} className=" rotate-90" />
                <span>Log Out</span>
              </div>
            </div>
          ) : (
            <button className="px-8 py-2 font-semibold rounded hover:cursor-pointer hover:text-sky-600 transition-all delay-75 hover:bg-slate-100 dark:bg-slate-600 ">
              Log in
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Nav;
