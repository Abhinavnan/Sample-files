import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Name: '',
  PhoneNumber: '',
  Email: '',
  Password: '',
  PasswordConfirm: '',
  Address: '',
  Country: '',
  CompanyName: '',
  designation: '',
  CompanyAddress: '',
  StartDate: null,
  EndDate: null,
  weight: '',
  bloodGroup: '', 
  diabeticStatus: 'non-diabetic', // Default value
};

const personalDetailsSlice = createSlice({
  name: 'personalDetails',
  initialState,
  reducers: {
    updatePersonalDetails: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetPersonalDetails: () => initialState,
  },
});

export const { updatePersonalDetails, resetPersonalDetails } = personalDetailsSlice.actions;
export default personalDetailsSlice.reducer;


