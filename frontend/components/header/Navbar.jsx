import { Menu } from 'antd'
import Link from 'next/link'
import { Badge } from 'antd'
import { Avatar } from 'antd'
import { useState } from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons'

const Navbar = () => {
  const [user, setUser] = useState('Ej')
  return (
    <Menu mode='horizontal' defaultSelectedKeys={['1']}>
      <Menu.Item key='1' icon={<ShoppingCartOutlined />}>
        <Link href='/cart'>
          <Badge size='small' count={9} className='badge-s'>
            <a>Carrito</a>
          </Badge>
        </Link>
      </Menu.Item>
      <Menu.Item key='2'>
        <Link href='login'>
          {user ? (
            <a>
              <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                {user.toUpperCase()}
              </Avatar>
            </a>
          ) : (
            <a>Login</a>
          )}
        </Link>
      </Menu.Item>
    </Menu>
  )
}

export default Navbar
