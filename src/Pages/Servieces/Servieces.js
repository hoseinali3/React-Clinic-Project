import React, { useState } from 'react'
import './Servieces.css'
import servicesData from './ServicesData'
import { Link } from 'react-router-dom'


export default function Servieces() {

    const [serviceDatas, setServiceDatas] = useState(servicesData)

    return (

        <div className='background-body'>
            <div className="container py-4">
                <div className="services-wrapper">
                    <div className="services-header">
                        <h2 className="services-title">خدمات مرکز</h2>
                        <p className="services-subtitle">ما در این مرکز <span>خدمات ویژه ای</span> به بیماران خود ارائه میدهیم، این خدمات ویژه برای رضایت هر چه بیشتر شما مراجعان محترم ارائه میشود!</p>
                    </div>
                    <ul className="service-list">
                        {
                            serviceDatas.length !== 0 && (
                                serviceDatas.map(item => (
                                    <li className='service-listitem'>
                                        <div className="service-listitem-image">
                                            <img src={item.img} className='img-fluid' alt="" />
                                        </div>
                                        <Link to="/React-Clinic-Project/doctors" className="service-listitem-title">{item.title}</Link>
                                        <span className="service-listitem-subtitle">{item.subTitle.slice(0, 62)}...</span>
                                        <Link to="/React-Clinic-Project/doctors" className="service-listitem-link">بیشتر</Link>
                                    </li>
                                ))
                            )
                        }

                    </ul>
                </div>

            </div>
        </div>
    )
}
