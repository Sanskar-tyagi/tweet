import Explore from "./Pages/Explore";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import store from "./Store/Store";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Explore />}></Route>
        <Route path="/Login" element={<SignIn />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
