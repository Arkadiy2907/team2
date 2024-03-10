import { Box } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ICards, ICardsProps, IRootStateLogged } from '../../services/types'
import Card from './Card'
import ImageModal from './ImageModal'

const Cards: React.FC<ICardsProps> = ({ images }) => {
  const [open, setOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<ICards | null>(null)
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
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {images &&
        images.map(image => (
          <Card
            key={image.id}
            image={image}
            logged={logged}
            onImageClick={handleOpen}
          />
        ))}
      <ImageModal open={open} image={selectedImage} onClose={handleClose} />
    </Box>
  )
}

export default Cards
