import { Dropdown, Menu } from 'antd'
import Link from 'next/link'
import { Badge } from 'antd'
import { Avatar } from 'antd'
import { useState } from 'react'
import { HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons'

const Navbar = () => {
  const [user, setUser] = useState('Ej')
  return (
    <Menu mode='horizontal' defaultSelectedKeys={['']}>
      <Menu.Item key='1' icon={<HomeOutlined />}>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </Menu.Item>
      <Menu.Item key='2' icon={<ShoppingCartOutlined />}>
        <Link href='/cart'>
          <Badge size='small' count={9} className='badge-s'>
            <a>Carrito</a>
          </Badge>
        </Link>
      </Menu.Item>
      <Menu.Item key='3'>
        <Link href='login'>
          {user ? (
            <Dropdown overlay={menu}>
              <a
                className='ant-dropdown-link'
                onClick={e => e.preventDefault()}
              >
                <Avatar
                  style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
                >
                  {user.toUpperCase()}
                </Avatar>
              </a>
            </Dropdown>
          ) : (
            <a>Login</a>
          )}
        </Link>
      </Menu.Item>
    </Menu>
  )
}
const menu = (
  <Menu>
    <Menu.Item key='0'>
      <Link href='profile'>
        <a>Mi perfil</a>
      </Link>
    </Menu.Item>
    <Menu.Item key='1'>
      <a>Cerrar sesión</a>
    </Menu.Item>
  </Menu>
)

export default Navbar
