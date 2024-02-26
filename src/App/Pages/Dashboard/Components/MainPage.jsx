import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Chart from './MainChart.jsx';
import './MainPage.css';
export const MainPage = () => {
  return (
    <div>
      <div className='shadow rounded-3 '>
        <Row>
          <Col lg={3} xs={12} className='border-right-dashed my-4'>
            <div className='d-flex justify-content-center align-items-center'>
              <img src='/Vistores.svg' alt='' />
              <p
                className='ms-2'
                style={{
                  color: '#101010',
                  fontSize: '20px',
                  fontWeight: '700',
                }}
              >
                Today Visitor
              </p>
            </div>
            <div className='text-center'>
              <p
                className='my-2'
                style={{
                  color: '#1985D2',
                  fontSize: '18px',
                  fontWeight: '500',
                }}
              >
                190
              </p>
            </div>
          </Col>
          <Col lg={3} xs={12} className='border-right-dashed my-4'>
            <div className='d-flex justify-content-center align-items-center'>
              <img src='/VisitorClick.svg' alt='' />
              <p
                className='ms-2'
                style={{
                  color: '#101010',
                  fontSize: '20px',
                  fontWeight: '700',
                }}
              >
                Visitor Click
              </p>
            </div>
            <div className='text-center'>
              <p
                className='my-2'
                style={{
                  color: '#1985D2',
                  fontSize: '18px',
                  fontWeight: '500',
                }}
              >
                48
              </p>
            </div>
          </Col>
          <Col lg={3} xs={12} className='border-right-dashed my-4'>
            <div className='d-flex justify-content-center align-items-center'>
              <img src='/NewCustomer.svg' alt='' />
              <p
                className='ms-2'
                style={{
                  color: '#101010',
                  fontSize: '20px',
                  fontWeight: '700',
                }}
              >
                New Customer
              </p>
            </div>
            <div className='text-center'>
              <p
                className='my-2'
                style={{
                  color: '#1985D2',
                  fontSize: '18px',
                  fontWeight: '500',
                }}
              >
                249
              </p>
            </div>
          </Col>
          <Col lg={3} xs={12} className='my-4'>
            <div className='d-flex justify-content-center align-items-center'>
              <img src='/TotalDealer.svg' alt='' />
              <p
                className='ms-2'
                style={{
                  color: '#101010',
                  fontSize: '20px',
                  fontWeight: '700',
                }}
              >
                Total Dealer
              </p>
            </div>
            <div className='text-center'>
              <p
                className='my-2'
                style={{
                  color: '#1985D2',
                  fontSize: '18px',
                  fontWeight: '500',
                }}
              >
                300
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <Row className='my-4'>
        <Col lg={8} className='shadow rounded-3 p-3'>
          <Chart />
        </Col>
        <Col lg={4} className='shadow rounded-3 '></Col>
      </Row>
    </div>
  );
};
export default MainPage;
