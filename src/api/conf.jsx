// src/api/axios.js
import axios from 'axios';
import Cookies from 'js-cookie';
import ModalError from '../components/error/modalError';
import { redirect } from 'react-router-dom';

const baseURL = 'http://localhost:8000'; // Assurez-vous que c'est la bonne URL de votre backend



// Autentification

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

async function Connecte(getData) {
  try {
    const response = await axiosInstance.post('/user/signin', getData);
    console.log(response.data);

    if (response.data && response.data.access_token) {
      localStorage.setItem('access_token', response.data.access_token);
      localStorage.setItem('user_info', JSON.stringify(response.data.user));
      console.log('Connexion réussie !');
      return response.data; // Retournez les données de réponse
    }
  } catch (error) {
    console.error('Erreur de connexion :', error.response ? error.response.data : error.message);
    throw error; // Relancez l'erreur pour la gérer dans le composant
  }
}

// Advices
async function PostAdvice(formData) {
  const response = await axiosInstance.post('http://localhost:8000/advice/create', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return response;
}

async function GetALLAdvice() {

  try {
    const response = await axiosInstance.get('http://localhost:8000/advice');


    return response;

  } catch (error) {
    alert('Vous avais une erreur ' + error.response.status + ' . ' + error.response.status)
    throw error;
  }



}
// Botaniste 

function GetListAttribute() {
  const response = axiosInstance.get('http://localhost:8000/attribution')
  return response;
}
function testAdd(formData) {
  const response = axiosInstance.post('care/create-with-assignment', formData)
  return response;
}
function GetListPostCare(id_care) {
  const response = axiosInstance.get(`http://localhost:8000/attribution/care/${id_care}/posts`)
  return response;
}

function GetDetailleCarePost(id_post) {
  const response = axiosInstance.get(`http://localhost:8000/attribution/care/${id_post}/post`)
  return response;
}

function PostCareComment(id_post, dataComment){
  const response =  axiosInstance.post(`http://localhost:8000/attribution/create/care/${id_post}/post/comment`, dataComment)
  return response;
}


// Care
async function PostCreateCare(formData) {
  const response = await axios.post('http://localhost:8000/care/create', formData)

}


// Catégory


async function GetALLCat() {
  try {
    const response = axiosInstance.get('http://localhost:8000/category');
    return response;
  } catch (error) {
    <ModalError propserror={error} />
  }


}
// Patient 

function PostUpdatePorfil(formData) {
  const response = axiosInstance.put('http://localhost:8000/user/update', formData);
  return response;
}




export {
  Connecte,
  PostAdvice,
  GetALLCat,
  GetALLAdvice,
  PostUpdatePorfil,
  PostCreateCare,
  GetListAttribute,
  testAdd,
  GetListPostCare,
  GetDetailleCarePost,
  PostCareComment
};


