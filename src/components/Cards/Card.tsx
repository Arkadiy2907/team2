import { Favorite } from '@mui/icons-material'
import { IconButton, ListItem, ListItemAvatar, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useImageLoader } from '../../hooks/useImageLoader'
import { ICardProps, ICards, RootState } from '../../services/types'
import Loader from '../Loader/Loader'

const Card: React.FC<ICardProps> = ({ image, onImageClick, logged }) => {
  const isLoading = useImageLoader(image.src)
  const favorites = useSelector(
    (state: RootState) => state.favoritesReducer.favorites,
  )

  const [isImageFavorite, setIsImageFavorite] = useState(false)

  const isFavorite: boolean =
    favorites && favorites.some((favorite: ICards) => favorite.id === image.id)

  useEffect(() => {
    setIsImageFavorite(isFavorite)
  }, [isFavorite])

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
              style={{
                width: '15rem',
                height: '15rem',
                marginRight: '10px',
                cursor: 'pointer',
              }}
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
          {logged && (
            <IconButton
              onClick={() => handleFavoritesIcon()}
              color={isImageFavorite ? 'primary' : 'default'}
            >
              <Favorite />
            </IconButton>
          )}
        </>
      )}
    </ListItem>
  )
}

export default Card
