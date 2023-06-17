import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './SelectBox.scss'

export default function SelectBox({
  Datas,
  label,
  value,
  setValue
}) {



  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ minWidth: 400 }}>
        <InputLabel id="demo-simple-select-standard-label" >{label}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value}
          onChange={handleChange}
          label={label}
        >
          <MenuItem value="">
            <em>-</em>
          </MenuItem>
          {Datas.length !== 0 && label === "نوع خدمت" &&
            Datas.map(item => (

              <MenuItem key={item.id} value={item.exp}>{item.exp}</MenuItem>

            ))
          }
          {Datas.length !== 0 && label === "تاریخ نوبت" &&
            Datas.map(item => (

              <MenuItem key={item.id} value={item.date}>{item.date}</MenuItem>


            ))
          }
          {Datas.length !== 0 && label === "ساعت نوبت" &&
            Datas.map(item => (

              <MenuItem key={item.id} value={item.time}>{item.time}</MenuItem>

            ))
          }

        </Select>
      </FormControl>

    </div>
  );
}