//function
import React from "react";
import { Typography, Box, Button  } from '@mui/material';

const Kart = () => {

} 

export default Kart;

const emailRegex = /^[\w-+\.]+@\w+(\.\w+)+$/;

String.replaceAll(/\s+/g, ' ').trim() //remove all extra white spaces

// Recognise mobile screen
const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//Recognise dark mode
const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

//Get componet width > screen width
import { useWindowSize, useWindowWidth, useWindowHeight} from '@react-hook/window-size'
const ref = useRef();
const widthOverFlow = useWindowWidth() < ref.current?.getBoundingClientRect().width ;

// Country list
import countryList from 'react-select-country-list';
const Country = countryList().getData();

<TextField
id="Country"
select
label="Country"
name="Country"
value={formData.Country}
onChange={handleChange}
helperText="Select your Country"
>
{Country.map((option) => (
  <MenuItem key={option.value} value={option.label}>
    {option.label}
  </MenuItem>
))}
</TextField>

// Select input from auto complete
const handleInputChange = (event, value, reason) => {
  // console.log(reason) -> selectOption will identify if any option selected
  if(value)
    {navigate(`/ItemPage/${value.id}`)}
} 

//Upload file button
const handleInput = (event) => {
  console.log(event.target.files);
  const file = event.target.files[0];
}

<Button variant="contained" component="label" // make input active
      sx={{backgroundColor: '#455a64'}}>
          Upload
    <input type="file" accept='application/pdf' hidden onChange={handleInput}/>
</Button>

