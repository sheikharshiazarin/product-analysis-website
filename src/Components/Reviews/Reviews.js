import React, { useEffect, useState } from "react";
import Pic from "../../Assets/Image/pic.png";
import Blog from "../Blog/Blog";
// import "./Home.css";
const Home = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("dataa.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="bird">
      <h1>What they said?</h1>
      <div className="comment">
        <h1> Comments:{blogs.length}</h1>
        {blogs.map((blog, index) => (
          <Blog key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Home;
