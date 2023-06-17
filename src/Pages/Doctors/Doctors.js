import React from 'react'
import DrTable from '../../Components/DrTable/DrTable'
import './Doctors.css'
export default function Doctors() {
    return (
        <div className='background-body'>
            <div className='container py-4'>
                <div className="doctors-wrapper">
                <DrTable/>
                </div>
            </div>
        </div>
    )
}
