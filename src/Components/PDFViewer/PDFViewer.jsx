// import React, { useState } from 'react';

// import ctscan from '../../images/ctscan.pdf'
// import './PDFViewer.css'
// import { Viewer, Worker } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// export default function MyPDFViewer({ link }) {

//   const [PDFFile, setPDFFile] = useState(null)
//   const [viewPDF, setViewPDF] = useState(null)
//   const fileType = ['application/pdf']



//   function handleChange(e) {
//    let selectedFile = e.target.files[0]
//    if(selectedFile){

//      if(selectedFile && fileType.includes(selectedFile.type)){
//       let reader = new FileReader()
//       reader.readAsDataURL(selectedFile)
//       reader.onload = (e) => {
//         setPDFFile(e.target.result)
//       }
//     } else {
//       setPDFFile(null)
//     }
//   } else {
//     console.log("pls selected");
//   }
//   }

// const handleSubmit = (e) => {
//   e.preventDefault()
//   if(PDFFile !== null){
//     setViewPDF(PDFFile)
    
//   } else{
    
//     setViewPDF(null)
//   }
// }


//   return (
//     <div className='container'>
//   <form type="file">
//     <input type="file" className='form-control' onChange={handleChange}/>
//     <button type='submit' className='btn btn-success' onClick={handleSubmit}>view pdf</button>
//   </form>
//   <h2>View PDF</h2>
//   <div className="pdf-container">
//       <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js'>
//     {viewPDF && <>
//       <Viewer fileUrl={viewPDF} plugins={{newplugin}}/>
//     </>}
//     {!viewPDF && <>no pdf</>}
//       </Worker>
//   </div>
//     </div>
//   );
// }