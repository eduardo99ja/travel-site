import { DatePicker } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
      <h2>Hola</h2>
      <DatePicker />
    </>
  )
}
