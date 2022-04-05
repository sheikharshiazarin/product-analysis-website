import React, { useEffect, useState } from "react";
import Pic from "../../Assets/Image/pic.png";
// import Product from "../Product/Product";
import Blog from "../Blog/Blog";
import "./Home.css";
const Home = () => {
  const [blogs, setBlogs] = useState([]);
  //   //   const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("dataa.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="bird">
      <div>
        <h1>Birdy is the best place for buying birds.</h1>
        <p>
          Birds are 'warm-blooded' vertebrates, with fore-limbs modified to
          wings, and skins covered with feathers.We help you to find gorgious
          bird of the world.Most of the people love birds as a pet.We think you
          so.
        </p>
      </div>
      <div>
        <img src={Pic} alt="" />
      </div>
      <div className="comment">
        <h1> Comments:{blogs.length}</h1>
        {blogs.slice(0, 3).map((blog, index) => (
          <Blog key={index} blog={blog} />
        ))}
      </div>
      <button className="btn">More</button>
    </div>
  );
};

export default Home;
