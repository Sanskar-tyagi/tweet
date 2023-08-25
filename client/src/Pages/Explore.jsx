import CTA from "../Components/CTA";
import Container from "../Components/Container";
import Modal from "../Components/Modal";
import Nav from "../Components/Nav";
import UserProfile from "../Components/UserProfile";

import { useSelector } from "react-redux";
import Users from "../Components/Users";
import { onAuthStateChanged } from "firebase/auth";
import { firbaseauth } from "../utils/firebase_config";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Explore() {
  const navigate = useNavigate();
  const isOpen = useSelector((state) => state.open.isOpen);
  useEffect(() => {
    onAuthStateChanged(firbaseauth, (currentUser) => {
      if (!currentUser) navigate("/login");
    });
  }, []);
  return (
    <div className="container px-8 w-full h-full font-sans text-gray-100 dark:bg-gray-900">
      <Nav />
      <div className="flex justify-around ">
        <UserProfile />
        <Container />
        <Modal isOpen={isOpen} />
        <div className="flex flex-col">
          <CTA />
          <Users />
        </div>
      </div>
    </div>
  );
}

export default Explore;
