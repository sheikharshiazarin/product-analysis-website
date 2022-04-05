import React from "react";
import "./Blog.css";
import Indicator from "../../Assets/Image/indicator.svg";
import { useNavigate } from "react-router-dom";

const Blog = ({ blog }) => {
  const navigate = useNavigate();
  const { imageURL, title, blog: blogBody, admin, _id, ratings } = blog;
  return (
    <div className="blog-container">
      <div className="blog-image-container">
        <img src={imageURL} alt="" />
      </div>
      <div className="blog-content">
        <div>
          <h3>{title}</h3>
          <div className="author-name">
            <img src={Indicator} alt="" />
            <h3>{admin}</h3>
          </div>
        </div>

        <h3>Rating:{ratings}</h3>
        {/* <span className="read-more" onClick={() => navigate(`/blog/${_id}`)}>
          ...Read More
        </span> */}
      </div>
    </div>
  );
};

export default Blog;
