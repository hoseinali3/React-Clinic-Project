import React from 'react'
import './ContactUs.css'
import map from '../../images/map.png'

export default function ContactUs() {
  return (
    <div className='background-body'>
      <div className='container py-4'>
        <div className="contact-us-wrapper">
          <h2 className='contact-us-title'>تماس با ما</h2>
          <div className="contact-us-body">
            <div className="contact-us-body-rightside">
              <p>ایمیل : clinic@email.co</p>
              <p>تلفن تماس : 7796325-021</p>
              <p>آدرس : تهران - خیابان پاسداران - خیابان وارسته - کلینیک کاوه</p>
            </div>
            <div className="contact-us-body-leftside">
              <h3 className="contact-us-body-leftside-title">
                آدرس کلینیک بر روی نقشه:
              </h3>
              <img className='img-fluid' src={map} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
