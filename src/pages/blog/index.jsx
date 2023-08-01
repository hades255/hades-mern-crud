import React, { useCallback, useEffect, useState } from "react";
import Axios from "axios";

import SideBar from "./Sidebar";
import "./style.css";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const reload = useCallback(() => {
    Axios.get("http://127.0.0.1:3000/api/blogs")
      .then(({ data }) => {
        setBlogs(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  const handleRemove = useCallback(
    (id) => {
      if (window.confirm("Sure?"))
        Axios.delete("http://127.0.0.1:3000/api/blogs/" + id)
          .then(({ data }) => {
            // console.log(data);
            window.alert("Done");
            reload();
          })
          .catch((err) => console.log(err));
    },
    [reload]
  );

  return (
    <div className="d-flex">
      <div className="col-md-3 d-flex flex-column">
        <SideBar />
      </div>
      <div className="col-md-9 p-3">
        <h3>Blog Management</h3>
        <div className="d-flex flex-column">
          {blogs.map((item, key) => (
            <BlogItem key={key} blog={item} removeBlog={handleRemove} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

const BlogItem = ({ blog, removeBlog }) => {
  const remove = useCallback(() => {
    removeBlog(blog._id);
  }, [blog, removeBlog]);

  return (
    <div className="d-flex flex-column blog-item mt-3">
      <div className="d-flex justify-content-between">
        <h4>{blog.title}</h4>
        <div className="check">
          <div className="btn-group">
            <Link
              to={`/blogs/${blog._id}/edit`}
              className="btn btn-outline-primary btn-sm"
            >
              <i className="fa fa-edit"></i>
            </Link>
            <button onClick={remove} className="btn btn-outline-danger btn-sm">
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
      <div>{blog.body}</div>
      <div>
        <b>Name</b>: {blog.name}
      </div>
      <div>
        <b>Gender</b>: {blog.Gender}
      </div>
      <div>
        <b>Date of Birth</b>: {blog.dob}
      </div>
      <div>
        <b>Martial Status</b>: {blog.martialStatus}
      </div>
      <div>
        <b>Country Living In</b>: {blog.countryLivingIn}
      </div>
      <div>
        <b>City</b>: {blog.city}
      </div>
      <div>
        <b>Height</b>: {blog.height}
      </div>
      <div>
        <b>Weight</b>: {blog.weight}
      </div>
      <div>
        <b>Complexion</b>: {blog.complexion}
      </div>
      <div className="border"></div>
    </div>
  );
};
