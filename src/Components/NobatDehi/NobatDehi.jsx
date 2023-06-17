import React, { useState, useEffect } from 'react'
import './NobatDehi.css'
import { Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import InputBox from '../Forms/InputBox/InputBox';
import NobatDehiData from './NobatDehiData';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ThirtyFpsIcon from '@mui/icons-material/ThirtyFps';
import PersonIcon from '@mui/icons-material/Person';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SelectBox from '../Forms/SelectBox/SelectBox';
import Swal from 'sweetalert2';
import ImageUploader from '../ImageUploader/ImageUploader';


export default function NobatDehi() {

    const [userNameValue, setUserNameValue] = useState('')
    const [ageValue, setAgeValue] = useState('')
    const [weightValue, setWeightValue] = useState('')
    const [expValue, setExpValue] = useState('')
    const [expData, setExpData] = useState(NobatDehiData)
    const [dateValue, setDateValue] = useState('')
    const [dateData, setDateData] = useState([])
    const [timeValue, setTimeValue] = useState('')
    const [TimeData, setTimeData] = useState([])
    const [files, setFiles] = useState([]);
    const navigate = useNavigate()


    const submitHandler = () => {

        if (userNameValue && ageValue && weightValue > 3 && expValue && dateValue && timeValue && files) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'نوبت شما با موفقیت ثبت شد!',
                showConfirmButton: false,
                timer: 3000
            }).then(() => {
                const randomNumber = "365" + Math.ceil(Math.random() * 100).toString()
                const mainNewReq = {
                    id: 1,
                    username: userNameValue,
                    age: ageValue,
                    weight: weightValue,
                    exp: expValue,
                    date: dateValue,
                    time: timeValue,
                    t_number: randomNumber
                }
                localStorage.setItem("newReq", JSON.stringify(mainNewReq))
                setUserNameValue('')
                setAgeValue('')
                setWeightValue('')
                setExpValue('')
                setDateValue('')
                setTimeValue('')
                setFiles([])
                navigate("/React-Clinic-Project")
            })
        } else {

            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'لطفا اطلاعات را کامل کنید!',
                showConfirmButton: false,
                timer: 3000
            })
        }
    }

    useEffect(() => {
        if (expValue) {

            const findDate = expData.find(item => item.exp === expValue)
            setDateData(findDate.dates)
        } else {
            setDateValue('')
            setTimeValue('')
            setDateData([])

        }
        setTimeData([])

    }, [expValue])

    useEffect(() => {
        if (dateValue) {
            const findTime = dateData.find(item => item.date === dateValue)
            setTimeData(findTime.times)
        } else {
            setTimeValue('')
            setTimeData([])
        }
    }, [dateValue])


    return (
        <div className="nobatdehi-user-form-inputs">
            <h3 >نوبت جدید</h3 >
            <InputBox
                id="username"
                name="username"
                label="نام و نام خانوادگی"
                type="text"
                icon={<PersonIcon />}
                changeHandler={event => setUserNameValue(event.target.value)}
                value={userNameValue}

            />

            <InputBox
                id="age"
                name="age"
                label="سن"
                type="tel"
                icon={<ThirtyFpsIcon />}
                changeHandler={event => setAgeValue(event.target.value)}
                value={ageValue}

            />
            <InputBox
                id="weight"
                name="weight"
                label="وزن"
                type="tel"
                icon={<FitnessCenterIcon />}
                changeHandler={event => setWeightValue(event.target.value)}
                value={weightValue}

            />
            <SelectBox
                Datas={expData}
                label="نوع خدمت"
                value={expValue}
                setValue={setExpValue}
            />
            <SelectBox
                Datas={dateData}
                label="تاریخ نوبت"
                value={dateValue}
                setValue={setDateValue}
            />
            <SelectBox
                Datas={TimeData}
                label="ساعت نوبت"
                value={timeValue}
                setValue={setTimeValue}
            />
            <ImageUploader
                label="لطفا نسخه پزشک را در این قسمت آپلود کنید!"
                value={files}
                setValue={setFiles}
            />

            <Button onClick={submitHandler} className="nobatdehi-user-form-btn">

                ثبت نوبت

            </Button>
        </div>
    )
}
