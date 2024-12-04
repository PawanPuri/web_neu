import {
  Box,
  TextField,
  Button,
  Typography,
  Stack,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { statesWithDistricts } from "../../data";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    // address: "",
    state: "",
    district: "",
    image: null,
  });

  const [qrCodeValue, setQRCodeValue] = useState("");
  const [preview, setPreview] = useState(null);
  const qrCodeRef = useRef(null);
  const imageRef = useRef(null);
  const [crop, setCrop] = useState({ unit: "%", width: 50, aspect: 1 });
  const [completedCrop, setCompletedCrop] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const generateVCard = (data) =>
    `BEGIN:VCARD
VERSION:3.0
FN:${data.firstName} ${data.middleName} ${data.lastName}
N:${data.lastName};${data.firstName};${data.middleName}
TEL;TYPE=CELL:${data.phoneNumber}
EMAIL:${data.email}
ADR;TYPE=HOME:;;${data.address}
END:VCARD`
      .replace(/\s\s+/g, " ")
      .trim();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "state") {
      setFormData((prev) => ({ ...prev, district: "" }));
    }
  };

  const districts =
    statesWithDistricts.find((s) => s.state === formData.state)?.districts ||
    [];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleCropComplete = (crop) => {
    setCompletedCrop(crop);
    generateCroppedImage(crop);
  };

  const generateCroppedImage = async (crop) => {
    if (!crop || !imageRef.current) return;

    const canvas = document.createElement("canvas");
    const scaleX = imageRef.current.naturalWidth / imageRef.current.width;
    const scaleY = imageRef.current.naturalHeight / imageRef.current.height;

    canvas.width = crop.width;
    canvas.height = crop.height;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(
      imageRef.current,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    canvas.toBlob((blob) => {
      if (blob) {
        const croppedImageUrl = URL.createObjectURL(blob);
        setCroppedImage(croppedImageUrl);
      }
    }, "image/jpeg");
  };

  const handleRemoveImage = () => {
    setFormData((prev) => ({ ...prev, image: null }));
    setPreview(null);
  };

  useEffect(() => {
    setQRCodeValue(generateVCard(formData));
  }, [formData]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const qrCodeCanvas = qrCodeRef.current?.querySelector("canvas");
    if (!qrCodeCanvas) return;

    const formDataObj = new FormData();
    formDataObj.append("firstName", formData.firstName);
    formDataObj.append("middleName", formData.middleName);
    formDataObj.append("lastName", formData.lastName);
    formDataObj.append("phoneNumber", formData.phoneNumber);
    formDataObj.append("email", formData.email);
    formDataObj.append("state", formData.state);
    formDataObj.append("district", formData.district);

    formDataObj.append("qrCode", qrCodeCanvas.toDataURL("image/png"));
    if (formData.image) formDataObj.append("image", formData.image);

    try {
      await axios.post("http://localhost:3002/vcard", formDataObj);
      toast.success('Form Submited Successfully!!')
      onClose();
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "90%",
          maxWidth: 500,
          maxHeight: "90vh",
          backgroundColor: "#fff",
          padding: 3,
          borderRadius: 2,
          boxShadow: 24,
          overflowY: "auto",
        }}
      >
        {/* Close Button */}
        <Button
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            zIndex: 10,
          }}
          color="secondary"
        >
          Close
        </Button>

        <Typography variant="h5" component="div" gutterBottom>
          Register Form
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <Stack spacing={2}>
            <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Middle Name"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Phone Number"
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
            />

            {/* State Dropdown */}
            <FormControl fullWidth>
              <InputLabel
                id="state-label"
                sx={{
                  zIndex: 1, // Ensure the label stays above the border
                  backgroundColor: "white", // To avoid overlapping with border when shrunk
                  padding: "0 4px", // Adds spacing around label when it shrinks
                  transform: "translate(14px, -6px) scale(0.75)", // Keeps label in right place
                }}
              >
                Select State
              </InputLabel>
              <Select
                labelId="state-label"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              >
                {statesWithDistricts.map((stateObj, index) => (
                  <MenuItem key={index} value={stateObj.state}>
                    {stateObj.state}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* District Dropdown */}
            {formData.state && (
              <FormControl fullWidth>
                <InputLabel
                  id="district-label"
                  sx={{
                    zIndex: 1, // Ensure the label stays above the border
                    backgroundColor: "white", // To avoid overlapping with border when shrunk
                    padding: "0 4px", // Adds spacing around label when it shrinks
                    transform: "translate(14px, -6px) scale(0.75)", // Keeps label in right place
                  }}
                >
                  Select District
                </InputLabel>
                <Select
                  labelId="district-label"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                >
                  {districts.map((district, index) => (
                    <MenuItem key={index} value={district}>
                      {district}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}

            <Button variant="outlined" component="label">
              {formData.image ? "Change Photo" : "Upload Photo"}
              <input type="file" hidden onChange={handleFileChange} />
            </Button>
            {preview && (
              <ReactCrop
                src={preview}
                crop={crop}
                onChange={(newCrop) => setCrop(newCrop)}
                onComplete={handleCropComplete}
              >
                <img
                  ref={imageRef}
                  src={preview}
                  alt="Crop Preview"
                  style={{ maxWidth: "100%" }}
                />
              </ReactCrop>
            )}

            {croppedImage && (
              <Box>
                <Typography variant="subtitle1">Cropped Image:</Typography>
                <img
                  src={croppedImage}
                  alt="Cropped Preview"
                  style={{ width: "150px" }}
                />
                <Button
                  variant="text"
                  color="error"
                  onClick={handleRemoveImage}
                >
                  Remove Image
                </Button>
              </Box>
            )}

            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            {qrCodeValue && (
              <Box
                ref={qrCodeRef}
                sx={{
                  mt: 2,
                  p: 2,
                  border: "1px solid #ccc",
                  borderRadius: 1,
                  display: "none",
                  justifyContent: "center",
                  bgcolor: "#f9f9f9",
                }}
              >
                <QRCodeCanvas value={qrCodeValue} size={150} style={{}} />
                //{" "}
              </Box>
            )}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactForm;
