import { ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { v4 } from "uuid";
import { imageDb } from "../FirebaseImages/Config";
import { useHistory } from "react-router-dom";
import { Spinner } from "react-bootstrap";
const ImageUpload = () => {
  const history = useHistory();
  const [img, setImg] = useState("");
  const [show, setShow] = useState(null);
  const [waiting, setWaiting] = useState(false);
  const handleClick = () => {
    if (img !== null) {
      setWaiting(true);
      const imgRef = ref(imageDb, `files/${v4()}`);
      uploadBytes(imgRef, img).then(() => {
        setWaiting(false);
        history.push("/gallery");
      });
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImg(file);

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setShow(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      {waiting ? (
        <div class="d-flex justify-content-center align-items-center">
          <Spinner
            animation="grow"
            variant="success"
            role="status"
            style={{ width: "500px", height: "500px", borderWidth: "5px" }}
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div className="homeContainer">
          <input
            type="file"
            onChange={handleImageChange}
            className="form-control my-4"
            name="myImage"
            accept="image/*"
          />
          <button onClick={handleClick} className="btn btn-success my-4">
            Upload
          </button>
          {show && <img src={show} alt="Uploaded" />}
        </div>
      )}
    </>
  );
};

export default ImageUpload;
