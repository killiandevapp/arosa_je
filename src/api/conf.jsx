// src/api/axios.js
import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = 'http://localhost:8000'; // Assurez-vous que c'est la bonne URL de votre backend

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: true // Ceci permet à Axios d'envoyer et recevoir des cookies
});

// Intercepteur unique pour gérer le token d'authentification et le CSRF token
axiosInstance.interceptors.request.use(
  (config) => {
    // Ajout du token d'authentification
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    
    // Ajout du CSRF token pour les méthodes non sécurisées
    if (['post', 'put', 'patch', 'delete'].includes(config.method.toLowerCase())) {
      const csrfToken = Cookies.get('csrftoken');
      if (csrfToken) {
        config.headers['X-CSRFToken'] = csrfToken;
      }
    }
    
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;