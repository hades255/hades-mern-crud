import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="m-2 d-flex flex-column">
      <h3 className="m-2">Quick Links</h3>
      <Link to="/blogs" className="btn btn-primary m-2">
        Get All Blogs
      </Link>
      <Link to="/blogs/create" className="btn btn-primary m-2">
        Create Blog
      </Link>
      <button className="btn btn-primary m-2">Update Blog</button>
      <button className="btn btn-primary m-2">Delete Blog</button>
    </div>
  );
};

export default SideBar;
