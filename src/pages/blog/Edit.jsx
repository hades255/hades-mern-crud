import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "./Sidebar";
import Axios from "axios";

const Edit = () => {
  const { id } = useParams();
  const [state, setState] = useState({
    title: "",
    body: "",
    image: "",
    name: "",
    gender: "Man",
    dob: "1999-04-23",
    martialStatus: "",
    countryLivingIn: "",
    city: "",
    height: 0,
    weight: 0,
    complexion: "",
  });

  useEffect(() => {
    Axios.get("http://127.0.0.1:3000/api/blogs/" + id)
      .then(({ data }) => setState(data.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleInputChange = useCallback(
    ({ target: { name, value } }) => {
      setState({ ...state, [name]: value });
    },
    [state]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      Axios.put("http://127.0.0.1:3000/api/blogs/" + id, state)
        .then(({ data }) => {
          //   console.log(data);
          window.alert("Done");
        })
        .catch((err) => console.log(err));
    },
    [state, id]
  );

  return (
    <div className="d-flex">
      <div className="col-md-3 d-flex flex-column">
        <SideBar />
      </div>
      <div className="col-md-9">
        <form action="" onSubmit={handleSubmit}>
          <div className="d-flex">
            <button className="m-5 btn btn-outline-success" type="submit">
              Submit
            </button>
          </div>
          <div className="m-3 col-md-9 d-flex flex-wrap">
            <div className="w-50 p-2 mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="form-control"
                value={state.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-50 p-2 mb-3">
              <label htmlFor="body" className="form-label">
                body
              </label>
              <textarea
                type="text"
                name="body"
                id="body"
                className="form-control"
                value={state.body}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-50 p-2 mb-3">
              <label htmlFor="name" className="form-label">
                name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                value={state.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-50 p-2 mb-3">
              <label htmlFor="gender" className="form-label">
                gender
              </label>
              <select
                type="text"
                name="gender"
                id="gender"
                className="form-control"
                value={state.gender}
                onChange={handleInputChange}
              >
                <option value="Man">Man</option>
                <option value="Woman">Woman</option>
              </select>
            </div>
            <div className="w-50 p-2 mb-3">
              <label htmlFor="dob" className="form-label">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                className="form-control"
                value={state.dob}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-50 p-2 mb-3">
              <label htmlFor="martialStatus" className="form-label">
                Martial Status
              </label>
              <input
                type="text"
                name="martialStatus"
                id="martialStatus"
                className="form-control"
                value={state.martialStatus}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-50 p-2 mb-3">
              <label htmlFor="countryLivingIn" className="form-label">
                Country Living In
              </label>
              <input
                type="text"
                name="countryLivingIn"
                id="countryLivingIn"
                className="form-control"
                value={state.countryLivingIn}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-50 p-2 mb-3">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                className="form-control"
                value={state.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-50 p-2 mb-3">
              <label htmlFor="height" className="form-label">
                Height
              </label>
              <input
                type="number"
                name="height"
                id="height"
                className="form-control"
                value={state.height}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-50 p-2 mb-3">
              <label htmlFor="weight" className="form-label">
                Weight
              </label>
              <input
                type="number"
                name="weight"
                id="weight"
                className="form-control"
                value={state.weight}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-50 p-2 mb-3">
              <label htmlFor="complexion" className="form-label">
                Complexion
              </label>
              <input
                type="text"
                name="complexion"
                id="complexion"
                className="form-control"
                value={state.complexion}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
