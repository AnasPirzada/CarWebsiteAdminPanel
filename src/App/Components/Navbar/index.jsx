import React from 'react';

export const index = ({ PageName }) => {
  return (
    <div>
      <div
        className='px-3'
        style={{
          backgroundColor: '#1985D2',
          borderRadius: '0px 0px 0px 40px',
          width: '100%',
          height: '140px',
        }}
      >
        <div
          className='d-flex justify-content-between align-items-center'
          style={{ paddingTop: '20px', marginLeft: '80px' }}
        >
          <div>
            <div className=' w-100 bg-white rounded-3'>
              <img src='/Search' alt='' />
              <input
                type='search'
                className='w-100 border-0  '
                placeholder='Search'
              />
            </div>

            <p
              className='my-3'
              style={{
                fontWeight: '700',
                fontSize: '32px',
                color: '#FFFFFF',
              }}
            >
              {PageName}
            </p>
          </div>
          <div className='d-flex justify-content-between flex-column  align-items-end'>
            <div className='d-flex justify-content-between align-items-center'>
              <div>
                <img src='/Frame 1261153402.svg' alt='' />
              </div>

              <div
                className='d-flex justify-content-center align-items-center'
                style={{
                  width: '56px',
                  height: '56px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '50px',
                }}
              >
                <p
                  style={{
                    color: '#1985D2',
                    fontSize: '16px',
                    fontWeight: '700',
                  }}
                >
                  S.A
                </p>
              </div>
            </div>
            <div className='text-end'>
              <div className='my-1 d-flex justify-content-center align-items-center'>
                <p
                  style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#FFFFFF',
                  }}
                >
                  Super Admin
                </p>
              </div>
            </div>
            <div className='text-end'>
              <div
                style={{
                  backgroundColor: '#F83434',
                  color: '#FFFFFF',
                  padding: '2px 12px 4px 12px',
                  width: '63px',
                  height: '21px',
                  borderRadius: '32px',
                }}
              >
                <p
                  style={{
                    fontSize: '12px',
                    fontWeight: '400',
                    color: '#FFFFFF',
                  }}
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default index;
