// import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const index = props => {
  const [activeTab, setActiveTab] = useState(props.activeTab);
  const [showApprovalDropdown, setShowApprovalDropdown] = useState(false);

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  const toggleApprovalDropdown = () => {
    setShowApprovalDropdown(!showApprovalDropdown);
  };

  return (
    <>
      <div className='logo-img text-center py-1  '>
        <Link to='/'>
          <img src='/MainIcon.svg' className='mobilenone' alt='' />
        </Link>
      </div>

      <div
        className=' shadow   text-center '
        style={{
          width: '100%',
          height: '80vh',
          borderRadius: '0px 40px 0px 0px',
          padding: '40px 0px 0px 40px',
        }}
      >
        <Link to='/Dashboard'>
          <div
            className={`d-flex align-items-center text-center justify-content-start  sidebardiv ${
              activeTab === 'Dashboard' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('Dashboard')}
          >
            <img src='/dashboardicon.svg' alt='' />
            <p className='mb-0 '>Dashboard</p>
          </div>
        </Link>
        <Link to='/AnalyticsPage'>
          <div
            className={`d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'Analytics' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('Analytics')}
          >
            {' '}
            <img src='/Analyticsicon.svg' alt='' />
            <p>Analytics</p>
          </div>
        </Link>
        {/* <Link to='/Approval'> */}
        <div
          className={`d-flex align-items-center justify-content-start sidebardiv ${
            activeTab === 'Approval' ? 'sidebarctivetab' : ''
          }`}
          onClick={() => {
            handleTabClick('Approval');
            toggleApprovalDropdown();
          }}
        >
          <img src='/Approvalicon.svg' alt='' />
          <p>Approval</p>
          <img
            src='/ApSideArrow.svg'
            className={`ms-5 ${showApprovalDropdown ? 'rotate-up' : ''}`}
            alt='dropdownArrow'
          />
        </div>
        {/* </Link> */}

        {showApprovalDropdown && (
          <div className='approval-dropdown'>
            <div
              className={`d-flex align-items-center justify-content-start dropdownsidebardiv ${
                activeTab === 'Approve ' ? 'sidebarctivetabdropdown' : ''
              }`}
              onClick={() => handleTabClick('Approve ')}
            >
              <p>Approve </p>
            </div>
            <div
              className={`d-flex align-items-center justify-content-start dropdownsidebardiv ${
                activeTab === 'Pending ' ? 'sidebarctivetabdropdown' : ''
              }`}
              onClick={() => handleTabClick('Pending ')}
            >
              <p>Pending </p>
            </div>
          </div>
        )}
        {/* <Link to='/Chat'> */}
        <div
          className={`d-flex align-items-center justify-content-start  sidebardiv ${
            activeTab === 'Chat' ? 'sidebarctivetab' : ''
          }`}
          onClick={() => handleTabClick('Chat')}
        >
          {' '}
          <img src='/Chaticon.svg' alt='' />
          <p>Chat</p>
        </div>
        {/* </Link> */}
        {/* <Link to='/Notification'> */}
        <div
          className={`d-flex align-items-center justify-content-start  sidebardiv ${
            activeTab === 'Notification' ? 'sidebarctivetab' : ''
          }`}
          onClick={() => handleTabClick('Notification')}
        >
          {' '}
          <img src='/notificationicon.svg' alt='' />
          <p>Notification</p>
        </div>
        {/* </Link> */}
        {/* <Link to='/Testimonial'> */}
        <div
          className={`d-flex align-items-center justify-content-start  sidebardiv ${
            activeTab === 'Testimonial' ? 'sidebarctivetab' : ''
          }`}
          onClick={() => handleTabClick('Testimonial')}
        >
          {' '}
          <img src='/Testimonialicon.svg' alt='' />
          <p>Testimonial</p>
        </div>
        {/* </Link> */}
        {/* <Link to='/Bookedappointment'> */}
        <div
          className={`d-flex align-items-center justify-content-start  sidebardiv ${
            activeTab === 'Bookedappointment' ? 'sidebarctivetab' : ''
          }`}
          onClick={() => handleTabClick('Bookedappointment')}
        >
          {' '}
          <img src='/Bookedappointmenticon.svg' alt='' />
          <p>Booked appointment</p>
        </div>
        {/* </Link> */}

        {/* <Link to='/CallNewsletter'> */}
        <div
          className={`d-flex align-items-center justify-content-start  sidebardiv ${
            activeTab === 'CallNewsletter' ? 'sidebarctivetab' : ''
          }`}
          onClick={() => handleTabClick('CallNewsletter')}
        >
          {' '}
          <img src='/CallNewslettericon.svg' alt='' />
          <p>CallNewsletter</p>
        </div>
        {/* </Link> */}

        {/* <Link to='/Team'> */}
        <div
          className={`d-flex align-items-center justify-content-start  sidebardiv ${
            activeTab === 'Team' ? 'sidebarctivetab' : ''
          }`}
          onClick={() => handleTabClick('Team')}
        >
          {' '}
          <img src='/Teamicon.svg' alt='' />
          <p>Team</p>
        </div>
        {/* </Link> */}

        {/* <Link to='/TextFields'> */}
        <div
          className={`d-flex align-items-center justify-content-start  sidebardiv ${
            activeTab === 'TextFields' ? 'sidebarctivetab' : ''
          }`}
          onClick={() => handleTabClick('TextFields')}
        >
          {' '}
          <img src='/TextFiledsicon.svg' alt='' />
          <p>TextFields</p>
        </div>
        {/* </Link> */}
      </div>
    </>
  );
};

export default index;
