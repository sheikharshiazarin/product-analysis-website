import React from "react";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="para">
      <h3>What is Context API?</h3>
      <p>
        The React Context API is a way for a React app to effectively produce
        global variables that can be passed around. This is the alternative to
        moving props from grandparent to child to parent, and so on. Context is
        also touted as an easier, lighter approach to state management using
        Redux. Context API is a new feature added in version 16.3 of React that
        allows one to share state across the entire app (or part of it) lightly
        and with ease.
      </p>
      <h3>What are Semantic Elements?</h3>
      <p>
        A semantic element clearly describes its meaning to both the browser and
        the developer. Examples of non-semantic elements: div and span - Tells
        nothing about its content. Examples of semantic elements: form, table,
        and article - Clearly defines its content.
      </p>
    </div>
  );
};

export default Blogs;
