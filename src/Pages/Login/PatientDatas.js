
import ct_scan from '../../images/ct_scan.jpeg'
import report1 from '../../images/report_png.png'
import report2 from '../../images/report_png2.png'
import report_pdf_link from '../../images/report.pdf'


const patientData = [
    { id: 1,name:"حسین شیرازی", username: "hoseinali123", national_code: "0018833871", phone: "09354807474", t_number: "36532", ct: ct_scan, report: [report1, report2], link: report_pdf_link ,dr:"دکتر اعلمی" ,exp:"MRI",date:"1402-02-13"},
    { id: 2,name:"حسن احمدی", username: "hasan12", national_code: "0014465992", phone: "09125536598", t_number: "36559", ct: null, report: [], link: null, dr:null ,exp:null ,date:null},
    { id: 3,name:"امیر سعیدی", username: "amir26", national_code: "0015599785", phone: "09214585798", t_number: "36561", ct: null, report: [], link: null, dr:null ,exp:null ,date:null},
    { id: 4,name:"ساسان صفوی", username: "sasan48", national_code: "0014528369", phone: "09121418569", t_number: "36592", ct: ct_scan, report: [report1, report2], link: report_pdf_link,dr:"دکتر سماواتی"  ,exp:"CT Scan",date:"1402-03-24"},

]
const patientData2 = [
    { id: 1,name:"حسین شیرازی", username: "hoseinali123", national_code: "0018833871", phone: "09354807474", t_number: "36532", ct: ct_scan, report: [report1, report2], link: report_pdf_link ,dr:"دکتر جوادی" ,exp:"دندانپزشکی",date:"1402-05-16",time:"14:30", condition:"complete"},
    { id: 2,name:"حسن احمدی", username: "hasan12", national_code: "0014465992", phone: "09125536598", t_number: "36559", ct: null, report: [], link: null, dr:"دکتر فاطمه احمدی" ,exp:"ارتوپدی" ,date:"1402-05-24",time:"11:30", condition:"waiting"},
    { id: 3,name:"امیر سعیدی", username: "amir26", national_code: "0015599785", phone: "09214585798", t_number: "36561", ct: null, report: [], link: null, dr:null ,exp:null ,date:null, condition:null},
    { id: 4,name:"ساسان صفوی", username: "sasan48", national_code: "0014528369", phone: "09121418569", t_number: "36592", ct: ct_scan, report: [report1, report2], link: report_pdf_link,dr:"دکتر طاهری"  ,exp:"عصب شناسی",date:"1402-06-14",time:"12:30", condition:"rejection"},

]

export default {patientData,patientData2};