import { Col, Container, Row } from 'react-bootstrap';
import Navbar from '../../Components/Navbar/index.jsx';
import Sidebar from '../../Components/Sidebar/index.jsx';
import MainPage from './Components/MainPage.jsx';
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
            <Sidebar activeTab='Dashboard' />
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
              <Col md={12}>
                <p className='p-3'>
                  <MainPage />
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default index;
