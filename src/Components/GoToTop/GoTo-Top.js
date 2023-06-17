
import { useState } from 'react';
import './GoTo-Top.css';

import downArrow from "./../../icons/down-arrow2.png"
export default function GoToTop() {
  let [goTop, setGoTop] = useState(false)

  window.onscroll = event => {

    if (Math.round(window.pageYOffset) > 500) {
      setGoTop(true)
    } else {
      setGoTop(false)
    }


  }

  const goTopHandler = (e) => {

    window.scrollTo(0, 0)
  }

  return (
    <div className={goTop ? 'gototop active' : 'gototop'} onClick={goTopHandler}>
      <img className='img-fluid' src={downArrow} alt="" />
    </div>
  )
}
