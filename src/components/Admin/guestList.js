import React from 'react'
import "../Admin/guestList.css"
import settings from "./AdminImages/settings.png"
import menu from "./AdminImages/menu.png"
function guestList() {
  return (
    <div className='gl-main'>
      <div>
        <button>Add</button>
      </div>
      <div className='gl-row'>
        <div className='column box-1'>Guest</div>
        <div className='column box-2'>Date Order</div>
        <div className='column box-3'>Check In</div>
        <div className='column box-4'>Check Out</div>
        <div className='column box-5'>Room Type</div>
        <div className='column box-6'>Status</div>
        <div className='column box-7'><img src={settings} alt="" /></div>
      </div>
      <div className='g-1'>
        <div className='column box-1'><div className='avatar'></div><p>James Titus</p><p>~#EMP-00025</p></div>
        <div className='column box-2'><p>Oct 30th 2022</p><p>~9.21 AM</p></div>
        <div className='column box-3'><p>Nov 2th, 2022</p><p>~9.46 PM</p></div>
        <div className='column box-4'><p>Nov 4th, 2022</p><p>~6.12 PM</p></div>
        <div className='column box-5'>Deluxe A - 02</div>
        <div className='column box-6'><div className='gl-btn'>Booked</div></div>
        <div className='column box-7'><img src={menu} alt="" /></div>
      </div>
    </div>
  )
}

export default guestList