import React,{useState,useEffect} from 'react'
import CachedIcon from '@mui/icons-material/Cached';
import './CaptchaCode.css'
import { TextField } from '@mui/material';
export default function CaptchaCode({
    changeHandler,
    captchaNum,
    setCaptchaNum,
    inputCaptchaCode,
    
}) {

  
    const captchaHandler = () => {
        const randomNum = Math.round(Math.random() * 100000);
        localStorage.setItem("captchaCode", JSON.stringify(randomNum));
        setCaptchaNum(randomNum);
       
}


useEffect(() => {
    captchaHandler()
},[])



    return (
        <div className="captcha-code">
            <TextField id="standard-basic" type="tel" label="کد کپچا را وارد کنید" variant="standard" onChange={changeHandler} value={inputCaptchaCode}/>
            <span>{captchaNum}</span>
            <CachedIcon onClick={captchaHandler} sx={{cursor:"pointer"}} />
        </div>
    )
}
