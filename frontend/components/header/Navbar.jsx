import { Menu } from 'antd'
import Link from 'next/link'
import { Badge } from 'antd'

const Navbar = () => {
  return (
    <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
      <Menu.Item key='1'>
        <Link href='/cart'>
          <Badge size='small' count={9} className='badge-s'>
            <a>cart</a>
          </Badge>
        </Link>
      </Menu.Item>
      <Menu.Item key='2'>
        <Link href='login'>
          <a>login</a>
        </Link>
      </Menu.Item>
    </Menu>
  )
}

export default Navbar
