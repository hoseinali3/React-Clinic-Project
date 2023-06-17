import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers-pro';

export default function DateBox({
    value,
    setValue
}) {
  return (
    <LocalizationProvider  dateAdapter={AdapterDayjs} >
      <DatePicker format="YYYY/MM/DD"   sx={{minWidth:400}}  value={value} onChange={(newValue) => setValue(newValue)} />
    </LocalizationProvider>
  );
}