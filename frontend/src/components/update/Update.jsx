import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { TextField, Button, Paper } from "@mui/material";
import { toast } from "react-toastify";

const Update = () => {
  const { id } = useParams(); // Get user ID from the URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    state: "",
    district: "",
  });

  // Fetch data for the specific user by ID
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://web-neu.onrender.com/vcard/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit updated data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://web-neu.onrender.com/vcard/${id}`, formData);
      navigate("/dashboard");
      toast.success('Data Updated Successfully!!')
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <Paper elevation={3} style={{ padding: "20px", maxWidth: "600px", margin: "20px auto" }}>
      <h2>Update User Details</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="State"
          name="state"
          value={formData.state}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="District"
          name="district"
          value={formData.district}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        {/* <TextField
          label="Image URL"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          fullWidth
          margin="normal"
        /> */}
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: "20px" }}>
          Update
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          style={{ marginLeft: "10px", marginTop: "20px" }}
          onClick={() => navigate("/dashboard")}
        >
          Cancel
        </Button>
      </form>
    </Paper>
  );
};

export default Update;
