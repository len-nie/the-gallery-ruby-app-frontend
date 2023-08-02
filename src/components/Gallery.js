import React from 'react';

const Gallery = () => {
  const imageNumbers = Array.from({ length: 9 }, (_, index) => index + 1);

  return (
    <div>
      {imageNumbers.map((number) => (
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img key={number} src={`src/jpeg/photo${number}.jpg`} alt={`This is image ${number}`} />
      ))}
    </div>
  );
};

export default Gallery;
