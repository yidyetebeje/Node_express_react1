import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";
import { toast } from "react-toastify";
function Home() {
  const [data, setData] = useState([{}]);
  const navigate = useNavigate();
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const response = await axios.get("/users");
    if (response.status === 200) {
      setData(response.data);
    }
  };
  const onDelete = async (id) => {
    if (window.confirm("Are you Sure?")) {
      const response = await axios.delete(`/user/${id}`);
      if (response.status === 200) {
        toast.success("User Deleted successfully");
        getUsers();
        setTimeout(() => navigate("/"), 500);
      }
    }
  };
  console.log(data);
  return (
    <div style={{ marginTop: "150px" }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Contact</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <th scope="row" style={{ textAlign: "center" }}>
                {index + 1}
              </th>
              <td style={{ textAlign: "center" }}>{user.name}</td>
              <td style={{ textAlign: "center" }}>{user.email}</td>
              <td style={{ textAlign: "center" }}>{user.contact}</td>
              <td>
                <Link to={`/update/${user.id}`}>
                  <button className="btn btn-edit">Edit</button>
                </Link>
                <button
                  className="btn btn-delete"
                  onClick={() => onDelete(user.id)}
                >
                  Delete
                </button>
                <Link to={`/view/${user.id}`}>
                  <button className="btn btn-view">View</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
