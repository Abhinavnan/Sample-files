import { useDispatch, useSelector } from 'react-redux';
import { resetPersonalDetails, updatePersonalDetails } from '../Redux/personalDetailsSlice';


const sample = () =>{
    const formData = useSelector((state) => state.personalDetails); // fetch data
    const dispatch = useDispatch();
    const handleChange = (event) => {
        const { name, value } = event.target;    
        dispatch(updatePersonalDetails({ [name]: value }));     // update data
    
      };
      const handleReset = () => {
        dispatch(resetPersonalDetails());  // reset data
      };
}