import React from 'react'
import { wrap } from './styles'
import { Container, Typography } from '@mui/material'

const Intro = () => {
  return (
    <Container sx={{ ...wrap }}>
      <Typography variant="h5" component="h1">
        The Observer App provides information on the daily imagery collected by
        DSCOVR's Earth Polychromatic Imaging Camera (EPIC) instrument.
      </Typography>
      <br />
      <Typography component="p">
        Uniquely positioned at the Earth-Sun Lagrange point, EPIC provides full
        disc imagery of the Earth and captures unique perspectives of certain
        astronomical events such as lunar transits using a 2048x2048 pixel CCD
        (Charge Coupled Device) detector coupled to a 30-cm aperture Cassegrain
        telescope. Image metadata and key information are provided by the JSON
        API and can be requested by date and for the most recent available date.
      </Typography>
    </Container>
  )
}

export default Intro
