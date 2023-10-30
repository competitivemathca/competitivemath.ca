import NavBar from "./Components/Navbar"
import Home from "./pages/Home"
import Problems from "./pages/Problems"
import Contests from "./pages/Contests"
import Community from "./pages/Community"
import About from "./pages/About"
import Profile from "./pages/Profile"
import { Route, Routes } from "react-router-dom"

export default function App() {

  return (
    <>
      <NavBar />
      <div className="m-8 mb-0 pb-12 overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/contests" element={<Contests />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  )
}
