import React, { useState } from 'react';
import Photo from './components/Photo';
import './index.css';

const Photos = [
  {
    id: 1,
    title: 'Photo 1',
    source: '/images/photo1.jpg',
    description: 'Description for Photo 1',
  },
  {
    id: 2,
    title: 'Photo 2',
    source: '/images/photo2.jpg',
    description: 'Description for Photo 2',
  },
  {
    id: 3,
    title: 'Photo 3',
    source: '/images/photo3.jpg',
    description: 'Description for Photo 3',
  },
  {
    id: 4,
    title: 'Photo 4',
    source: '/images/photo4.jpg',
    description: 'Description for Photo 4',
  },
  {
    id: 5,
    title: 'Photo 5',
    source: '/images/photo5.jpg',
    description: 'Description for Photo 5',
  },
  {
    id: 6,
    title: 'Photo 6',
    source: '/images/photo6.jpg',
    description: 'Description for Photo 6',
  },
  {
    id: 7,
    title: 'Photo 7',
    source: '/images/photo7.jpg',
    description: 'Description for Photo 7',
  },
  {
    id: 8,
    title: 'Photo 8',
    source: '/images/photo8.jpg',
    description: 'Description for Photo 8',
  },
  {
    id: 9,
    title: 'Photo 9',
    source: '/images/photo9.jpg',
    description: 'Description for Photo 9',
  },
];

const App = () => {
  const [photos, setPhotos] = useState(Photos);

  const handleDelete = (id) => {
    setPhotos((prevPhotos) => prevPhotos.filter((photo) => photo.id !== id));
  };

  const handlePurchase = (id) => {
    // Implement your purchase logic here
    alert(`You have purchased photo with ID ${id}`);
  };

  return (
    <div className="gallery">
      {photos.map((photo) => (
        <Photo
          key={photo.id}
          id={photo.id}
          title={photo.title}
          source={photo.source}
          description={photo.description}
          onDelete={handleDelete}
          onPurchase={handlePurchase}
        />
      ))}
    </div>
  );
};

export default App;
