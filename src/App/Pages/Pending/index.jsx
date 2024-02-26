import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navbar from '../../Components/Navbar/index.jsx';
import Sidebar from '../../Components/Sidebar/index.jsx';
import Modal from 'react-bootstrap/Modal';
const Index = () => {
  const notifications = [
    { name: 'Mohsin', id: 1, date: 'Today' },
    { name: 'Ali', id: 2, date: '' },
    { name: 'Anas', id: 3, date: '' },
    { name: 'Ahmed', id: 4, date: 'Yesterday' },
    { name: 'Adnan', id: 5, date: '' },
    { name: 'Zeshan', id: 6, date: '' },
    // Add more data as needed
  ];

  const NotificationComponent = ({ name, date }) => (
    <Row className='px-3' key={name}>
      <Col md={12}>
        <p style={{ color: '#000000', fontSize: '16px', fontWeight: '600' }}>
          {date}
        </p>
        <div
          className='my-2'
          style={{
            backgroundColor: '#FAFAFA',
            borderRadius: '16px',
            padding: '0px 16px',
            boxShadow: ' 0px 1px 4px 0px #0000001F',
          }}
        >
          <div className='d-flex justify-content-between align-items-center p-2'>
            <p
              style={{
                color: '#1985D2',
                fontSize: '14px',
                fontWeight: '700',
              }}
            >
              {name}
            </p>
            <button
              variant='primary'
              onClick={handleShow}
              className='border-0 px-2 py-2'
              style={{
                backgroundColor: '#1985D2',
                color: '#FFFFFF',
                borderRadius: '8px',
              }}
            >
              View More
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container fluid className='h-100'>
        <Row>
          <Col
            md={2}
            xs={2}
            className='text-center p-0'
            style={{ height: '100vh' }}
          >
            <Sidebar activeTab='Pending' />
          </Col>
          <Col
            md={10}
            xs={10}
            style={{ height: '100vh', overflowY: 'auto', overflowX: 'hidden' }}
          >
            <Row>
              <Navbar PageName='Dealer' />
            </Row>
            <div className='py-3'>
              <div
                className='p-0 p-md-4 rounded-4 '
                style={{ boxShadow: '0px 1px 16px 0px #00000014' }}
              >
                {notifications.map((notification, index) => (
                  <NotificationComponent
                    key={index}
                    name={notification.name}
                    date={notification.date}
                  />
                ))}
              </div>

              <Modal show={show}>
                <div
                  className='p-3'
                  style={{
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0px 0px 16px 0px #00000040',
                    borderRadius: '40px',
                  }}
                >
                  <div className='px-3'>
                    <div className='text-end p-3'>
                      <img
                        src='/carbonclose.svg'
                        onClick={handleClose}
                        style={{ cursor: 'pointer' }}
                        alt=''
                      />
                    </div>
                    <Row className='p-4'>
                      <Col lg={6} className='py-3'>
                        <div className='d-flex justify-content-start align-items-start'>
                          <img src='/Usericon.svg' alt='' />
                          <div className='d-flex flex-column ms-2 justify-content-start align-items-start'>
                            <p
                              style={{
                                color: '#41ACF9',
                                fontSize: '18px',
                                fontWeight: '400',
                              }}
                            >
                              Dealership name
                            </p>
                            <p
                              style={{
                                color: '#1F1F1F',
                                fontSize: '16px',
                                fontWeight: '500',
                              }}
                            >
                              Mohsin
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6} className='py-3'>
                        <div className='d-flex justify-content-start align-items-start'>
                          <img src='/f7_number.svg' alt='' />
                          <div className='d-flex flex-column ms-2 justify-content-start align-items-start'>
                            <p
                              style={{
                                color: '#41ACF9',
                                fontSize: '18px',
                                fontWeight: '400',
                              }}
                            >
                              Dealer number
                            </p>
                            <p
                              style={{
                                color: '#1F1F1F',
                                fontSize: '16px',
                                fontWeight: '500',
                              }}
                            >
                              090078601
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6} className='py-3'>
                        <div className='d-flex justify-content-start align-items-start'>
                          <img src='/solar_phone_loc.svg' alt='' />
                          <div className='d-flex flex-column ms-2 justify-content-start align-items-start'>
                            <p
                              style={{
                                color: '#41ACF9',
                                fontSize: '18px',
                                fontWeight: '400',
                              }}
                            >
                              City
                            </p>
                            <p
                              style={{
                                color: '#1F1F1F',
                                fontSize: '16px',
                                fontWeight: '500',
                              }}
                            >
                              Lahore
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6} className='py-3'>
                        <div className='d-flex justify-content-start align-items-start'>
                          <img src='/solar_phone_loc.svg' alt='' />
                          <div className='d-flex flex-column ms-2 justify-content-start align-items-start'>
                            <p
                              className='text-nowrap '
                              style={{
                                color: '#41ACF9',
                                fontSize: '18px',
                                fontWeight: '400',
                              }}
                            >
                              Postal code
                            </p>
                            <p
                              style={{
                                color: '#1F1F1F',
                                fontSize: '16px',
                                fontWeight: '500',
                              }}
                            >
                              5400
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6} className='py-3'>
                        <div className='d-flex justify-content-start align-items-start'>
                          <img src='/fluent_mail.svg' alt='' />
                          <div className='d-flex flex-column ms-2 justify-content-start align-items-start'>
                            <p
                              style={{
                                color: '#41ACF9',
                                fontSize: '18px',
                                fontWeight: '400',
                              }}
                            >
                              Email
                            </p>
                            <p
                              style={{
                                color: '#1F1F1F',
                                fontSize: '16px',
                                fontWeight: '500',
                              }}
                            >
                              Example@gmail.com
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6} className='py-3'>
                        <div className='d-flex justify-content-start align-items-start'>
                          <img src='/solar_phone.svg' alt='' />
                          <div className='d-flex flex-column ms-2 justify-content-start align-items-start'>
                            <p
                              className='text-nowrap '
                              style={{
                                color: '#41ACF9',
                                fontSize: '18px',
                                fontWeight: '400',
                              }}
                            >
                              Phone number
                            </p>
                            <p
                              style={{
                                color: '#1F1F1F',
                                fontSize: '16px',
                                fontWeight: '500',
                              }}
                            >
                              090078601
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <Row className='text-center mt-4 mb-2'>
                      <Col lg={6}>
                        <button
                          className=' w-100 py-2'
                          style={{
                            backgroundColor: ' #FFFFFF   ',
                            color: '  #1985D2',
                            borderRadius: '12px ',
                            border: '1px solid #1985D2',
                            padding: '10px, 40px, 10px, 40px',
                          }}
                        >
                          Denny{' '}
                        </button>
                      </Col>
                      <Col lg={6}>
                        <button
                          className='border-0 w-100 py-2'
                          style={{
                            backgroundColor: '#1985D2',
                            color: '#FFFFFF',
                            borderRadius: '12px ',
                            padding: '10px, 40px, 10px, 40px',
                          }}
                        >
                          Approve{' '}
                        </button>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Modal>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
