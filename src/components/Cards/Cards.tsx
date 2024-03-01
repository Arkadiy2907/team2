import React, { useState } from 'react';
import { ICards } from '../../services/types';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Modal,
  Backdrop,
  Fade,
} from '@mui/material';

interface CardProps {
  image: ICards;
  onImageClick: (image: ICards) => void;
}

const Card: React.FC<CardProps> = ({ image, onImageClick }) => {
  return (
    <ListItem button onClick={() => onImageClick(image)}>
      <ListItemAvatar>
        <img
          src={image.src}
          alt={image.title}
          style={{ width: '15rem', height: '15rem' }}
        />
      </ListItemAvatar>
      <ListItemText primary={image.title} />
    </ListItem>
  );
};

interface ModalProps {
  open: boolean;
  image: ICards | null;
  onClose: () => void;
}

const ImageModal: React.FC<ModalProps> = ({ open, image, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Fade in={open}>
        <div>
          {image && (
            <img
              src={image.src}
              alt={image.title}
              style={{
                maxWidth: '80vw',
                maxHeight: '80vh',
                objectFit: 'contain',
                transform: 'scale(1)',
              }}
            />
          )}
        </div>
      </Fade>
    </Modal>
  );
};

interface CardsProps {
  images: ICards[];
}

const Cards: React.FC<CardsProps> = ({ images }) => {
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
