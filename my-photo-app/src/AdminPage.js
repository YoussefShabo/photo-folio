import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminPage = () => {
  const [photos, setPhotos] = useState([]);
  const [formData, setFormData] = useState({
    /* initial form data structure */
  });
  const [editingPhoto, setEditingPhoto] = useState(null);

  // Fetch photos on component mount
  useEffect(() => {
    fetchPhotos();
  }, []);

  // Function to fetch photos
  const fetchPhotos = async () => {
    try {
      const response = await axios.get("your-api-endpoint/photographs");
      setPhotos(response.data);
    } catch (error) {
      console.error("Error fetching photos", error);
    }
  };

  // Handle form change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit for add/update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingPhoto) {
        // Update photo
        await axios.put(
          `your-api-endpoint/photographs/${editingPhoto.id}`,
          formData
        );
      } else {
        // Add new photo
        await axios.post("your-api-endpoint/photographs", formData);
      }
      setFormData({
        /* reset form data */
      });
      setEditingPhoto(null);
      fetchPhotos();
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  // Set form data for editing
  const editPhoto = (photo) => {
    setFormData({
      /* photo data */
    });
    setEditingPhoto(photo);
  };

  // Handle delete photo
  const deletePhoto = async (photoId) => {
    try {
      await axios.delete(`your-api-endpoint/photographs/${photoId}`);
      fetchPhotos();
    } catch (error) {
      console.error("Error deleting photo", error);
    }
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields here */}
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        {/* Add other fields as needed */}
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Photo List</h2>
        {photos.map((photo) => (
          <div key={photo.id}>
            <p>{photo.title}</p>
            {/* Display other photo details */}
            <button onClick={() => editPhoto(photo)}>Edit</button>
            <button onClick={() => deletePhoto(photo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
