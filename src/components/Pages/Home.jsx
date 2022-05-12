import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Table.css";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //console.log("rendering");
    loadUsersData();
  }, []);

  const loadUsersData = async () => {
    const response = await axios.get(`http://localhost:3001/users`);
    //console.log(response.data);
    const finalData = response.data;
    setUsers(finalData);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUsersData();
    alert("User Deleted Successfully");
  }

  const ActionButton = {
      fontSize: "15px",
      display: "inline-block"
  }

  return (
    <>
      <div className="container">
        <div className="py-4">
          <h1 className="heading">All Users Data</h1>
        </div>
      </div>
      <div className="table-data">
        <table className="table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Username</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              const { id, name, username, phone, email } = user;

              return (
                <>
                  <tr key={index}>
                    <td
                      data-label="S.No"
                      style={{
                        color: "red",
                        fontWeight: "600",
                        fontSize: "19px",
                      }}
                    >
                      {index + 1}
                    </td>
                    <td data-label="Name">{name}</td>
                    <td data-label="Username">{username}</td>
                    <td data-label="Phone">{phone}</td>
                    <td data-label="Email">{email}</td>
                    <td data-label="Action" style={ActionButton}>
                      <Link to={`/users/${id}`} className="view">
                        <i class="fa-solid fa-eye"></i>
                      </Link>
                      <Link to={`/users/edit/${id}`} className="edit common-size">
                        <i class="fa-solid fa-pencil"></i>
                      </Link>
                      <Link to="" className="delete" onClick={() => deleteUser(id)}>
                        <i class="fa-solid fa-circle-minus"></i>
                      </Link>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
