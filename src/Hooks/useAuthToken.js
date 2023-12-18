import { useEffect, useState } from 'react';

function useAuthToken() {
    const [token, setToken] = useState('');

    useEffect(() => {
        const storedToken = localStorage.getItem('jwtToken');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);


    const removeAuthToken = () => {
        localStorage.removeItem('jwtToken');
        setToken('');
    };

    return [token, removeAuthToken];
}

export default useAuthToken;
