// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Videos from "./Components/Videos/Videos";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import Navbar from "./Components/Navbar/Navbar";
import Blogs from "./Components/Blogs/Blogs";
// import Blog from "./Components/Blog/Blog";
import Reviews from "./Components/Reviews/Reviews";
import Dashboard from "./Components/Dashboard/Dashboard";
import BlogsDtails from "./Components/BlogsDtails/BlogsDtails";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogsDtails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
