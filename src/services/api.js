import { getAccessToken, setAccessToken } from "./authService";

const API_BASE_URL = 'http://localhost:5000/api';


async function refreshToken(){
    const response = await fetch(`${API_BASE_URL}/Auth/refresh-token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if(!response.ok){
        throw new Error('Failed to refresh token');
    }

    const data = await response.json();
    setAccessToken(data.accessToken);
    return data.accessToken;
}

export async function apiFetch(url, options = {}) {
    let token = getAccessToken();

    const {headers : h, ...restOptions} = options;

    const headers = {
        'Content-Type': 'application/json',
        ...h,
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
    };

    let response = await fetch(`${API_BASE_URL}${url}`, {
        ...restOptions,
        headers,
        credentials: 'include'
    });

    if (response.status === 401) {
        try{
            const newToken = await refreshToken(response);

            const retryHeaders = {
                ...h,
                Authorization : `Bearer ${newToken}`,
            };

            response = await fetch(`${API_BASE_URL}${url}`, {
                ...restOptions,
                headers: retryHeaders,
                credentials: 'include'
            });
        } catch (error){
            throw new Error('Unauthorized');
        }
    }

    if(!response.ok){
        const errorText = await response.text();
        throw new Error(errorText || 'API request failed');
    }

    return await response.json();
}


export async function loginUser(email, password) {

    const response = await fetch(`${API_BASE_URL}/Auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

     if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Login failed');
    }

    return await response.json();
}