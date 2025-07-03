import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePersonalDetails } from '../../Redux/personalDetailsSlice';
import { Box, TextField, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import dayjs from 'dayjs';
import { Formik, Form } from 'formik';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Validator from '../../Validator/Validator';

const Companies = ['TCS', 'WIPRO', 'INFOSYS'];

const EmploymentDetails = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.personalDetails); // Get state from Redux
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const AddressValidation = Validator('Address', formData.CompanyAddress); // Address validation

  // Handle input change and dispatch to Redux
  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(updatePersonalDetails({ [name]: value }));
  };

  // Handle DatePicker change
  const handleDateChange = (name, value) => {
    dispatch(updatePersonalDetails({ [name]: value ? value.toISOString() : null }));
  };

  return (
    <div>
      <Formik
        initialValues={{
          CompanyName: formData.CompanyName || '',
          designation: formData.designation || '',
          CompanyAddress: formData.CompanyAddress || '',
          StartDate: formData.StartDate ? dayjs(formData.StartDate) : null, // Convert ISO string to dayjs object
          EndDate: formData.EndDate ? dayjs(formData.EndDate) : null,
        }}
        onSubmit={(values) => {
          dispatch(updatePersonalDetails(values));
        }}
      >
        {({ values, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Box sx={{ '& .MuiTextField-root': { m: 1, width: isMobile ? '90%' : '100%' } }}>
              <TextField
                id="CompanyName"
                select
                label="Company Name"
                name="CompanyName"
                value={formData.CompanyName || ''}
                onChange={handleChange}
                helperText="Select your Company Name"
              >
                {Companies.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              <br />
              <TextField
                required
                id="designation"
                label="Designation"
                name="designation"
                value={formData.designation || ''}
                onChange={handleChange}
              />
              <br />
              <TextField
                required
                id="CompanyAddress"
                label="Company Address"
                name="CompanyAddress"
                value={formData.CompanyAddress || ''}
                onChange={handleChange}
                error={AddressValidation}
                helperText={AddressValidation ? "Address should be less than 200 character" : ""}
                multiline
              />
              <br />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Start Date"
                  name="StartDate"
                  value={formData.StartDate ? dayjs(formData.StartDate) : null}
                  onChange={(date) => handleDateChange("StartDate", date )} 
                  //date send a single value. Not an event to handleDateChange function
                  minDate={dayjs('1970-01-01')} 
                  maxDate={dayjs().subtract(2, 'day')}
                />
              </LocalizationProvider> <br />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="End Date"
                  name="EndDate"
                  value={formData.EndDate ? dayjs(formData.EndDate) : null}
                  onChange={(date) => handleDateChange("EndDate", date )}
                  minDate={dayjs(formData.StartDate).add(1, 'day')} 
                  maxDate={dayjs()}
                />
              </LocalizationProvider>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EmploymentDetails;
