import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ViewUser = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const [usersData, setUsersData] = useState({
    name: "",
    username: "",
    phone: "",
    email: "",
  });

  const { name, username, phone, email, website } = usersData;

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    const result = await axios.get(`http://localhost:3001/users/${id}`);
    //console.log(result);
    setUsersData(result.data);
  };

  const buttonStyle = {
    width: "100%",
    padding: "7px 0",
    letterSpacing: "0",
    outine: "none",
    border: "none",
    border: "1px solid transparent",
    backgroundColor: "#348977",
    color: "#fff",
    borderRadius: "5px",
  };

  return (
    <>
      <div className="container">
        <div className="py-4">
          <h1 className="heading">User Details</h1>
        </div>
      </div>
      <div className="table-data">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr key={usersData.id}>
              <td data-label="ID">{usersData.id}</td>
              <td data-label="Name">{name}</td>
              <td data-label="Username">{username}</td>
              <td data-label="Phone">{phone}</td>
              <td data-label="Email">{email}</td>
              <td data-label="Website">{website ? website : "none"}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container mb-4">
        <div className="redirect">
          <button
            style={buttonStyle}
            onClick={() => {
              navigate("/");
            }}
          >
            Back To Home Page
          </button>
        </div>
      </div>
    </>
  );
};

export default ViewUser;
