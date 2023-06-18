import React from 'react'
import './Section3.css'

import pic1 from '../../../images/sec3/item1/image-layers-5_1.png'
import pic2 from '../../../images/sec3/item1/image-layers-5_2-1.png'
import pic3 from '../../../images/sec3/item1/image-layers-5_3.png'
import pic4 from '../../../images/sec3/item1/image-layers-5_4.png'
import pic5 from '../../../images/sec3/item2/image-layers-6_1.png'
import pic6 from '../../../images/sec3/item2/image-layers-6_2.png'
import pic7 from '../../../images/sec3/item2/image-layers-6_3-1.png'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import { Link } from 'react-router-dom'


export default function Section3() {
  return (
    <div className='section3-container'>
      <div className="sec3-items1">
        <div className="sec3-item1-rightside">

          <img src={pic1} alt="" />

          <img src={pic2} alt="" />

          <img src={pic3} alt="" />

          <img src={pic4} alt="" />
        </div>
        <div className="sec3-item1-leftside">
          <h1>طرح های جالب برای وبلاگ!</h1>

          <p>احساس رایگان برای راه اندازی و اجرای وبلاگ خود ، آن را به روشی بسیار حرفه ای انجام دهید. گزینه های پست قدرتمند کنترل بیشتری بر روی هر پست ارائه می دهند و به هرکدام امکان تنظیمات سفارشی خود را می دهند. موضوع شامل قالب های مختلف پست است.</p>
          <Link className='btn1' to="React-Clinic-Project/">بیشتر <KeyboardArrowLeftIcon /></Link>
        </div>
      </div>
      <div className="sec3-items2">
        <div className="sec3-item2-rightside">
          <h1>طرح های بزرگ نمایش نمونه کار!</h1>
          <p>پروژه های پر زرق و برق خود را با استفاده از نمونه کارها ما نشان دهید ، که شامل سبک های مختلفی مانند: شبکه ، سنگ تراشی است. طرح سنگ تراشی اجازه می دهد تا پروژه ها را به عنوان ستونی مبتنی بر ستون نمایش دهید. Grid در صورت نیاز به نمایش پروژه ها در ستون ها ، یک راه حل عالی است.</p>
          <Link className='btn1' to="React-Clinic-Project/">بیشتر <KeyboardArrowLeftIcon /></Link>
        </div>
        <div className="sec3-item2-leftside">
          <img src={pic5} alt="" />
          <img src={pic6} alt="" />
          <img src={pic7} alt="" />

        </div>
      </div>
    </div>
  )
}
