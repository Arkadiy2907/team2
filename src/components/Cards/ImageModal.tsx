import React from 'react';
import { IModalProps } from '../../services/types';
import { Modal, Backdrop, Fade } from '@mui/material';

const ImageModal: React.FC<IModalProps> = ({ open, image, onClose }) => {
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

export default ImageModal;
