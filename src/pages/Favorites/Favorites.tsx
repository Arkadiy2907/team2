import { Box } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../../components/Cards/Card'
import ImageModal from '../../components/Cards/ImageModal'
import { ICards } from '../../services/types'
import { Photo } from '../../store/Reducers/favoritesReducer'

const Favorites: React.FC = () => {
  const favorites = useSelector(
    (state: any) => state.favoritesReducer.favorites,
  )

  const [open, setOpen] = useState(false)
  const [selectedImage, setSelectedImage] = React.useState<Photo | null>(null)

  const handleOpen = (image: ICards) => {
    setSelectedImage(image)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Избранные фотографии</h2>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {favorites.map((image: ICards) => (
          <Card key={image.id} image={image} onImageClick={handleOpen} />
        ))}
      </Box>
      <ImageModal open={open} image={selectedImage} onClose={handleClose} />
    </div>
  )
}

export default Favorites
