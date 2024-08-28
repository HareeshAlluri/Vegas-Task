// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function SearchPage() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [image, setImage] = useState(null); // Change to store a single image
//   const navigate = useNavigate();

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`https://fakestoreapi.com/products/${searchTerm}`);
      
//       // Assuming response.data is the product data
//       setImage(response.data.image); // Set the image directly
//     } catch (error) {
//       console.error('Error fetching product:', error);
//       setImage(null); // Clear image if an error occurs
//     }
//   };

//   const handleAddCaption = () => {
//     navigate('/add-caption', { state: { image } }); 
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter product ID"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//       <div style={{ marginTop: '20px' }}>
//         {image ? (
//           <div>
//             <img src={image} alt="Product" />
//             <button onClick={handleAddCaption}>Add Caption</button>
//           </div>
//         ) : (
//           <p>No image found for the given ID</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SearchPage;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SearchPage.css'; // Import the CSS file

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${searchTerm}`);
      setImages([response.data.image, response.data.image, response.data.image, response.data.image]);
    } catch (error) {
      console.error('Error fetching product:', error);
      setImages([]);
    }
  };

  const handleAddCaption = (image) => {
    navigate('/add-caption', { state: { image } }); 
  };

  return (
    <div className="search-page">
      <div className="user-info">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter product ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="image-grid">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image} alt="Product" />
              <button onClick={() => handleAddCaption(image)}>Add Caption</button>
            </div>
          ))
        ) : (
          <p>No images found for the given ID</p>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
