import React from 'react'
import SummarizeIcon from '@mui/icons-material/Summarize';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import './Section1.css'

import { Link } from 'react-router-dom'




export default function Section1() {


function getData () {
  const username = localStorage.getItem("userName");


}


  return (
    <div className='section1-container'>
      <div className="sec1-header">
      <h2>لینک مرتبط با خدمات</h2>
      <span>در این قسمت خدمات این کلینیک را مشاهده میفرمایید!</span>
      </div>
      <div className="sec1-body">
        <Link to="/React-Clinic-Project/userpanel" className="sec1-items">
        <SummarizeIcon sx={{color:'var(--green3)'}} fontSize='large'/>
        <span>جوابدهی</span>
        </Link>
        <Link  to="/React-Clinic-Project/userpanel"  className="sec1-items">
        <ConfirmationNumberIcon sx={{color:'var(--green3)'}} fontSize='large'/>
        <span>نوبت دهی</span>
        </Link>
        <Link to="/React-Clinic-Project/clinic-services" className="sec1-items">
        <MedicalServicesIcon sx={{color:'var(--green3)'}} fontSize='large'/>
        <span>خدمات مرکز</span>
        </Link>
      </div>
    </div>
  )
}
