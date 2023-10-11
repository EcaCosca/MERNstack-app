import { useState } from 'react';
import axios from 'axios';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.post('http://localhost:8000/api/user/login', {
                email,
                password
            });

            const user = response.data;

            localStorage.setItem('user', JSON.stringify(user));

            dispatch({ type: 'LOGIN', payload: user });
        } catch (error) {
            setError(error.response.data.error);
            console.error(error.response.data.error);
        } finally {
            setIsLoading(false);
        }
    };

    return { login, isLoading, error };
};