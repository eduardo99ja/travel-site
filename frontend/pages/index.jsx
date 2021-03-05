
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../components/Layout/Layout'
import { fetchposts } from '../redux/actions/postActions'


export default function Home() {
  const dispatch = useDispatch()
  const { post } = useSelector(state => state.post)
  useEffect(() => {
    dispatch(fetchposts())
  }, [])
  console.log(post)

  return (
    <>
      <Layout>
        <div className='listado-productos'>
          <div className='contenedor'>
            <ul className='bg-white'>
            {post}
            </ul>
          </div>
        </div>
      </Layout>
    </>
  )
}
