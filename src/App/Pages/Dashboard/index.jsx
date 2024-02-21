import { Col, Container, Row } from 'react-bootstrap';
import Navbar from '../../Components/Navbar/index.jsx';
import Sidebar from '../../Components/Sidebar/index.jsx';

const index = () => {
  return (
    <>
      <Container fluid className='  h-100'>
        <Row>
          <Col
            md={2}
            xs={2}
            className=' text-center p-0'
            style={{ height: '100vh' }}
          >
            <Sidebar activetabe='Dashboard' />
          </Col>
          <Col
            md={10}
            xs={10}
            style={{ height: '100vh', overflowY: 'auto', overflowX: 'hidden' }}
          >
            <Row>
              <Navbar PageName='Dashboard' />
            </Row>

            <Row>
              <Col md={8}>hello</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default index;
