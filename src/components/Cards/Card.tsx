import { Favorite } from '@mui/icons-material'
import { IconButton, ListItem, ListItemAvatar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useImageLoader } from '../../hooks/useImageLoader'
import { ICardProps } from '../../services/types'
import Loader from '../Loader/Loader'

const Card: React.FC<ICardProps> = ({ image, onImageClick }) => {
  const isLoading = useImageLoader(image.src)
  const favorites = useSelector(
    (state: any) => state.favoritesReducer.favorites,
  )
  const isFavorite = favorites.some((favorite: any) => favorite.id === image.id)

  const dispatch = useDispatch()

  const handleFavoritesIcon = () => {
    if (isFavorite) {
      dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: image })
    } else {
      dispatch({ type: 'ADD_TO_FAVORITES', payload: image })
    }
  }

  return (
    <ListItem disablePadding>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ListItemAvatar onClick={() => onImageClick(image)}>
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
          <IconButton
            onClick={() => handleFavoritesIcon()}
            color={isFavorite ? 'primary' : 'default'}
          >
            <Favorite />
          </IconButton>
        </>
      )}
    </ListItem>
  )
}

export default Card
