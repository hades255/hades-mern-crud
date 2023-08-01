import React from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "../pages/blog";
import Create from "../pages/blog/Create";
import Edit from "../pages/blog/Edit";

const Router = () => {
  return (
    <Routes>
      <Route path="/blogs" exact Component={Blog} />
      <Route path="/blogs/create" exact Component={Create} />
      <Route path="/blogs/:id/edit" exact Component={Edit} />
    </Routes>
  );
};

export default Router;
