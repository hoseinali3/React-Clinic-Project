import React from 'react'
import map from '../../images/map.png'



import './Footer.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <div className='footer-container'>

           
                <div className="footer-rightside">
                    <div className="footer-rightside-col">
                        <span>ساعت کاری کلینیک</span>
                        <p>شنبه: 9:00 - 17:00</p>
                        <p>یکشنبه: 9:00 - 17:00</p>
                        <p>دوشنبه: 9:00 - 17:00</p>
                        <p>سه شنبه: 9:00 - 17:00</p>
                        <p>چهارشنبه: 9:00 - 17:00</p>
                        <p>پنجشنبه: 9:00 - 17:00</p>
                        <p>جمعه: تعطیل</p>
                    </div>
                    <div className="footer-rightside-col">
                        <span>خدمات ما</span>
                        <Link to="#">وقت ملاقات</Link>
                        <Link to="#">ساعات کاری</Link>
                        <Link to="#">محاسبه هزینه</Link>
                        <Link to="#">پیشنهادات ویژه</Link>
                        <Link to="#">رضایتمندی</Link>


                    </div>
                    <div className="footer-rightside-col">
                        <span>ارتباط با ما</span>
                        <p>ایمیل : clinic@email.co</p>
                        <p>تلفن تماس : 7796325-021</p>
                        <p>آدرس : تهران - خیابان پاسداران - خیابان وارسته - کلینیک کاوه</p>
                    </div>
                </div>
                <div className="footer-leftside">
                    <h3 className='footer-leftside-title'>آدرس بر روی نقشه:</h3>
                    <img className='img-fluid' src={map} alt="" />
                </div>
            </div>

       
    )
}
