import React, { useRef, useState } from "react";
import "./ProfileCard.css";

export default function ProfileCard() {

  const fileRef = useRef(null);
  const [image, setImage] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
    }
  };

  const openFile = () => {
    fileRef.current.click();
  };

  return (
    <div className="profile-container">

      <div className="profile-card">

        {/* Profile Image */}
        <div className="image-section" onClick={openFile}>

          {image ? (
            <img src={image} alt="profile"/>
          ) : (
            <div className="upload-box">Upload Image</div>
          )}

        </div>

        {/* Hidden input */}
        <input
          type="file"
          ref={fileRef}
          style={{ display: "none" }}
          onChange={handleImage}
        />

        {/* Profile details */}
        <div className="profile-info">

          <h2>Samyuktha</h2>
          <p>Email:lakkampallysamyuktha@thestackly.com</p>
          <p>Role:  Frontend Development</p>

        </div>

      </div>

    </div>
  );
}