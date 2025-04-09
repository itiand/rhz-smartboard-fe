import React, { useState } from "react";
import axios from "axios";
import styles from "./FileUpload.module.css";

// Defining state variables of what is being used in this file
const FileUpload = () => {
  const [images, setImages] = useState([]); // Updated to store multiple images
  const [audios, setAudios] = useState([]); // Updated to store multiple audios
  const [uploadStatus, setUploadStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState(null);
  const [boardTitle, setBoardTitle] = useState("Title of Smartboard");
  const [previewImage, setPreviewImage] = useState(null); // Store image preview

  // Trigger Function when file is uploaded by a user
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const fileArray = Array.from(files); // Convert FileList to Array for easier handling

    if (name === "image" && fileArray.length > 0) {
      setImages(fileArray);
      setPreviewImage(URL.createObjectURL(fileArray[0])); // Generate preview URL of first image
    } else if (name === "audio" && fileArray.length > 0) {
      setAudios(fileArray);
    }
  };

  // Function handles form submissions
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Creating a form data to store selected files when uploaded
    const formData = new FormData();

    // Append all image files under the same key
    images.forEach((file) => {
      formData.append("image", file);
    });

    // Append all audio files under the same key
    audios.forEach((file) => {
      formData.append("audio", file);
    });

    try {
      setUploadStatus("Uploading...");
      setErrorMessage(null);

      // Send the file to the backend using the local host I setup in the backend
      const response = await axios.post(
        "http://127.0.0.1:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Log the response to debug
      console.log("Backend Response:", response.data);

      // Handle successful upload
      setUploadStatus(response.data.message); // This is the success message
      setUploadedFiles(response.data.files); // Set uploaded files data for further display
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred while uploading the file.");
      setUploadStatus(""); // Clear upload status in case of error
    }
  };

  return (
    <div className={styles.fileUploadContainer}>
      {/* Editable Smartboard Title */}
      <h2>
        <input
          type="text"
          value={boardTitle}
          onChange={(e) => setBoardTitle(e.target.value)}
          placeholder="Enter Smartboard Title"
          style={{
            fontSize: "1.5em",
            fontWeight: "bold",
            border: "none",
            outline: "none",
            textAlign: "center",
            width: "100%",
            background: "transparent",
          }}
        />
      </h2>

      <h2>Upload Your Media Below!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Image:
            <input
              type="file"
              name="image"
              accept="image/*"
              multiple 
              onChange={handleFileChange}
            />
          </label>
        </div>
        <div>
          <label>
            Audio:
            <input
              type="file"
              name="audio"
              accept="audio/*"
              multiple 
              onChange={handleFileChange}
            />
          </label>
        </div>
        <button type="submit">Upload</button>
      </form>

      {/* Image Preview*/}
      {previewImage && (
        <div className="image-preview">
          <h3>Image Preview:</h3>
          <img
            src={previewImage}
            alt="Uploaded Preview"
            className="preview-img"
          />
        </div>
      )}

      {uploadStatus && <p>{uploadStatus}</p>}
      {uploadedFiles && (
        <div>
          <h3>Uploaded Files:</h3>
          <ul>
            {/* Show all uploaded image paths */}
            {uploadedFiles.image &&
              uploadedFiles.image.map((img, index) => (
                <li key={index}>
                  <strong>Image {index + 1}:</strong> {img}
                </li>
              ))}
            {/* Show all uploaded audio paths */}
            {uploadedFiles.audio &&
              uploadedFiles.audio.map((aud, index) => (
                <li key={index}>
                  <strong>Audio {index + 1}:</strong> {aud}
                </li>
              ))}
          </ul>
        </div>
      )}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default FileUpload;
