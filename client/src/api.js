import axios from 'axios';

const API_URL = 'http://localhost:4547/api/dogs'; 

export const createDog = async (dogData) => {
    try {
        const response = await axios.post(API_URL, dogData);
        return response.data;
    } catch (error) {
        console.error('Error creating dog:', error);
        throw error;
    }
};

export const getDogs = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching dogs:', error);
        throw error;
    }
};
