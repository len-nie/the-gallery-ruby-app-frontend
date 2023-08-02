import React, { useState } from 'react';
import Photo from './components/Photos';
import './index.css';

import image from "./jpeg/photo1.jpg"
import image1 from "./jpeg/photo2.jpg"
import image2 from "./jpeg/photo3.jpg";
import image3 from "./jpeg/photo4.jpg";
import image4 from "./jpeg/photo5.jpg";
import image5 from "./jpeg/photo6.jpg";
import image6 from "./jpeg/photo7.jpg";
import image7 from "./jpeg/photo8.jpg";
import image8 from "./jpeg/photo9.jpg";


const Photos = [
  {
    id: 1,
    title: 'Photo 1',
    source: image,
  },{
    id: 2,
    title: 'Photo 2',
    source: image1,
  },{
    id: 3,
    title: 'Photo 3',
    source: image2,
  },{
    id: 4,
    title: 'Photo 4',
    source: image3,
  },{
    id: 5,
    title: 'Photo 5',
    source: image4,
  },{
    id: 6,
    title: 'Photo 6',
    source: image5,
  },{
    id: 7,
    title: 'Photo 7',
    source: image6,
  },
  {
    id: 8,
    title: 'Photo 8',
    source: image7,
  },
  {
    id: 9,
    title: 'Photo 9',
    source: image8,
  },
];

const App = () => {

  

  const [photos, setPhotos] = useState(Photos);

  const handleDelete = (id) => {
    setPhotos((prevPhotos) => prevPhotos.filter((photo) => photo.id !== id));
  };

  const handlePurchase = (id) => {
    alert(`You have purchased photo with ID ${id}`);
  };


  
  return (
    <>
    <div className='header-text'>
      <h2>The Gallery</h2>
      <p> welcome to the visionboard for my artisitic vision, The Gallery.</p>
    </div>

    <div className="gallery">
        {photos.map((photo) => (
          <Photo
            key={photo.id}
            id={photo.id}
            source={photo.source}
            onDelete={handleDelete}
            onPurchase={handlePurchase} />

        ))}
      </div></>
  );
};




export default App;
