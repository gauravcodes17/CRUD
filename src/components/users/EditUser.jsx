import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./User.css";

const EditUser = () => {
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();
  const [usersData, setUsersData] = useState({
    name: "",
    username: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value, e.target.name);
    const name = e.target.name;
    const value = e.target.value;

    setUsersData({
      ...usersData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      usersData.name &&
      usersData.username &&
      usersData.phone &&
      usersData.email
    ) {
      await axios.put(`http://localhost:3001/users/${id}`, usersData);
      alert("User Details Successfully Updated");
      navigate("/");
    } else {
      alert("All Fields are Required");
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    const result = await axios.get(`http://localhost:3001/users/${id}`);
    //console.log(result);
    setUsersData(result.data);
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6 m-auto">
            <div className="mx-auto mb-4 shadow wrapper">
              <h2 className="text-center text-color">Edit User</h2>
              <form action="" onSubmit={handleSubmit}>
                <div className="form-group form-group-two mb-4 mt-4">
                  <input
                    type="text"
                    className="form-control dorm-control-lg"
                    placeholder="Enter Your Name"
                    name="name"
                    onChange={handleChange}
                    value={usersData.name}
                  />
                </div>
                <div className="form-group form-group-two mb-4">
                  <input
                    type="text"
                    className="form-control dorm-control-lg"
                    placeholder="Enter Your Username"
                    name="username"
                    onChange={handleChange}
                    value={usersData.username}
                  />
                </div>
                <div className="form-group form-group-two mb-4">
                  <input
                    type="text"
                    className="form-control dorm-control-lg"
                    placeholder="Enter Your Phone"
                    name="phone"
                    onChange={handleChange}
                    value={usersData.phone}
                  />
                </div>
                <div className="form-group form-group-two">
                  <input
                    type="email"
                    className="form-control dorm-control-lg"
                    placeholder="Enter Your Email"
                    name="email"
                    onChange={handleChange}
                    value={usersData.email}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-warning text-white mt-4 w-100"
                >
                  Update User
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUser;
