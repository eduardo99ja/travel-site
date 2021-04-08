import { useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../components/Layout/Layout'
import MainFeaturedPost from '../components/MainFeaturedPost'
import { listTravels } from '../redux/actions/travelActions'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Travel from '../components/travel/Travel'
const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}))

export default function Home() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const travelList = useSelector(state => state.travelList)
  const { loading, error, travels } = travelList
  useEffect(() => {
    dispatch(listTravels())
  }, [dispatch])
  console.log(travels)

  return (
    <Layout>
      <MainFeaturedPost post={mainFeaturedPost} />
      <Container className='listado-viajes' disableGutters>
        <section>
          <Typography
            component='h1'
            variant='h2'
            align='center'
            color='textPrimary'
          >
            Encuentra las mejores ofertas en Viajes Travleer
          </Typography>
          <Typography
            variant='h5'
            align='center'
            color='textSecondary'
            paragraph
            className='mt'
          >
            Tus vacaciones al mejor precio,
            <strong>
              promociones en vuelos, hoteles, paquetes, cruceros
            </strong>{' '}
            a los principales destinos turísticos de México y el mundo. Paga tu
            viaje hasta en 18 meses sin intereses ¡Ofertas que te hacen viajar!
          </Typography>
        </section>
        <main>
          <Container maxWidth='md' className={classes.cardGrid}>
            {/* {loading ? (<h2>loading</h2>) : error ? (<h1>error</h1>):(<h2>{travels.data[0].price}</h2>)} */}
            {loading ? (
              <h1>cargando</h1>
            ) : error ? (
              <h2>error</h2>
            ) : (
              <Grid container spacing={4} alignItems='center'>
                {travels.map(travel => (
                  <Grid item key={travel._id} xs={12} sm={6} md={4}>
                    <Travel travel={travel} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Container>
        </main>
      </Container>
    </Layout>
  )
}
const mainFeaturedPost = {
  title: 'Toma el viaje de tus sueños con nosotros',
  description:
    'Contamos con muchos destinos, nacionales e internacionales, en los mejores hotesles, restaurantes, etc. Con los mejores precios del mercado',
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Ver últimos',
}
