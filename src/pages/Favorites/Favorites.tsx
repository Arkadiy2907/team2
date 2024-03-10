import { Box } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../../components/Cards/Card'
import ImageModal from '../../components/Cards/ImageModal'
import { ICards, RootState, IRootStateLogged } from '../../services/types'

const Favorites: React.FC = () => {
  const favorites = useSelector(
    (state: RootState) => state.favoritesReducer.favorites,
  )

  const [open, setOpen] = useState(false)
  const [selectedImage, setSelectedImage] = React.useState<ICards | null>(null)
  const logged = useSelector(
    (state: IRootStateLogged) => state.isLogged.isLogged,
  )

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
          <Card
            key={image.id}
            image={image}
            logged={logged}
            onImageClick={handleOpen}
          />
        ))}
      </Box>
      <ImageModal open={open} image={selectedImage} onClose={handleClose} />
    </div>
  )
}

export default Favorites
