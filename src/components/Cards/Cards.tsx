import React, { useState } from 'react';
import Card from './Card';
import ImageModal from './ImageModal';
import { ICards, ICardsProps } from '../../services/types';
import { List } from '@mui/material';

const Cards: React.FC<ICardsProps> = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ICards | null>(null);

  const handleOpen = (image: ICards) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <List>
        {images &&
          images.map((image) => (
            <Card key={image.id} image={image} onImageClick={handleOpen} />
          ))}
      </List>
      <ImageModal open={open} image={selectedImage} onClose={handleClose} />
    </div>
  );
};

export default Cards;
