import { useEffect, useState } from 'react'
import './Login.css'
import { Button } from '@mui/material';
import PatientDatas from './PatientDatas';
import loginIcon from '../../images/logo1.jpg'
import { Link, json, useNavigate } from 'react-router-dom';
import InputBox from '../../Components/Forms/InputBox/InputBox';
import PersonIcon from '@mui/icons-material/Person';
import CaptchaCode from '../../Components/CaptchaCode/CaptchaCode';
import PhoneKeyCode from '../../Components/PhoneKeyCode/PhoneKeyCode';
import Swal from 'sweetalert2';

export default function Login() {

    const [patData, setPatData] = useState(PatientDatas.patientData)
    const navigate = useNavigate()

    const [authNumberRegEx, setAuthNumberRegEx] = useState(/^00[1-9]{8}$/g)
    const [phoneNumberRegEx, setPhoneNumberRegEx] = useState(/^09[0-9]{9}$/g)
    const [ticketRegEx, setTicketRegEx] = useState(/^365[0-9]{2}$/g)


    const [mainInputValue, setMainInputValue] = useState('');

    const [inputCaptchaCode, setInputCaptchacode] = useState('')
    const [captchaNum, setCaptchaNum] = useState(null)
    const [captchaCodeData, setCaptchaCodeData] = useState(null)

    const [inputKeyCode, setInputKeycode] = useState('')
    const [randomKeyCode, setRandomKeyCode] = useState(null)
    const [keyCodeData, setKeyCodeData] = useState(null)



    const [isValid, setIsValid] = useState(false)

    useEffect(() => {

        setKeyCodeData(JSON.parse(localStorage.getItem("keyCode")))
        setCaptchaCodeData(JSON.parse(localStorage.getItem("captchaCode")))

    }, [randomKeyCode, inputKeyCode, inputCaptchaCode])

    useEffect(() => {

        loginChangeValidation()


    }, [inputCaptchaCode, inputKeyCode, mainInputValue])




    function loginChangeValidation() {

        const regValidation = authNumberRegEx.test(mainInputValue) || phoneNumberRegEx.test(mainInputValue) || ticketRegEx.test(mainInputValue)
        const captchaValidation = +inputCaptchaCode === captchaCodeData;
        const keyCodeValidation = +inputKeyCode === keyCodeData;
      console.log(regValidation);
        if (regValidation && captchaValidation && keyCodeValidation ) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    }





    function loginHandler() {

        const phoneValid = patData.find(item => item.phone === mainInputValue)
        const nationalCodeValid = patData.find(item => item.national_code === mainInputValue)
        const ticketValid = patData.find(item => item.t_number === mainInputValue)

        const mainUserName = typeof phoneValid !== 'undefined' ? phoneValid.username : null
        const mainUserName2 = typeof nationalCodeValid !== 'undefined' ? nationalCodeValid.username : null
        const mainUserName3 = typeof ticketValid !== 'undefined' ? ticketValid.username : null


        if (phoneValid || nationalCodeValid || ticketValid) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'شما با موفقیت وارد شدید!',
                showConfirmButton: false,
                timer: 3000
            })
            localStorage.setItem('username', (mainUserName || mainUserName2 || mainUserName3))
            localStorage.setItem('isLogin', 'yes');
            setInputCaptchacode('')
            setMainInputValue('')
            setInputKeycode('')
            setInterval(() => {
                window.location.href = "/React-Clinic-Project/"
                // navigate("/React-Clinic-Project/userpanel/responsiveness")
            }, 3000);
        } else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'اطلاعات وارد شده صحیح نیست',
                showConfirmButton: false,
                timer: 3000
            })
        }

    }




    return (
        <div className='background-body'>
            <div className='container py-3'>
                <div className="login-form-wrapper">
                    <div className="login-form-header">
                        <h3>فرم ورود به پنل کلینیک</h3>

                    </div>
                    <img className='login-icon' src={loginIcon} alt="" />
                    <div className="login-form-inputs">
                        <InputBox
                            id="userName"
                            name="userName"
                            label="شماره تماس / شماره قبض / کدملی"
                            type="tel"
                            icon={<PersonIcon />}
                            changeHandler={event => (
                                setMainInputValue(event.target.value)
                            )}
                            value={mainInputValue}
                        />


                    </div>
                    <PhoneKeyCode
                        changeHandler={event => setInputKeycode(event.target.value)}
                        inputKeyCode={inputKeyCode}
                        randomKeyCode={randomKeyCode}
                        setRandomKeyCode={setRandomKeyCode}

                    />
                    <CaptchaCode
                        changeHandler={event => setInputCaptchacode(event.target.value)}
                        captchaNum={captchaNum}
                        setCaptchaNum={setCaptchaNum}
                        inputCaptchaCode={inputCaptchaCode}
                    />
                    {

                        isValid && (
                            <Button className="login-form-btn" onClick={() => loginHandler()}>
                                ورود به پنل کاربری
                            </Button>
                        )

                    }

                </div>
            </div>
        </div>
    )
}
