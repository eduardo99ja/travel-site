// TODO: Fix fixed right container
// TODO: Switch to components
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Carousel from 'react-material-ui-carousel'
import {
  Paper,
  Button,
  Typography,
  Grid,
  Container,
  Box,
  Divider,
} from '@material-ui/core'
import { Rating } from '@material-ui/lab'
// Icons imports
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive'
import AirlineSeatFlatIcon from '@material-ui/icons/AirlineSeatFlat'
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus'
import LocalBarIcon from '@material-ui/icons/LocalBar'

import { listTravelDetails } from '../../redux/actions/travelActions'
import Layout from '../../components/Layout/Layout'

const Travel = () => {
  const { query } = useRouter()
  const dispatch = useDispatch()

  const [value, setValue] = useState(2)

  const travelDetails = useSelector(state => state.travelDetails)
  const { loading, error, travel } = travelDetails

  useEffect(() => {
    if (query.id) {
      dispatch(listTravelDetails(query.id))
    }
  }, [query, dispatch])

  return (
    <Layout>
      <Container maxWidth='lg' className='container_details'>
        <Grid container spacing={4}>
          {loading ? (
            <h1>Cargando</h1>
          ) : error ? (
            <h1>Error</h1>
          ) : (
            <>
              <Grid item md={7} sm={12} xs={12}>
                <Carousel>
                  {travel.image &&
                    travel.image.map((img, i) => (
                      <Item item={img} key={i} travel={travel} />
                    ))}
                </Carousel>
              </Grid>
              <Grid item md={5} sm={12} xs={12}>
                <Paper>
                  <Box py={2} textAlign='right'>
                    <Typography
                      component='h2'
                      variant='h3'
                      align='center'
                      color='textPrimary'
                    >
                      {travel.name}
                    </Typography>
                  </Box>
                  <Box component='p' fontSize={14} m={0} textAlign='center'>
                    Cancún, México
                  </Box>
                  <Box component='p' fontSize={16} m={1} textAlign='center'>
                    4 noches por $1599
                  </Box>
                  <Box
                    component='fieldset'
                    my={3}
                    borderColor='transparent'
                    textAlign='center'
                  >
                    <Rating
                      name='read-only'
                      value={value}
                      readOnly
                      size='large'
                    />
                  </Box>
                </Paper>
              </Grid>
            </>
          )}
        </Grid>
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Typography
              component='h2'
              variant='h4'
              align='center'
              color='textPrimary'
              className='mt'
            >
              Vacation Highlights
            </Typography>
            <Box my={2} fontSize={18} fontWeight={300}>
              <ul>
                <li>
                  <AirplanemodeActiveIcon className='li-icon' />
                  Round-trip airfare from Chicago, IL
                </li>
                <li>
                  <AirlineSeatFlatIcon className='li-icon' />4 night
                  accommodations
                </li>
                <li>
                  <DirectionsBusIcon className='li-icon' />
                  Hotel transfers
                </li>
                <li>
                  <LocalBarIcon className='li-icon' />
                  All Inclusive
                </li>
              </ul>
            </Box>
            <Divider variant='middle' />
            <Typography
              component='h2'
              variant='h4'
              align='center'
              color='textPrimary'
              className='mt'
            >
              Special Notes
            </Typography>
            <Box my={2} fontSize={18} fontWeight={300}>
              <ul>
                <li className='mt'>
                  Save up to 50% PLUS additional savings up to $300
                </li>
                <li className='mt'>Exclusive My Time benefits</li>
                <li className='mt'>
                  Peace of Mind: flexible cancellation and/or change policies
                </li>
                <li className='mt'>
                  On-site COVID-19 testing available and free of charge for
                  arrivals to April 30th, 2021
                </li>
              </ul>
            </Box>
            <Divider variant='middle' />
            <Typography
              component='h2'
              variant='h4'
              align='center'
              color='textPrimary'
              className='mt'
            >
              Other Departure Cities
            </Typography>
            <Box>
              <Grid item lg={6} md={6} sm={6}>
                <Box display='flex' justifyContent='space-between' p={0} m={1}>
                  <Box p={1} fontWeight={500} fontSize={18}>
                    Boston, MA
                  </Box>
                  <Box p={1} fontSize={18} fontWeight={300}>
                    from $1115
                  </Box>
                </Box>
                <Box display='flex' justifyContent='space-between' p={0} m={1}>
                  <Box p={1} fontWeight={500} fontSize={18}>
                    Miami, FL
                  </Box>
                  <Box p={1} fontSize={18} fontWeight={300}>
                    from $1115
                  </Box>
                </Box>
                <Box display='flex' justifyContent='space-between' p={0} m={1}>
                  <Box p={1} fontWeight={500} fontSize={18}>
                    Chicago, IL
                  </Box>
                  <Box p={1} fontSize={18} fontWeight={300}>
                    from $1115
                  </Box>
                </Box>
              </Grid>
            </Box>

            <Divider variant='middle' />
            <Typography
              component='h2'
              variant='h4'
              align='center'
              color='textPrimary'
              className='mt'
            >
              Finest Playa Mujeres
            </Typography>
            <Box textAlign='justify' fontSize={16} fontWeight={300}>
              <p>
                All-Inclusive luxury for guests all ages, from romantic couples
                to friends and family reunions. Finest Playa Mujeres is a modern
                and sophisticated beachfront resort in the Mexican Caribbean
                with dedicated areas for adults only and families, with the
                renowned service by Excellence Group.Featuring 450 suites,
                including oceanfront views, swim ups, private pools, roof-top
                terraces with plunge pools and family suites. Guests will enjoy
                9 gourmet dining restaurants, 17 bars, 10 swimming pools,
                playground and sport facilities, a world-class Spa and wellness
                center with hydrotherapy circuit. Excellence and Finest Club
                areas provide further luxury and service to the most demanding
                guests.
              </p>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}
function Item(props) {
  return (
    <Paper>
      <img src={props.item} alt={props.travel.name} />
    </Paper>
  )
}

export default Travel
