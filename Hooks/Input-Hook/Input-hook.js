import { useState } from "react";
import Validate from '../validate';

const useInput = () => {
    const [input, setInput] = useState({
        phoneNumber: {value: '', error: false, helperText: '', type: 'number'},
        password: {value: '', error: false, helperText: '',  type: 'password'},
        newPassword: {value: '', error: false, helperText: '',  type: 'password'},
        confirmPassword: {value: '', error: false, helperText: '',  type: 'text'},
        otp: {value: '', error: false, helperText: '',  type: 'number'},
    });
    const {phoneNumber, password, newPassword, confirmPassword, otp} = input;
    const handleChange = (event) => {
        const {name, value} = event.target;
        if(name === 'otp' && String(Math.abs(value)).length > 4 ) return;
        if(name === 'phoneNumber' && String(Math.abs(value)).length > 10) return;
        const {error, helperText, type} = Validate(name, value, input);
        setInput((prevState) => ({...prevState, [name]: {value, error,  helperText, type}}));
    }
    const errors = phoneNumber.error || password.error || newPassword.error || confirmPassword.error || otp.error;
    return {input, handleChange, errors}; 
}

export default useInput;
