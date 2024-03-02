import React from 'react';
import { useImageLoader } from '../../hooks/useImageLoader';
import Loader from '../Loader/Loader';
import { ICardProps } from '../../services/types';
import { ListItem, ListItemAvatar, Typography } from '@mui/material';

const Card: React.FC<ICardProps> = ({ image, onImageClick }) => {
  const isLoading = useImageLoader(image.src);

  return (
    <ListItem button onClick={() => onImageClick(image)}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ListItemAvatar>
            <img
              src={image.src}
              alt={image.title}
              style={{ width: '15rem', height: '15rem', marginRight: '10px' }}
            />
          </ListItemAvatar>
          <Typography variant="body1" style={{ verticalAlign: 'top' }}>
            {image.date}
            <br />
            {image.title}
            <br />
            centroid coordinates:
            <br />
            {image.centroid_coordinates.lat}
            <br />
            {image.centroid_coordinates.lon}
            <br />
            {image.caption}
          </Typography>
        </>
      )}
    </ListItem>
  );
};

export default Card;
