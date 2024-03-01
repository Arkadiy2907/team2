import React from 'react';
import { ICardProps } from '../../services/types';
import { ListItem, ListItemText, ListItemAvatar } from '@mui/material';

const Card: React.FC<ICardProps> = ({ image, onImageClick }) => {
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

export default Card;
