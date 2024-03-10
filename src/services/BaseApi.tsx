import axios from 'axios'
import { getSrc, maxPic } from './Helper'
import { ICards } from './types'

// const key = '3hG9LrKvhAqlZDQ6lO8L1RamMiyMdmg0rySFlVFJ';
const key = 'DEMO_KEY'

export const fetchCards = async (d: string) => {
  const images: ICards[] = []

  try {
    const res = await axios.get(
      `https://api.nasa.gov/EPIC/api/enhanced/date/${d}?api_key=${key}`,
    )
    for (const {
      identifier: id,
      image: title,
      date,
      caption,
      centroid_coordinates,
    } of res.data) {
      images.push({
        id,
        title,
        date,
        caption,
        centroid_coordinates,
        src: getSrc(d, title, key),
        isFavorite: false,
      })
    }
    images.length = maxPic

    return images
  } catch (error) {
    console.error('error=', error)
    throw error
  }
}
