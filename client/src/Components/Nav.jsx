import { FaTwitter, FaHashtag } from "react-icons/fa";
import { BiUserCircle, BiSolidDownArrow } from "react-icons/bi";

function Nav() {
  const isLogin = false;
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
            <div className="flex gap-6 bg-slate-600 p-1 px-3 items-center justify-between rounded-xl">
              <div className="flex items-center  gap-2">
                <BiUserCircle size={28} />
                <span className="text-md">UserSharma</span>
              </div>
              <BiSolidDownArrow
                size={11}
                className="hover:cursor-pointer transition-all"
              />
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
