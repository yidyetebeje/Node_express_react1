import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { format } from 'date-fns'
import './view.css'
import axios from "axios";
const View = () => {
  const [user, setUser] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    getSingleUser(id);
  }, [id]);

  const getSingleUser = async (id) => {
    const response = await axios.get(`/user/${id}`);
    if (response.status === 200) {
      setUser({ ...response.data[0] });
    }
  };

  return (
    <div style={{ margin: "30px" }}>
      <div className="card">
        <div className="card-header">
          <h1>User Contact Detail</h1>
        </div>
        <div className="container">
          <strong>ID: </strong>
          <span>{id}</span>
          <br /> 
          <strong>Name: </strong>
          <span>{user && user.name}</span>
          <br /> 
          <strong>Email: </strong>
          <span>{user && user.email}</span>
          <br /> 
          <strong>Contact: </strong>
          <span>{user && user.contact}</span>
          <br />
          <strong>Date: </strong>
          <span>{format(new Date(), 'yyyy/mm/dd')}</span>
          <br/>
          <Link to="/">
            <button className="btn btn-primary">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
