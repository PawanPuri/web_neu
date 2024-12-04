import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams to get the ID from the route
import './IdentityCard.css'; // CSS for styling

const IdentityCard = () => {
  const { id } = useParams(); // Extract the ID from the route
  const [vCardData, setVCardData] = useState(null);

  useEffect(() => {
    // Fetch data by ID
    axios
      .get(`https://web-neu.onrender.com/vcard/${id}`)
      .then((response) => {
        setVCardData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching the VCard data:', error);
      });
  }, [id]);

  const handlePrint = () => {
    window.print(); // Trigger browser print
  };

  if (!vCardData) {
    return (
      <div className="simmer">
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  return (
    <div className="print-container">
      <div className="identity-card-grid" id="printable-cards">
        {Array(4)
          .fill(vCardData)
          .map((data, index) => (
            <div className="identity-card" key={index}>
              <div className="identity-card-content">
                <div className="identity-left">
                  <h2>
                    {data.firstName} {data.middleName} {data.lastName}
                  </h2>
                  <p>
                    <strong>Phone:</strong> {data.phoneNumber}
                  </p>
                  <p>
                    <strong>Email:</strong> {data.email}
                  </p>
                  <p>
                    <strong>State:</strong> {data.state}
                  </p>
                  <p>
                    <strong>District:</strong> {data.district}
                  </p>
                  <button className="print-button" onClick={handlePrint}>
        Print
      </button>
                </div>
                <div className="identity-right">
                  <img
                    src={`https://web-neu.onrender.com${data.imageUrl}`}
                    alt="Profile"
                    className="profile-image"
                  />
                  <img src={data.qrCode} alt="QR Code" className="qr-code" />
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* <button className="print-button" onClick={handlePrint}>
        Print
      </button> */}
    </div>
  );
};

export default IdentityCard;
