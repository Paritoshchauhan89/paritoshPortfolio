import axios from 'axios';

const URL = 'http://localhost:9000';

export const addUser = async(data) =>{


    try{ 
    return await axios.post(`${URL}/contact`, data);

    }
    catch(error){
        console.log('Error while add Organiser', error);
    }

}

