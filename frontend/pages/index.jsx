import { Button, makeStyles } from '@material-ui/core'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../components/Layout/Layout'
import MainFeaturedPost from '../components/MainFeaturedPost'
import { listTravels } from '../redux/actions/travelActions'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import CameraIcon from '@material-ui/icons/PhotoCamera'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
//import Product from '../components/product/Product'
const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
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
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={travel.image}
                        title={travel.name}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant='h5' component='h2'>
                          {travel.name}
                        </Typography>
                        <Typography>{travel.description}</Typography>
                      </CardContent>
                      <CardActions>
                        <Button size='small' color='primary'>
                          Ver
                        </Button>
                        <Button size='small' color='primary'>
                          Comprar
                        </Button>
                      </CardActions>
                    </Card>
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
