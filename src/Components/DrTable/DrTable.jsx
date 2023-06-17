import React,{useState,useEffect} from 'react'
import './DrTable.css'
import DrTableData from './DrTableData'

export default function DrTable() {

    const [tableData, setTableData] = useState([])

    useEffect(() => {
      getData()
    },[DrTableData])
  
    async function getData (){
     await setTableData(DrTableData)
    }



  return (
    <div className='drtable-container'>
    <div className="drtable-header">
      <h1>جدول زمان کاری پزشکان</h1>
      <p>دراین قسمت میتوانید روز و ساعت کاری پزشکان را مشاهده فرمایید!</p>
    </div>
    <table className="drtable-table" >
      <thead>
        <tr className='py-1'>
          <th className="week-col">ساعت</th>
          <td className="week-col"> شنبه</td>
          <td className="week-col"> یکشنبه</td>
          <td className="week-col"> دوشنبه</td>
          <td className="week-col"> سه شنبه</td>
          <td className="week-col"> چهارشنبه</td>
          <td className="week-col"> پنجشنبه</td>

        </tr>
      </thead>
      <tbody>
        {
          tableData.length && (
            tableData.map(item => (
              <tr key={item.id} className='py-1'>
                <th className="time-col">{item.time}</th>
                {item.doctors.map(doctor => (
                  doctor.name ? (<td key={doctor.id} className='doctor-col'>
                    <div className='col-title'>
                      <span>{doctor.expertise}</span>                   
                        <span>{doctor.timeOn}</span>
                      <span>{doctor.name}</span>

                    </div>
                  </td>) : (<td key={doctor.id} className='empty-col'></td>)
                ))}
              </tr>
            ))
          )
        }

      </tbody>
    </table>
  </div>
  )
}
