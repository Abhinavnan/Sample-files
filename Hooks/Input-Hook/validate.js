
function Validate(name, value, input) {
    let inputError = {error: false, helperText: ''};
    const type = input[name].type;
    let error= false, helperText= '', phoneNumber;
    switch(type) {
        case 'password':
            error = value.length < 6;
            helperText = error ? 'Invalid Password' : '';
            inputError = {error, helperText};
            break; 
        case 'email':
            const emailRegex = /^[\w-+\.]+@\w+(\.\w+)+$/;
            error = !emailRegex.test(value);
            helperText = error ? 'Invalid password': '';
            inputError = {error, helperText};
            break;
        default:
            break;
    }

    switch(name) {
        case 'phoneNumber':
            phoneNumber = Math.abs(value);
            error = String(phoneNumber).length !== 10;
            helperText = error ? 'Invalid Phone Number' : '';
            return {error, helperText, type};
        case 'newPassword':
            error = value === input.password.value;
            helperText = inputError.error ? 'Password should be at least 6 characters' : 
                error ? 'Password must be different from old password' : '';
            return {error: error || inputError.error, helperText, type};
        case 'confirmPassword':
            error = value !== input.newPassword.value;
            helperText = error ? 'Passwords do not match' : '';
            return {error, helperText, type};
        case 'otp':
            error = String(Math.abs(value)).length !== 4;
            helperText = error ? 'Invalid OTP' : '';
            return {error, helperText, type};
        default:
            return {error, helperText, type};
    }  
}

export default Validate;