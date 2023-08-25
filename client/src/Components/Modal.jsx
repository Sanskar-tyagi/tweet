import { useCallback, useEffect, useState } from "react";
import { BsFillCalendar2DayFill, BsImage } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { FaPoll } from "react-icons/fa";
import { toggleOpen } from "../Store/openModal";
import { useDispatch } from "react-redux";
import axios from "axios";
// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen }) => {
  const [showModal, setShowModal] = useState(isOpen);
  const imageURL = "";
  const email = "sanskar@gmail.com";

  const dispatch = useDispatch();
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);
  const [message, SetMssg] = useState("");
  const handleClose = useCallback(() => {
    dispatch(toggleOpen());
    setShowModal(false);
  }, []);
  const handleSubmit = async () => {
    const tweetData = {
      email: email,
      Tweets: {
        message: message,
        imageURL: imageURL,
      },
    };
    await axios.post("http://localhost:5000/", tweetData).then((response) => {
      console.log(response.data);
    });
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className={`
            justify-center 
            items-center 
            flex 
            text-black
            overflow-x-hidden 
            overflow-y-auto 
            fixed 
            inset-0 
            z-50
            outline-none 
            focus:outline-none
            bg-neutral-800/70
          `}
      >
        <div
          className="
            relative 
            w-full
            md:w-4/6
            lg:w-3/6
            xl:w-2/5
            my-6
            mx-auto 
            h-full 
            lg:h-auto
            md:h-auto
            "
        >
          <div
            className={`
              translate
              duration-300
              h-full
              ${showModal ? "translate-y-0" : "translate-y-full"}
              ${showModal ? "opacity-100" : "opacity-0"}
            `}
          >
            <div
              className="
                translate
                h-full
                lg:h-auto
                md:h-auto
                border-0 
                rounded-lg 
                shadow-lg 
                relative 
                flex 
                flex-col 
                w-full 
                bg-slate-800
                outline-none 
                focus:outline-none
              "
            >
              {/*header*/}
              <div
                className="
                  flex 
                  items-center 
                  p-6
                  rounded-t
                  justify-between
                  relative
                  border-b-[1px]
                  "
              >
                {" "}
                <div className="mx-2 w-10  ">
                  <img
                    className="inline-block h-10 w-10 rounded-full"
                    src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
                    alt=""
                  />
                </div>
                <div className="text-lg text-white font-semibold">
                  Create a new post
                </div>
                <button
                  className="
                      p-1
                      border-0 
                      hover:opacity-70
                      transition 
                    "
                  onClick={handleClose}
                >
                  <IoMdClose fill="white" size={18} />
                </button>
              </div>

              <textarea
                onChange={(e) => {
                  SetMssg(e.target.value);
                }}
                className="bg-transparent  p-4 h-64 rounded-b-lg resize-none text-gray-400 focus-visible:text-white    bg-gray-700  focus-visible:outline-none outline-none border-none   font-medium text-lg w-full"
                placeholder="What's happening?"
              ></textarea>
              <div className="relative p-6 flex justify-between">
                <div className="flex gap-6 ">
                  <div className="ml-2 group   hover:bg-gray-600 cursor-pointer transition-all delay-75 rounded-full justify-center items-center flex p-4">
                    <span className="text-md   text-white absolute transition-all   delay-150  whitespace-nowrap  group-hover:-translate-y-12 opacity-0 group-hover:opacity-100">
                      Photo
                    </span>
                    <BsImage size={20} fill="white" />
                  </div>
                  <div className="hover:bg-gray-600 group cursor-pointer transition-all delay-75 rounded-full justify-center items-center flex p-4">
                    <span className="text-md   text-white absolute transition-all  delay-150   group-hover:-translate-y-12 opacity-0  group-hover:opacity-100">
                      Create an event
                    </span>
                    <BsFillCalendar2DayFill size={20} fill="white" />
                  </div>{" "}
                  <div className="hover:bg-gray-600 group cursor-pointer transition-all delay-75 rounded-full justify-center items-center flex p-4">
                    <span className="text-md   text-white absolute transition-all  delay-150   group-hover:-translate-y-12 opacity-0  group-hover:opacity-100">
                      Create a Poll
                    </span>
                    <FaPoll size={20} fill="white" />
                  </div>
                </div>
                <div className="flex">
                  <button
                    onClick={() => {
                      handleSubmit();
                    }}
                    type="button"
                    className="px-10 text-center py-1 font-semibold transition-all delay-75 hover:bg-sky-500 hover:text-gray-200 rounded-full dark:bg-gray-600 dark:text-gray-100"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
