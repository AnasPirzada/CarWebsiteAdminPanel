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
            <Sidebar activeTab='Notification' />
          </Col>
          <Col
            md={10}
            xs={10}
            style={{ height: '100vh', overflowY: 'auto', overflowX: 'hidden' }}
          >
            <Row>
              <Navbar PageName='Car post ' />
            </Row>

            <Row>
              <Col md={12}>
                <div
                  className='p-0 p-md-3 m-4 rounded-4 '
                  style={{
                    boxShadow: '0px 1px 16px 0px #00000014',
                  }}
                >
                  <p
                    style={{
                      color: '#000000',
                      fontSize: '16px',
                      fontWeight: '600',
                    }}
                  >
                    Today
                  </p>
                  <div
                    className='my-2 py-2'
                    style={{
                      backgroundColor: '#FAFAFA',
                      borderRadius: '14px',
                      boxShadow: ' 0px 1px 4px 0px #0000001F',
                    }}
                  >
                    <div className='d-flex justify-content-between align-items-center p-2'>
                      <p
                        style={{
                          color: '#101010',
                          fontSize: '14px',
                          fontWeight: '600',
                        }}
                      >
                        New Car Added
                      </p>
                      <p
                        style={{
                          color: '#101010',
                          fontSize: '14px',
                          fontWeight: '400',
                        }}
                      >
                        2:30 Pm
                      </p>
                    </div>
                  </div>
                  <div
                    className='my-2 py-2'
                    style={{
                      backgroundColor: '#FAFAFA',
                      borderRadius: '14px',
                      boxShadow: ' 0px 1px 4px 0px #0000001F',
                    }}
                  >
                    <div className='d-flex justify-content-between align-items-center p-2'>
                      <p
                        style={{
                          color: '#101010',
                          fontSize: '14px',
                          fontWeight: '600',
                        }}
                      >
                        You got a new message from{' '}
                        <span
                          style={{
                            color: '#1985D2',
                            fontSize: '14px',
                            fontWeight: '700',
                          }}
                        >
                          Mohsin{' '}
                        </span>
                      </p>
                      <p
                        style={{
                          color: '#101010',
                          fontSize: '14px',
                          fontWeight: '400',
                        }}
                      >
                        2:30 Pm
                      </p>
                    </div>
                  </div>
                  <div
                    className='my-3 py-1'
                    style={{
                      backgroundColor: '#FAFAFA',
                      borderRadius: '14px',
                      boxShadow: ' 0px 1px 4px 0px #0000001F',
                    }}
                  >
                    <div className='d-flex  justify-content-between align-items-center p-2'>
                      <p
                        className='d-flex flex-column '
                        style={{
                          color: '#101010',
                          fontSize: '14px',
                          fontWeight: '600',
                        }}
                      >
                        You got a new message.
                        <span
                          style={{
                            color: '#1985D2',
                            fontSize: '14px',
                            fontWeight: '700',
                          }}
                        >
                          From Mohsin
                        </span>
                      </p>
                      <p
                        style={{
                          color: '#101010',
                          fontSize: '14px',
                          fontWeight: '400',
                        }}
                      >
                        2:30 Pm
                      </p>
                    </div>
                  </div>
                  <p
                    style={{
                      color: '#000000',
                      fontSize: '16px',
                      fontWeight: '600',
                    }}
                  >
                    Yesterday
                  </p>
                  <div
                    className='mt-2 mb-5 py-2'
                    style={{
                      backgroundColor: '#FAFAFA',
                      borderRadius: '14px',
                      boxShadow: ' 0px 1px 4px 0px #0000001F',
                    }}
                  >
                    <div className='d-flex justify-content-between align-items-center p-2'>
                      <p
                        style={{
                          color: '#101010',
                          fontSize: '14px',
                          fontWeight: '600',
                        }}
                      >
                        New Car Added
                      </p>
                      <p
                        style={{
                          color: '#101010',
                          fontSize: '14px',
                          fontWeight: '400',
                        }}
                      >
                        2:30 Pm
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default index;
