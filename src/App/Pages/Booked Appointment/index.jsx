import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Navbar from '../../Components/Navbar/index.jsx';
import Sidebar from '../../Components/Sidebar/index.jsx';

const index = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
            <Sidebar activeTab='Bookedappointment' />
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
                          fontWeight: '400',
                        }}
                      >
                        <span
                          style={{
                            color: '#1985D2',
                            fontSize: '16px',
                            fontWeight: '700',
                          }}
                        >
                          Mohsin
                        </span>
                        Booked appointment at 03:30 Pm 9,Feb,2023
                      </p>
                      <button
                        className='border-0 '
                        variant='primary'
                        onClick={handleShow}
                        style={{
                          backgroundColor: '#1985D2',
                          color: '#FFFFFF',
                          borderRadius: '8px',
                          padding: '8px 12px 8px 12px',
                        }}
                      >
                        View Detail
                      </button>
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
                          fontWeight: '400',
                        }}
                      >
                        <span
                          style={{
                            color: '#1985D2',
                            fontSize: '16px',
                            fontWeight: '700',
                          }}
                        >
                          Mohsin
                        </span>
                        Booked appointment at 03:30 Pm 9,Feb,2023
                      </p>
                      <button
                        className='border-0 '
                        variant='primary'
                        onClick={handleShow}
                        style={{
                          backgroundColor: '#1985D2',
                          color: '#FFFFFF',
                          borderRadius: '8px',
                          padding: '8px 12px 8px 12px',
                        }}
                      >
                        View Detail
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <Modal show={show} size='lg' centered>
                    <div
                      className='px-4 py-3'
                      style={{
                        backgroundColor: '#FFFFFF',
                        boxShadow: '0px 0px 16px 0px #00000040',
                        borderRadius: '40px',
                      }}
                    >
                      <div className=''>
                        <div className='text-end p-3'>
                          <img
                            src='/carbonclose.svg'
                            onClick={handleClose}
                            style={{ cursor: 'pointer' }}
                            alt=''
                          />
                        </div>
                      </div>

                      <div className='text-center mb-3'>
                        <p
                          style={{
                            color: '#1985D2',
                            fontSize: '32px',
                            fontWeight: '700',
                          }}
                        >
                          Booked Appointment{' '}
                        </p>
                      </div>
                      <div className='d-flex justify-content-start align-items-start'>
                        <div
                          className='d-flex justify-content-center align-items-center '
                          style={{
                            borderRadius: '16px',
                            padding: '12px 16px 12px 16px',
                            backgroundColor: '#FAFAFA',
                            boxShadow: ' 0px 1px 4px 0px #0000001F',
                          }}
                        >
                          <img src='/uiw_date.svg' alt='date' />
                          <p
                            className='ms-3'
                            style={{
                              color: '#1F1F1F',
                              fontSize: '16px',
                              fontWeight: '700',
                            }}
                          >
                            Friday, January 30 2024
                          </p>
                        </div>
                        <div
                          className=' ms-3 d-flex justify-content-center align-items-center '
                          style={{
                            borderRadius: '16px',
                            padding: '12px 16px 12px 16px',
                            backgroundColor: '#FAFAFA',
                            boxShadow: ' 0px 1px 4px 0px #0000001F',
                          }}
                        >
                          <img src='/clarity_alarm.svg' alt='time' />

                          <p
                            className='ms-3'
                            style={{
                              color: '#1F1F1F',
                              fontSize: '16px',
                              fontWeight: '700',
                            }}
                          >
                            at 2 AM clock
                          </p>
                        </div>
                      </div>

                      <div
                        className='mb-4 mt-3 w-50 d-flex justify-content-start align-items-start '
                        style={{
                          borderRadius: '16px',
                          padding: '12px 16px 12px 16px',
                          backgroundColor: '#FAFAFA',
                          boxShadow: ' 0px 1px 4px 0px #0000001F',
                        }}
                      >
                        <img src='/interogation.svg' alt='' />
                        <p
                          className='ms-3 my-0 text-nowrap '
                          style={{
                            color: '#1F1F1F',
                            fontSize: '14px',
                            fontWeight: '400',
                          }}
                        >
                          Transmission:{' '}
                          <span
                            style={{
                              color: '#1F1F1F',
                              fontSize: '14px',
                              fontWeight: '700',
                            }}
                          >
                            Automatic{' '}
                          </span>{' '}
                        </p>
                      </div>
                      <div
                        className='mb-4 mt-3 w-100 d-flex justify-content-start align-items-start '
                        style={{
                          borderRadius: '16px',
                          padding: '12px 16px 12px 16px',
                          backgroundColor: '#FAFAFA',
                          boxShadow: ' 0px 1px 4px 0px #0000001F',
                        }}
                      >
                        <img src='/solar_phone_loc.svg' alt='' />
                        <p
                          className='ms-3 my-0 text-nowrap '
                          style={{
                            color: '#1F1F1F',
                            fontSize: '16px',
                            fontWeight: '400',
                          }}
                        >
                          2972 Westheimer Rd. Santa Ana, Illinois 85486
                        </p>
                      </div>

                      <div>
                        <p
                          style={{
                            color: '#101010',
                            fontSize: '18px',
                            fontWeight: '700',
                          }}
                        >
                          Additional information{' '}
                        </p>
                        <p
                          style={{
                            color: '#101010',
                            fontSize: '16px',
                            fontWeight: '400',
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore Ut
                          enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo con
                        </p>
                      </div>

                      <div
                        className='my-3'
                        style={{
                          border: '1px solid #C0C0C0',
                        }}
                      ></div>
                      <p
                        style={{
                          color: '#101010',
                          fontSize: '16px',
                          fontWeight: '700',
                        }}
                      >
                        Assigned to{' '}
                        <span
                          style={{
                            color: '#1985D2',
                            fontSize: '16px',
                            fontWeight: '700',
                          }}
                        >
                          Mohsin Ali
                        </span>
                      </p>
                    </div>
                  </Modal>
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
