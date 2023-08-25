import Login from "./Components/Login";
import Explore from "./Pages/Explore";
import SignUp from "./Pages/SignUp";
import store from "./Store/Store";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Explore />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
