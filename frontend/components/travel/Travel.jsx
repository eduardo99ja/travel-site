import Link from 'next/link'
import { Button, makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
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
const Travel = ({ travel }) => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={travel.image[0]}
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
          <Link href='/travels/[id]' as={`/travels/${travel._id}`}>
            <a>Ver</a>
          </Link>
        </Button>
        <Button size='small' color='primary'>
          Comprar
        </Button>
      </CardActions>
    </Card>
  )
}

export default Travel
