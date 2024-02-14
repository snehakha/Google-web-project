import React, { useEffect, useState } from "react";
import { image } from "../firebase";
import { getDownloadURL, listAll, ref, uploadBytes, deleteObject } from "firebase/storage";
import { v4 } from "uuid";
import './Blog.css'

function UploadImage(){

  const [img, setImg] = useState(null);
  const [imgUrls, setImgUrls] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      const imagesRef = ref(image, "files");
      try {
        const listResult = await listAll(imagesRef);
        const urlsPromises = listResult.items.map(item =>
          getDownloadURL(item)
        );
        const urls = await Promise.all(urlsPromises);
        setImgUrls(urls.reverse());
      } catch (error) {
        console.error("Error fetching images: ", error);
      }
    };
    fetchImages();
  }, []);

  const handleUpload = async () => {
    if (img) {
      const imgRef = ref(image, `files/${v4()}`);
      try {
        await uploadBytes(imgRef, img);
        const url = await getDownloadURL(imgRef);
        setImgUrls(prevUrls => [url, ...prevUrls].slice(0, 10)); 
        setImg(null);
      } catch (error) {
        console.error("Error uploading image: ", error);
      }
    }
  };

  const handleDelete = async (index) => {
    try {
      const imgRef = ref(image, `files/${index}`);
      
      await deleteObject(imgRef);
      
      setImgUrls(prevUrls => prevUrls.filter((_, i) => i !== index));
    } catch (error) {
      console.error("Error deleting image: ", error);
    }
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % imgUrls.length);
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + imgUrls.length) % imgUrls.length);
  };

  return (
    <div className="body-part">
      <input type="file" className="choose-file-btn" onChange={(e) => setImg(e.target.files[0])} />
      <button className="upload-btn" onClick={handleUpload}>Upload</button>
      <br/>
      {imgUrls.length > 0 && (
        <div className="image-container">
          <button className="nav-btn prev-btn" onClick={handlePrev}>←</button>
          <img src={imgUrls[currentIndex]} alt={`Image ${currentIndex + 1}`} className="uploaded-image" height="500px" />
          <button className="nav-btn next-btn" onClick={handleNext}>→</button>
        </div>
      )}
      {imgUrls.length > 0 && (
        <button className="delete-btn" onClick={() => handleDelete(currentIndex)}>Delete</button>
      )}
    </div>

  );
}

export default UploadImage;
