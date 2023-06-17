import React, { useState } from 'react'
import './ImageUploader.scss'
import { DropzoneArea } from 'material-ui-dropzone';

import { Button } from '@mui/material';
import Swal from 'sweetalert2';
export default function ImageUploader({
    label,
    value,
    setValue
}) {


    const imageUploadHandler = () => {
     if (value.length){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'عکس شما با موفقیت آپلود شد!',
            showConfirmButton: false,
            timer: 3000
        }).then(() => {
          
          setTimeout(() => {
            console.log(value);
          }, 1000);
        })
      
     } else {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'لطفا عکس را آپلود کنید!',
            showConfirmButton: false,
            timer: 3000
        })
     }
    }

    return (
        <div className='image-uploader-wrapper'>
            <DropzoneArea
                acceptedFiles={['image/jpeg', 'image/png']}
                dropzoneText={label}
                onChange={file => setValue(file)}
                showAlerts={false}
            />
            <Button
                className='btn2'
                onClick={imageUploadHandler}
                sx={{width:"max-content"}}
            >
                آپلود عکس نسخه
            </Button>
        </div>
    )
}
