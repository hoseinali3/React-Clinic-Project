import React, { useState, useEffect, Component } from 'react'

import { Button } from '@mui/material'
import './Responsiveness.css'
import PatientDatas from '../../Pages/Login/PatientDatas'
import Swal from 'sweetalert2'
import pic1 from '../../images/ct_scan.jpeg'
import pic2 from '../../images/report_png.png'
import pic3 from '../../images/report_png2.png'
import reportPDF from '../../images/report.pdf'
import ErrorBox from '../ErrorBox/ErrorBox'




export default function Responsiveness() {

    const [patData, setPatData] = useState(PatientDatas.patientData)
    const [patData2, setPatData2] = useState(PatientDatas.patientData2)
    const [currentUser, setCurrentUser] = useState({})
    const [currentUser2, setCurrentUser2] = useState({})



    function getLocalData() {

        const userName = localStorage.getItem("username")
        const findUser = patData.find(user => user.username === userName)
        const findUser2 = patData2.find(user => user.username === userName)
        setCurrentUser(findUser)
        setCurrentUser2(findUser2)

    }

    useEffect(() => {
        getLocalData()
    }, [])




    return (
        <>
            <div className='response-wrapper'>
                <h3>سوابق بیمار</h3>
              {currentUser.ct !== null ? (
                  <table className='response-table'>
                  <thead className='response-thead'>
                      <tr>
                          <th>شماره</th>
                          <th>نام بیمار</th>
                          <th>خدمت</th>
                          <th>نام پزشک</th>
                          <th>تاریخ</th>
                          <th>عکس بیمار</th>
                          <th>گزارش پزشک</th>
                      </tr>
                  </thead>
                  <tbody className='response-tbody'>
                      {currentUser.length !== 0 ? (

                          <tr key={currentUser.id}>
                              <td className='response-font'>{currentUser.id}#</td>
                              <td className='response-font'>{currentUser.name}</td>
                              <td className='response-font'>{currentUser.exp}</td>
                              <td className='response-font'>{currentUser.dr}</td>
                              <td className='response-font'>{currentUser.date}</td>
                              <td className='response-font'>
                                  <Button className='show-detail-btn' onClick={() => (
                                      Swal.fire({
                                          imageUrl: pic1,
                                          html: `<a href="${pic1}" download >دانلود عکس</a>`,
                                          imageHeight: 500,
                                          confirmButtonText: 'بستن'

                                      })
                                  )
                                  }>
                                      نمایش
                                  </Button></td>
                              <td>
                                  <Button className='show-detail-btn' onClick={() => (
                                      Swal.fire({
                                          title: "گزارش پزشک",
                                          html: `<div class="d-flex flex-column gap-3">
                                                    <div class="d-flex scroll-Body">
                                                      <img src=${pic2} />
                                                   <img src=${pic3} />
                                                   </div>
                                                   <a href="${reportPDF}" download>دانلود گزارش</a>
                                                    </div>`,

                                          confirmButtonText: 'بستن'

                                      })
                                  )
                                  }>
                                      نمایش
                                  </Button>
                              </td>

                          </tr>

                      ) : (null)

                      }
                  </tbody>
              </table>
              ) : (
                <ErrorBox title="سابقه‌ای از بیمار پیدا نشد!"/>
              )}

                <h3>درخواست نوبت دکتر</h3>
                {currentUser2.condition ? (

                <table className='response-table'>
                    <thead className='response-thead'>
                        <tr>
                            <th>شماره</th>
                            <th>نام بیمار</th>
                            <th>نام پزشک</th>
                            <th>تخصص</th>
                            <th>تاریخ</th>
                            <th>ساعت</th>
                            <th>وضعیت نوبت</th>
                            <th>کد نوبت</th>
                        </tr>
                    </thead>
                    <tbody className='response-tbody'>
                        {currentUser2.length !== 0 ? (


                            <tr key={currentUser2.id}>
                                <td className='response-font'>{currentUser2.id}#</td>
                                <td className='response-font'>{currentUser2.name}</td>
                                <td className='response-font'>{currentUser2.dr}</td>
                                <td className='response-font'>{currentUser2.exp}</td>
                                <td className='response-font'>{currentUser2.condition === "complete" ? currentUser2.date : "-"}</td>
                                <td className='response-font'>{currentUser2.condition === "complete" ? currentUser2.time : "-"}</td>
                                <td className='response-font'><span className={`condition-${currentUser2.condition === "complete" ? "complete" : currentUser2.condition === "waiting" ? "waiting" : "rejection" }`}>
                                {currentUser2.condition === "complete" ? "تایید شده" : currentUser2.condition === "waiting" ? "در حال انتظار" : "رد شده" }
                                    </span> </td>
                              

                                    <td className='response-font'>{currentUser2.condition === "complete" ? currentUser2.t_number : "-"}</td>
                            </tr>

                        ) : (null)

                        }
                    </tbody>
                </table>
                ) : (
                    <ErrorBox title="نوبتی از بیمار پیدا نشد!"/>
                )}


            </div>

        </>
    )
}
