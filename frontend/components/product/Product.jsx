import { SettingOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import Link from 'next/link'
const Product = () => {
  const id = 2
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt='example'
          src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
        />
      }
      actions={[
        <Link href='/travels/[id]' as={`/travels/${id}`}>
          <a>Ver más</a>
        </Link>,
      ]}
    >
      <Meta
        title='Viaje 1'
        description='Visita la maravillosa costa de veracruz'
      />
    </Card>
  )
}

export default Product
