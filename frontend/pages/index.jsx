import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../components/Layout/Layout'
import { listTravels } from '../redux/actions/travelActions'
import { Carousel, Card, Row, Col } from 'antd'
import Product from '../components/product/Product'

export default function Home() {
  const dispatch = useDispatch()
  const travelList = useSelector(state => state.travelList)
  const { loading, error, travels } = travelList
  useEffect(() => {
    dispatch(listTravels())
  }, [dispatch])
  console.log(travels)

  return (
    <Layout>
      <section className='carousel'>
        <Carousel autoplay className='carousel__img'>
          <img
            src='https://res.cloudinary.com/du17vjpcn/image/upload/v1615059800/travels/hero_g9m0po.jpg'
            className='img-hero'
          />
          <img
            src='https://res.cloudinary.com/du17vjpcn/image/upload/v1615059806/travels/nat-8_ke3lbc.jpg'
            className='img-hero'
          />
          <img
            src='https://res.cloudinary.com/du17vjpcn/image/upload/v1615059820/travels/nat-5_l79avp.jpg'
            className='img-hero'
          />
          <img
            src='https://res.cloudinary.com/du17vjpcn/image/upload/v1615059773/travels/nat-2-large_her7gy.jpg'
            className='img-hero'
          />
        </Carousel>
        <div className='site-card-border-less-wrapper carousel__text-box '>
          <Card
            title='VIVE EXPERIENCIAS INOLVIDABLES..'
            style={{ width: 300 }}
            className='carousel__text-box-title'
          >
            <p>
              Consectetur adipisicing elit. Dignissimos fuga eos nihil repellat
              et enim, neque, aliquid delectus quia hic praesentium sit,
              repudiandae pariatur deleniti vero.
            </p>
          </Card>
        </div>
      </section>
      <main>
        <div className='listado-viajes'>
          <div className='contenedor'>
            <h1>Últimos viajes</h1>
            <Row justify='center' gutter={[16, 16]}>
              <Col xs={24} sm={24} md={8} lg={6} xl={6}>
                <Product />
              </Col>
              <Col xs={24} sm={24} md={8} lg={6} xl={6}>
                <Product />
              </Col>
              <Col xs={24} sm={24} md={8} lg={6} xl={6}>
                <Product />
              </Col>
              <Col xs={24} sm={24} md={8} lg={6} xl={6}>
                <Product />
              </Col>
            </Row>
          </div>
        </div>
      </main>
    </Layout>
  )
}
