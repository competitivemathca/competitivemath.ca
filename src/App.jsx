import NavBar from "./Components/Navbar";
import Home from "./pages/Home";
import Problems from "./pages/Problems";
import Contests from "./pages/Contests";
import Community from "./pages/Community";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";

const loggedIn = false;

export default function App() {
  return (
    <div className="overflow-auto">
      <NavBar />
      <div className="my-6 mx-8 mb-0 pb-12 overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/contests" element={<Contests />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={loggedIn ? <Profile /> : <Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}