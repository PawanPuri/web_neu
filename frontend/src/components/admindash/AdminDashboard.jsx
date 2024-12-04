import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom"; 
import "./admindashboard.css";
import { useAuth } from "../../context/ContextProvider";
import { toast } from "react-toastify";
const AdminDashboard = () => {
  const [vCardData, setVCardData] = useState([]);
  const navigate = useNavigate(); 
  const {user,token,logout}=useAuth()
  console.log(user)
  useEffect(() => {
    const fetchVCardData = async () => {
      try {
        const response = await axios.get("https://web-neu.onrender.com/vcard");
        setVCardData(response.data); 
      } catch (error) {
        console.error("Error fetching VCard data:", error);
      }
    };

    fetchVCardData();
  }, []);

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  const handleViewCard = (id) => {
    navigate(`/identity-card/${id}`); 
  };

 



  const handeldelete = async (id) => {
    try {
      await axios.delete(`https://web-neu.onrender.com/vcard/${id}`);
      toast.warning('Data Deleted Successfully!');
      setVCardData((prevData) => prevData.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting VCard data:", error);
      toast.error('Failed to delete data. Please try again.');
    }
  };








  return (
   
    <div className="admin-dash">
      <div className="left">
        <div className="navbar">
          <h2>
            WelCome,<span className="admin-text">Admin</span>
          </h2>
          <div className="list">
            <ul>
             
              <li><button type="button" class="btn btn-danger" onClick={logout}>logout</button></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="content">
          <h1>Admin DashBoard</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Mobile</th>
              <th scope="col">Email</th>
              <th scope="col">State</th>
              <th scope="col">District</th>
              <th scope="col">Photo</th>
            </tr>
          </thead>
          <tbody>
            {vCardData.map((data,index)=>(
              <tr key={data._id}>
              <th scope="row">{index+1}</th>
              <td>{data.firstName} {data.lastName}</td>
              <td>{data.phoneNumber}</td>
              <td>{data.email}</td>
              <td>{data.state}</td>
              <td>{data.district}</td>
              <td><img src={`https://web-neu.onrender.com${data.imageUrl}`} alt="" className="img-thumbnail rounded-circle img-fluid" 
                style={{ width: "50px", height: "50px", objectFit: "cover" }}/></td>
              <td ><button type="button" class="btn btn-warning"  onClick={() => handleUpdate(data._id)} >Edit</button></td>
              <td ><button type="button" class="btn btn-success"  onClick={() => handleViewCard(data._id)} >PrintCard</button></td>
              <td ><button type="button" class="btn btn-danger"    onClick={() => handeldelete(data._id)} >Delete</button></td>
            </tr>

            ))}
            
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );// Extend the Mongoose Document interface

};

export default AdminDashboard;
