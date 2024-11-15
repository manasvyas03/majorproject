// MedicalFileUpload.js
import React, { useState, useEffect } from "react";
import "./MedicalFileUpload.css";

const MedicalFileUpload = () => {
  const [files, setFiles] = useState([]);
  const [fullScreenImage, setFullScreenImage] = useState(null);

  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem("medicalFilesDB")) || [];
    setFiles(storedFiles);
  }, []);

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files).map((file) => {
      return {
        id: new Date().getTime() + Math.random(),
        name: file.name,
        url: URL.createObjectURL(file),
        data: file,
      };
    });

    const newFiles = [...files, ...uploadedFiles];
    setFiles(newFiles);
    localStorage.setItem("medicalFilesDB", JSON.stringify(newFiles));
  };

  const openFullScreen = (fileUrl) => {
    setFullScreenImage(fileUrl);
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
  };

  const deleteFile = (fileId) => {
    const updatedFiles = files.filter((file) => file.id !== fileId);
    setFiles(updatedFiles);
    localStorage.setItem("medicalFilesDB", JSON.stringify(updatedFiles));
  };

  return (
    <div className="file-upload-container">
      <h2 className="file-upload-title">Upload Your Medical Files</h2>
      <input
        type="file"
        multiple
        accept="image/png, image/jpeg, image/jpg"
        onChange={handleFileUpload}
        className="file-upload-input"
      />
      <div className="gallery">
        {files.map((file) => (
          <div key={file.id} className="gallery-card">
            <img
              src={file.url}
              alt={`Uploaded ${file.name}`}
              className="gallery-image"
              onClick={() => openFullScreen(file.url)}
            />
            <div className="gallery-card-content">
              <p className="file-name">{file.name}</p>
              <button onClick={() => deleteFile(file.id)} className="delete-button">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {fullScreenImage && (
        <div className="full-screen-overlay" onClick={closeFullScreen}>
          <img src={fullScreenImage} alt="Full Screen" className="full-screen-image" />
        </div>
      )}
    </div>
  );
};

export default MedicalFileUpload;
