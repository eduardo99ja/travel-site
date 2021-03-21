import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../components/Layout/Layout'
import { listTravels } from '../redux/actions/travelActions'
//import Product from '../components/product/Product'

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
    
      <main>
        <div className='listado-viajes'>
          <div className='contenedor'>
            <h1>Últimos viajes</h1>
            {/* {loading ? (<h2>loading</h2>) : error ? (<h1>error</h1>):(<h2>{travels.data[0].price}</h2>)} */}
            {loading ? (
              <h1>cargando</h1>
            ) : error ? (
              <h2>error</h2>
            ) : (<h1>hola</h1>
              // <Row justify='center' gutter={[16, 16]}>
              //   {travels.map(travel => (
              //     <Col key={travel._id} xs={24} sm={24} md={8} lg={6} xl={6}>
              //       <Product />
              //     </Col>
              //   ))}
              // </Row>
            )}
          </div>
        </div>
      </main>
    </Layout>
  )
}
