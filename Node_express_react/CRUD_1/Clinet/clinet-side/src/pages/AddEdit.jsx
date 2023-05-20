import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import './add.css'
import { useNavigate, useParams } from "react-router-dom";
const initialState = {
  name: "",
  email: "",
  contact: "",
};

function AddEdit() {
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);
  const { name, email, contact } = state;
  const { id } = useParams();
  useEffect(() => {
    if (id) getSingleUser(id);
  }, [id]);

  const getSingleUser = async (id) => {
    const response = await axios.get(`/user/${id}`);
    if (response.status === 200) {
      setState({ ...response.data[0] });
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const addContact = async (data) => {
    const response = await axios.post("/user", data);
    if (response.status === 200) {
      toast.success(response.data);
    }
  };

  const updateContact = async (data, id) => {
    const response = await axios.put(`/user/${id}`, data);
    if (response.status === 200) {
      toast.success(response.data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      toast.error("Please provide value into each input field");
    } else {
      if (!id) {
        addContact(state);
      } else {
        updateContact(state, id);
      }
    }
    setTimeout(() => navigate("/"), 500);
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          width: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name......."
          value={name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email......."
          value={email}
          onChange={handleChange}
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder="Enter Contact No. ......."
          value={contact}
          onChange={handleChange}
        />
        <input type="submit" value={id ? "Update" : "Add"} />
      </form>
    </div>
  );
}

export default AddEdit;
