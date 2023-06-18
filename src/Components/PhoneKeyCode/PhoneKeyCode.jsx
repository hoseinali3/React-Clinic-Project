import { TextField, Button } from '@mui/material'
import React, { useState, useEffect, useRef } from 'react'
import CachedIcon from '@mui/icons-material/Cached';
import Swal from 'sweetalert2';
import './PhoneKeyCode.css'

export default function PhoneKeyCode({
    changeHandler,
    inputKeyCode,
    randomKeyCode,
    setRandomKeyCode
}) {

    const [count, setCount] = useState(0)
    const timerId = useRef()

    const RandomKey = () => {

        const randomNum = Math.round(Math.random() * 1000000);
        localStorage.setItem("keyCode", JSON.stringify(randomNum));
        setRandomKeyCode(randomNum)
       
        setCount(45)

    }


    useEffect(() => {

        timerId.current = setInterval(() => {
            setCount(prev => prev - 1);
        }, 1000);

        if (count <= 0) {
            clearInterval(timerId.current)
            localStorage.setItem("keyCode", null);
        }
        return () => clearInterval(timerId.current)

    }, [count]);


    return (
        <div className="key-code">
            <TextField id="standard-basic" type="tel" label="کد تایید را وارد کنید" variant="standard" onChange={changeHandler} value={inputKeyCode} />

            {count ? (
                <span>{count} ثانیه</span>
            ) : (

                <Button onClick={() => (
                    RandomKey(),
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'کد تایید برای شما پیامک شد!',
                        showConfirmButton: false,
                        timer: 3000
                    })
                )} className='btn2' >ارسال پیامک</Button>

            )}
        </div>
    )
}
