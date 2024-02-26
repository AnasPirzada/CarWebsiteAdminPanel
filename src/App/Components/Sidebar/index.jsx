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

      <div className='shadow adminsidebar'>
        <Link to='/Dashboard'>
          <div
            className={`d-flex align-items-center text-center justify-content-start  sidebardiv ${
              activeTab === 'Dashboard' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('Dashboard')}
          >
            <img src='/dashboardicon.svg' alt='' />
            <p className='mb-0 ms-3'>Dashboard</p>
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
            <p className='mb-0 ms-3'>Analytics</p>
          </div>
        </Link>
        <Link to='/Approval'>
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
            <p className='mb-0 ms-3'>Approval</p>
            <img
              src='/ApSideArrow.svg'
              className={`ms-0 ms-md-5 mobdisarrow ${
                showApprovalDropdown ? 'rotate-up' : ''
              }`}
              alt='dropdownArrow'
            />
          </div>
        </Link>

        {showApprovalDropdown && (
          <div className='approval-dropdown ms-3'>
            <Link to='/Approve'>
              <div
                className={`d-flex align-items-center justify-content-start dropdownsidebardiv ${
                  activeTab === 'Approve' ? 'sidebarctivetabdropdown' : ''
                }`}
                onClick={() => handleTabClick('Approve')}
              >
                <p>Approve </p>
              </div>
            </Link>
            <Link to='/Pending'>
              <div
                className={`d-flex align-items-center justify-content-start dropdownsidebardiv ${
                  activeTab === 'Pending' ? 'sidebarctivetabdropdown' : ''
                }`}
                onClick={() => handleTabClick('Pending')}
              >
                <p>Pending </p>
              </div>
            </Link>
          </div>
        )}
        <Link to='/Chat'>
          <div
            className={`d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'Chat' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('Chat')}
          >
            {' '}
            <img src='/Chaticon.svg' alt='' />
            <p className='mb-0 ms-3'>Chat</p>
          </div>
        </Link>
        <Link to='/Notification'>
          <div
            className={`d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'Notification' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('Notification')}
          >
            {' '}
            <img src='/notificationicon.svg' alt='' />
            <p className='mb-0 ms-3'>Notification</p>
          </div>
        </Link>
        <Link to='/Testimonial'>
          <div
            className={`d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'Testimonial' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('Testimonial')}
          >
            {' '}
            <img src='/Testimonialicon.svg' alt='' />
            <p className='mb-0 ms-3'>Testimonial</p>
          </div>
        </Link>
        <Link to='/Bookedappointment'>
          <div
            className={`d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'Bookedappointment' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('Bookedappointment')}
          >
            {' '}
            <img src='/Bookedappointmenticon.svg' alt='' />
            <p className='mb-0 ms-3'>Booked appointment</p>
          </div>
        </Link>

        <Link to='/CallNewsletter'>
          <div
            className={`d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'CallNews' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('CallNews')}
          >
            {' '}
            <img src='/CallNewslettericon.svg' alt='' />
            <p className='mb-0 ms-3'>CallNewsletter</p>
          </div>
        </Link>

        <Link to='/Team'>
          <div
            className={`d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'Team' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('Team')}
          >
            {' '}
            <img src='/Teamicon.svg' alt='' />
            <p className='mb-0 ms-3'>Team</p>
          </div>
        </Link>

        <Link to='/TextFields'>
          <div
            className={`d-flex align-items-center justify-content-start  sidebardiv ${
              activeTab === 'TextFields' ? 'sidebarctivetab' : ''
            }`}
            onClick={() => handleTabClick('TextFields')}
          >
            {' '}
            <img src='/TextFiledsicon.svg' alt='' />
            <p className='mb-0 ms-3'>TextFields</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default index;
