import React, { useEffect, useState } from 'react'
import './UserPanel.css'
import './UserPanel.scss'

import { Link, Outlet, Navigate, useNavigate } from 'react-router-dom';


export default function UserPanel() {


  const [pathName, setPathName] = useState(window.location.pathname)
  const [label, setLabel] = useState("")
  const [orders, setOrders] = useState()
  const navigate = useNavigate()





  useEffect(() => {
    setPathName(window.location.pathname)
  }, [window.location.pathname, label])
  return (

    <div className='background-body'>
      <div className="container py-4">
        {localStorage.getItem("isLogin") ? (
          <div className="user-panel-wrapper">


            <div className="user-panel-tabs">
              <span>پنل کاربری</span>


              <Link to="responsiveness" onClick={() => setLabel("responsiveness")} className={window.location.pathname.slice(1) === "React-Clinic-Project/userpanel/responsiveness" ? "active" : null}>

                جوابدهی

              </Link>

              <Link to="NobatDehi" onClick={() => setLabel("NobatDehi")} className={window.location.pathname.slice(1) === "React-Clinic-Project/userpanel/NobatDehi" ? "active" : null}>

                نوبت دهی

              </Link>
              <Link to="#" onClick={() => (
                localStorage.setItem("isLogin", ""),
                window.location.href = "/React-Clinic-Project/"
                // navigate("/React-Clinic-Project/")
              )} >

                خروج

              </Link>

            </div>


            <Outlet />






          </div>
        ) : (
          <Navigate to="/React-Clinic-Project/login" />
        )}

      </div>
    </div>


  )
}
