import { Header as antHeader } from 'antd'

import TopBar from './TopBar'
import { Row, Col } from 'antd'
import Navbar from './Navbar'

const Header = () => {
  return (
    <antHeader>
      <Row>
        <Col span={10}>
          <TopBar />
        </Col>
        <Col span={14}>
          <Navbar />
        </Col>
      </Row>
    </antHeader>
  )
}

export default Header
