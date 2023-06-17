import React from 'react'
import pic1 from '../../../images/about1.png'
import './Section2.css'



export default function Section2() {





  return (
    <div className='section2-container'>
      <div className="sec2-rightside">
        <img src={pic1} alt="" />
      </div>
      <div className="sec2-leftside">
        <h1> به <span>کلینیک ما </span>
          خوش آمدید! </h1>
        <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
          چاپ و با استفاده از طراحان گرافیک است.</span>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان</p>
      </div>
    </div>
  )
}
