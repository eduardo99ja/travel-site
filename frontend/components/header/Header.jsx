import { Header as antHeader } from 'antd'

import TopBar from './TopBar'
import { Row, Col } from 'antd'
import Navbar from './Navbar'

const Header = () => {
  return (
    <antHeader>
      <header>
        <Row className='logo-header'>
          <Col span={10}>
            <TopBar />
          </Col>
          <Col span={14}>
            <Row justify='end'>
              <Navbar />
            </Row>
          </Col>
        </Row>
      </header>
    </antHeader>
  )
}

export default Header
