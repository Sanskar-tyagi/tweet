import Container from "../Components/Container";
import Modal from "../Components/Modal";
import Nav from "../Components/Nav";
import UserProfile from "../Components/UserProfile";

import { useSelector } from "react-redux";
function Explore() {
  const isOpen = useSelector((state) => state.open.isOpen);
  return (
    <div className="container px-8 w-full h-full font-sans text-gray-100 dark:bg-gray-900">
      <Nav />
      <div className="flex justify-around ">
        <UserProfile />
        <Container />
        <Modal isOpen={isOpen} />
        <UserProfile />
      </div>
    </div>
  );
}

export default Explore;
