import React, { useState } from "react";
import axios from "axios";

const ImageProcessing = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState("");

  const handleUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  const processImage = async () => {
    try {
      const response = await axios.post(
        "https://vision.googleapis.com/v1/images:annotate",
        {
          requests: [
            {
              image: {
                content: image.split(",")[1],
              },
              features: [
                { type: "LABEL_DETECTION", maxResults: 5 },
              ],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer AIzaSyBr_tKy7A9IDboDcepukE1kRs0OmR_SAiQ`,
          },
        }
      );
      setResult(JSON.stringify(response.data.responses[0], null, 2));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} />
      {image && <img src={image} alt="Uploaded" />}
      <button onClick={processImage}>Process Image</button>
      {result && <pre>{result}</pre>}
    </div>
  );
};

export default ImageProcessing;
