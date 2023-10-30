import axios, { AxiosInstance as Axios } from "axios";
import { api as url } from './Config';

export const BASE_URL = url + "/";
const token = localStorage.getItem("token");

const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  },
});

const AxiosInstanceFormData = axios.create({
  baseURL: BASE_URL,
  timeout: 100000,
  headers: {
    'Authorization': token ? `Bearer ${token}` : "",
    'Content-Type': 'multipart/form-data'
  }
});


const refreshToken = async () => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    // Make a POST request to the server to refresh the access token
    const response = await axios("/login/refresh", {
      method: "POST",
      baseURL: BASE_URL,
      headers: {
        'Content-Type': "application/json",
        // 'Access-Control-Request-Private-Network': true,
        refresh: `Bearer ${refreshToken ? refreshToken : ''}`
      },
      // refreshToken,
    });

    // Save the new access token to local storage
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("refreshToken", response.data.refreshToken)

    // Return the new access token
    return response.data.token;
  } catch ({response}) {
    // Handle the error
    if(response.data === 'Login please'){
      localStorage.setItem('token','');
      localStorage.setItem('refreshToken','');
      localStorage.setItem('accessTokenExpiresAt','');
      window.location.href = '/login'
    }
    return null;
  }
};

const AxiosCustom = async (url, options = { method: 'GET' }, file=false) => {
  const accessTokenExpiresAt = localStorage.getItem("accessTokenExpiresAt") || '';
  const expiresAt = new Date(Date.parse(accessTokenExpiresAt));

  const now = new Date();
  if (expiresAt && now >= expiresAt) {
    
    const newAccessToken = await refreshToken();

    if (newAccessToken) {
      localStorage.setItem("token", newAccessToken);

      const accessTokenExpiresAt = new Date(Date.now() + 240000 );
      localStorage.setItem("accessTokenExpiresAt", accessTokenExpiresAt.toISOString());
    } else {
      alert('Error Refresh token')
    }
  }

  // Make the API request with the refreshed access token
  if(file){
    const response = await axios({
      url,
      baseURL: BASE_URL,
      timeout: 100000,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : "",
      },
      ...options,
    });
    return response;
  }
  const response = await axios({
    url,
    baseURL: BASE_URL,
    timeout: 100000,
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : "",
    },
    ...options,
  });

  return response;
};


export { AxiosInstance, AxiosInstanceFormData, AxiosCustom };
