import React from 'react'
import "../Admin/dashboard.css"
import bed from "./AdminImages/bed.png"
import In from "./AdminImages/in.png"
import out from "./AdminImages/out.png"
import guest from "./AdminImages/guest-list.png"
import room from "./AdminImages/room-list.png"
function dashboard() {
  return (
    <div className='main'>
      <div className='left'>
        <div className='left-top-1'>
          <div className='s-box'>
            <div className='s-box-img'>
              <img src={bed} alt="" />
            </div>
            <div className='s-box-right'>
              <div className='s-box-count'>80</div>
              <div className='s-box-name'>New Booking</div>
            </div>
          </div>
          <div className='s-box'>
            <div className='s-box-img'>
              <img src={bed} alt="" />
            </div>
            <div className='s-box-right'>
              <div className='s-box-count'>121</div>
              <div className='s-box-name'>Total Booking</div>
            </div>
          </div>
        </div>
        <div className='left-bottom-1'>
          <div className='s-box'>
            <div className='s-box-img'>
              <img src={In} alt="" />
            </div>
            <div className='s-box-right'>
              <div className='s-box-count'>22</div>
              <div className='s-box-name'>Check In</div>
            </div>
          </div>
          <div className='s-box'>
            <div className='s-box-img'>
              <img src={out} alt="" />
            </div>
            <div className='s-box-right'>
              <div className='s-box-count'>10</div>
              <div className='s-box-name'>Check Out</div>
            </div>
          </div>
        </div>
        <div className='left-top-2'>
          <div className='progress-bar'>
            <div className='progress-bar-top'>
              <h2>Available Room today</h2>
              <h1>30</h1>
            </div>
            <div className='progress-bar-bottom'>
            <progress value="30" max="100"></progress>
            </div>
          </div>
        </div>
        <div className='left-bottom-2'>
          <div className='progress-bar'>
            <div className='progress-bar-top'>
              <h2>Sold out Room today</h2>
              <h1>80</h1>
            </div>
            <div className='progress-bar-bottom'>
            <progress value="80" max="100"></progress>
            </div>
          </div>
        </div>
      </div>
      <div className='right'>
        <div className='room-list'>
          <img src={room} alt="" />
          <h1>Room List</h1>
        </div>
        <div className='guest-list'>
          <img src={guest} alt="" />
          <h1>Guest List</h1>
        </div>
      </div>
    </div>
  )
}

export default dashboard