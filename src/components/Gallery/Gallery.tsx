import { Card, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

interface Photo {
  identifier: string
  image: string
  caption: string
}

const API_KEY = 'DEMO_KEY'
const API_URL = `https://api.nasa.gov/EPIC/api/natural/all?api_key=${API_KEY}&count=16`

const Gallery: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([])

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(API_URL)
        const data = await response.json()
        setPhotos(data)
      } catch (error) {
        console.error('Error fetching photos:', error)
      }
    }

    fetchPhotos()
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        overflowY: 'hidden',
        paddingTop: 200,
      }}
    >
      <Grid container spacing={8}>
        {photos.map((photo, index) => (
          <Grid item xs sm md lg={3} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={`https://api.nasa.gov/EPIC/archive/natural/${photo.identifier}/png/${photo.image}.png?api_key=${API_KEY}`}
                alt={photo.caption}
              />
              <Typography variant="caption">{photo.caption}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Gallery
