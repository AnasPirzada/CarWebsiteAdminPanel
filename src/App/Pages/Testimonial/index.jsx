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
            <Sidebar activeTab='Testimonial' />
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
                  className='m-3'
                  style={{
                    boxShadow: ' 0px 1px 16px 0px #00000014  ',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '20px 0px 0px 0px',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: '#1985D2',
                      borderRadius: '20px 0px 0px 0px',
                    }}
                  >
                    <div className='d-flex justify-content-between align-items-center'>
                      <p
                        className='py-2  px-4'
                        style={{
                          color: '#FFFFFF',
                          fontSize: '20px',
                          fontWeight: '500',
                        }}
                      >
                        Total Video : 09
                      </p>

                      <button
                        className='d-flex justify-content-center align-items-center'
                        style={{
                          backgroundColor: '#FFFFFF',
                          borderRadius: '8px',
                          border: '0',
                          marginRight: '30px',
                          padding: '6px 12px 6px 12px',
                          color: '#1985D2',
                        }}
                        variant='primary'
                        onClick={handleShow}
                      >
                        <img
                          src='/solar_upload-broken.svg'
                          className='me-2'
                          alt=''
                        />
                        Upload
                      </button>
                    </div>
                  </div>
                  <div className='px-4 py-5 '>
                    <div
                      className='d-flex justify-content-between align-items-center'
                      style={{
                        borderRadius: '8px',
                        padding: '12px, 40px, 12px, 12px',
                        backgroundColor: '#FFFFFF',
                        boxShadow: ' 0px 1px 8px 0px #00000029',
                      }}
                    >
                      <div className='d-flex px-2 py-2'>
                        <div
                          style={{
                            width: '120px',
                            height: '80px',
                            overflow: 'hidden',
                          }}
                        >
                          <img
                            src='/Rectangle 3088.png'
                            alt='userimage'
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                            }}
                          />
                        </div>

                        <div className='ms-5'>
                          <p
                            style={{
                              color: '#030303',
                              fontSize: '20px',
                              fontWeight: '700',
                            }}
                          >
                            ANIA
                          </p>
                          <p
                            className='text-nowrap '
                            style={{
                              color: '#3D3D3D',
                              fontSize: '14px',
                              fontWeight: '400',
                            }}
                          >
                            2 hours ago
                          </p>
                        </div>
                      </div>

                      <div className='px-3'>
                        <img src='/mdi_delete (1).svg' alt='Delicon' />
                      </div>
                    </div>

                    <div
                      className='my-4'
                      style={{
                        width: '100%',
                        border: ' 1px solid #EBEBEB',
                      }}
                    ></div>

                    <div
                      className='d-flex justify-content-between align-items-center'
                      style={{
                        borderRadius: '8px',
                        padding: '12px, 40px, 12px, 12px',
                        backgroundColor: '#FFFFFF',
                        boxShadow: ' 0px 1px 8px 0px #00000029',
                      }}
                    >
                      <div className='d-flex px-2 py-2'>
                        <div
                          style={{
                            width: '120px',
                            height: '80px',
                            overflow: 'hidden',
                          }}
                        >
                          <img
                            src='/Rectangle 3088.png'
                            alt='userimage'
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                            }}
                          />
                        </div>

                        <div className='ms-5'>
                          <p
                            style={{
                              color: '#030303',
                              fontSize: '20px',
                              fontWeight: '700',
                            }}
                          >
                            ANIA
                          </p>
                          <p
                            className='text-nowrap '
                            style={{
                              color: '#3D3D3D',
                              fontSize: '14px',
                              fontWeight: '400',
                            }}
                          >
                            2 hours ago
                          </p>
                        </div>
                      </div>

                      <div className='px-3'>
                        <img src='/mdi_delete (1).svg' alt='Delicon' />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <div>
              <Modal show={show} centered onHide={handleClose}>
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
                  </div>

                  <div className='d-flex flex-column justify-content-center align-items-center'>
                    <img
                      src='/solar_upload.svg'
                      className='my-5'
                      alt='upload icon'
                    />
                    <p
                      className='mb-3 '
                      style={{
                        color: '#3D3D3D',
                        fontWeight: '400',
                        fontSize: '32px',
                      }}
                    >
                      Upload video
                    </p>
                    <Row className='d-flex justify-content-center align-items-center'>
                      <Col lg={12}>
                        <button
                          className='border-0 my-3 w-100 px-5 py-2'
                          style={{
                            color: '#FFFFFF',
                            fontSize: '22px',
                            fontWeight: '400',
                            borderRadius: '16px',
                            backgroundColor: '#1985D2',
                          }}
                        >
                          Browser
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

export default index;
