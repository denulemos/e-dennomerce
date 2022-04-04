const validationObject = (correct, message) => {
    return {
        isCorrect: correct,
        message: message
    }
}

const isFilled = (value) => {
    return value && value.length > 0;
}

const ValidationSchema = ({username, email, password, confirmPassword}) => {
    console.log('llegue')
    if (isFilled(username) && isFilled(email) && isFilled(password) && isFilled(confirmPassword)) {
        if (password === confirmPassword) {
            return (validationObject(true, ''));
        }
        else {
            return (validationObject(false, 'Passwords do not match'));
        }
    }

    return validationObject(false, 'Please fill all fields');
}





module.exports = ValidationSchema;