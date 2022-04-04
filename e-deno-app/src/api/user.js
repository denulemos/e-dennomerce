import {API_URL} from '../utils/constants';

export const  registerUser = async (formData) => {
    try {
        const url = `${API_URL}/api/users-denos`;
        const params = {
            method: 'POST',
            mode: 'cors',
            headers : {
                "Content-Type" : "application/json"
            },
            // Must receive an String, we need to convert it
            body: JSON.stringify({data: formData}) 
        }

        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    }
    catch(error) {
        const result = "Error" + error;
        return result;
    }
}