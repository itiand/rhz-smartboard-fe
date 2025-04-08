import React, { useState } from "react";
import axios from "axios";
import styles from "./FileUpload.module.css";

// Defining state variables of what is being used in this file
const FileUpload = () => {
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState(null);
  const [boardTitle, setBoardTitle] = useState("Title of Smartboard");
  const [previewImage, setPreviewImage] = useState(null); // Store image preview

  // Trigger Function when file is uploaded by a user
  const handleFileChange = (e) => {
    const { name, files } = e.target;

    if (name === "image" && files[0]) {
      setImage(files[0]);
      setPreviewImage(URL.createObjectURL(files[0])); // Generate preview URL
    } else if (name === "audio" && files[0]) {
      setAudio(files[0]);
    }
  };

  // Function handles form submissions
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Creating a form data to store selected files when uploaded
    const formData = new FormData();
    if (image) formData.append("image", image);
    if (audio) formData.append("audio", audio);

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
            {uploadedFiles.image && (
              <li>
                <strong>Image:</strong> {uploadedFiles.image}
              </li>
            )}
            {uploadedFiles.audio && (
              <li>
                <strong>Audio:</strong> {uploadedFiles.audio}
              </li>
            )}
          </ul>
        </div>
      )}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default FileUpload;
