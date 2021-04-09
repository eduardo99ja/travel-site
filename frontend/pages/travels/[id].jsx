import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Container from '@material-ui/core/Container'
import Image from 'material-ui-image'
import { listTravelDetails } from '../../redux/actions/travelActions'
import Layout from '../../components/Layout/Layout'
import Grid from '@material-ui/core/Grid'

const Travel = () => {
  const { query } = useRouter()
  const dispatch = useDispatch()
  console.log(query)

  const travelDetails = useSelector(state => state.travelDetails)
  const { loading, error, travel } = travelDetails

  useEffect(() => {
    if (query.id) {
      dispatch(listTravelDetails(query.id))
    }
  }, [query, dispatch])

  return (
    <Layout>
      <Container maxWidth='md' className='container_details'>
        <Grid container spacing={2}>
          {loading ? (
            <h1>Cargando</h1>
          ) : error ? (
            <h1>Error</h1>
          ) : (
            <>
              <Grid item md={6} sm={12} xs={12}>
                <Image src={travel.image} />
              </Grid>
              <Grid item md={3} sm={6}>
                Hola2
              </Grid>
              <Grid item md={3} sm={6}>
                Hola3
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </Layout>
  )
}

export default Travel
