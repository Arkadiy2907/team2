import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs'
import { minDate } from '../../services/Helper'
import Intro from '../../components/Intro/Intro'
import Cards from '../../components/Cards/Cards'
import ServerError from '../../components/Server-error/ServerError'
import { isSearchAction } from '../../store/Actions/Action'
import { Container, Box, Typography, Button } from '@mui/material'
import { fetchCards } from '../../services/BaseApi'
import { IRootStateSearch, ICards } from '../../services/types'
import { wrap, wrapForm } from './styles'

export default function Search() {
  const dispatch = useDispatch()
  const search = useSelector(
    (state: IRootStateSearch) => state.isSearch.isSearch,
  )
  const [isLoading, setIsLoading] = React.useState(false)
  const [selectedDate, setSelectedDate] = React.useState<dayjs.Dayjs | null>(
    null,
  )
  const [isSearch, setIsSearch] = React.useState(search)
  const [cards, setCards] = React.useState<ICards[] | null>(null)
  const [isServerError, setIsServerError] = React.useState(false)

  const handleDateChange = (value: dayjs.Dayjs | null) => {
    setSelectedDate(value)
  }

  React.useEffect(() => {
    setIsSearch(search)

    if (!search) {
      setSelectedDate(null)
    }
  }, [search])

  const handleSearch = async () => {
    setIsServerError(false)
    if (selectedDate) {
      setIsLoading(true)
      setIsSearch(true)
      dispatch(isSearchAction(true))
      try {
        const cardsData = await fetchCards(selectedDate.format('YYYY-MM-DD'))
        setCards(cardsData || [])
      } catch (error) {
        setIsServerError(true)
        console.error('error==', error)
      } finally {
        setIsLoading(false)
      }
    } else {
      console.log('Please select a date')
    }
  }

  return (
    <Container
      sx={{
        '@media (min-width: 600px)': {
          paddingLeft: 0,
          paddingRight: 0,
        },
        ...wrap,
      }}
    >
      <Box sx={{ ...wrapForm }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="search by date"
            format="YYYY/MM/DD"
            value={selectedDate}
            minDate={dayjs(minDate)}
            maxDate={dayjs()}
            onChange={handleDateChange}
          />
        </LocalizationProvider>
        <Button
          variant="contained"
          onClick={handleSearch}
          sx={{ marginLeft: '10px' }}
          disabled={!selectedDate}
        >
          Search
        </Button>
      </Box>
      {isSearch ? (
        <Box>
          {isLoading ? (
            <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>
              Loading...
            </Typography>
          ) : (
            <>
              {cards && cards.some(card => Object.keys(card).length > 0) ? (
                <Cards images={cards || []} />
              ) : (
                <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>
                  no data
                </Typography>
              )}
            </>
          )}
        </Box>
      ) : (
        <Box
          display="flex"
          height="100%"
          justifyContent="center"
          alignItems="center"
          marginTop="100px"
          width="80%"
          textAlign="center"
        >
          <Intro />
        </Box>
      )}
      {isServerError && <ServerError />}
    </Container>
  )
}
