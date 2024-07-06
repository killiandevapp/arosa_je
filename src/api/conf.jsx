
import axios from 'axios';
import Cookies from 'js-cookie';
import { showErrorModal } from './errorModalSevices';

const baseURL = 'http://localhost:8000';

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: true
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

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
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      console.log("Tentative de rafraîchissement du token");

      try {
        const refreshToken = localStorage.getItem('refresh_token');
        const response = await axios.post(`${baseURL}/token/refresh/`, {
          refresh: refreshToken
        });

        console.log("Réponse du rafraîchissement:", response.data);
        const { access } = response.data;
        localStorage.setItem('access_token', access);
        axiosInstance.defaults.headers['Authorization'] = `Bearer ${access}`;
        originalRequest.headers['Authorization'] = `Bearer ${access}`;

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error("Erreur lors du rafraîchissement du token", refreshError);
      
        showErrorModal("Votre session a expiré. Veuillez vous reconnecter.");
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

async function Connecte(getData) {
  try {
    // Obtenir les informations utilisateur
    const userResponse = await axiosInstance.post('/user/signin', getData);
    
    if (userResponse.data && userResponse.data.access_token) {
      localStorage.setItem('access_token', userResponse.data.access_token);
      localStorage.setItem('user_info', JSON.stringify(userResponse.data.user));

      // Obtenir les tokens JWT
      const tokenResponse = await axiosInstance.post('/token/', getData);
      
      if (tokenResponse.data && tokenResponse.data.access && tokenResponse.data.refresh) {
        localStorage.setItem('access_token', tokenResponse.data.access);
        localStorage.setItem('refresh_token', tokenResponse.data.refresh);
      }

      console.log('Connexion réussie !');
      return userResponse.data;
    }
  } catch (error) {
    console.error('Erreur de connexion :', error.response ? error.response.data : error.message);
    throw error;
  }
}
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       console.log("Tentative de rafraîchissement du token");

//       try {
//         const userInfo = JSON.parse(localStorage.getItem('user_info'));
//         const response = await axios.post(`${baseURL}/token/`, {
//           email: userInfo.email,
//           // Ici, nous ne pouvons pas utiliser le mot de passe car il n'est pas stocké
//           // Une alternative serait de rediriger l'utilisateur vers la page de connexion
//         });

//         console.log("Réponse du rafraîchissement:", response.data);
//         const { access_token } = response.data;
//         localStorage.setItem('access_token', access_token);
//         axiosInstance.defaults.headers['Authorization'] = `Bearer ${access_token}`;
//         originalRequest.headers['Authorization'] = `Bearer ${access_token}`;

//         return axiosInstance(originalRequest);
//       } catch (refreshError) {
//         console.error("Erreur lors du rafraîchissement du token", refreshError);
//         await logout();
//         showErrorModal("Votre session a expiré. Veuillez vous reconnecter.");
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// async function Connecte(getData) {
//   try {
//     const response = await axiosInstance.post('/user/signin', getData);
//     console.log(response.data);

//     if (response.data && response.data.access_token) {
//       localStorage.setItem('access_token', response.data.access_token);
//       localStorage.setItem('user_info', JSON.stringify(response.data.user));

//       console.log('Connexion réussie !');
//       return response.data;
//     }
//   } catch (error) {
//     console.error('Erreur de connexion :', error.response ? error.response.data : error.message);
//     throw error;
//   }
// }

// async function logout() {
//   try {
//     await axiosInstance.post('/logout/');
//   } catch (error) {
//     console.error('Erreur lors de la déconnexion:', error);
//   } finally {
//     localStorage.clear();
//     window.location.href = '/login';
//   }
// }

// // src/api/axios.js
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import ModalError from '../components/error/errorModal';
// import { redirect } from 'react-router-dom';
// import { showErrorModal } from './errorModalSevices';

// const baseURL = 'http://localhost:8000'; // Assurez-vous que c'est la bonne URL de votre backend



// // // Autentification

// const axiosInstance = axios.create({
//   baseURL: baseURL,
//   timeout: 5000,
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   },
//   withCredentials: true // Ceci permet à Axios d'envoyer et recevoir des cookies
// });

// // Intercepteur unique pour gérer le token d'authentification et le CSRF token
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Ajout du token d'authentification
//     const token = localStorage.getItem('access_token');
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }

//     // Ajout du CSRF token pour les méthodes non sécurisées
//     if (['post', 'put', 'patch', 'delete'].includes(config.method.toLowerCase())) {
//       const csrfToken = Cookies.get('csrftoken');
//       if (csrfToken) {
//         config.headers['X-CSRFToken'] = csrfToken;
//       }
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)

// );

// // Interce
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       console.log("Tentative de rafraîchissement du token");

//       try {
//         const refreshToken = localStorage.getItem('refresh_token');
//         const response = await axios.post(`${baseURL}/token/`, {
//           refresh: refreshToken
//         });

//         console.log("Réponse du rafraîchissement:", response.data);
//         const { access } = response.data;
//         localStorage.setItem('access_token', access);
//         axiosInstance.defaults.headers['Authorization'] = `Bearer ${access}`;
//         originalRequest.headers['Authorization'] = `Bearer ${access}`;

//         return axiosInstance(originalRequest);
//       } catch (refreshError) {
//         console.error("Erreur lors du rafraîchissement du token", refreshError.response ? refreshError.response.data : refreshError);
//         // Gérer la déconnexion ici
        
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// async function Connecte(getData) {
//   try {
//     const response = await axiosInstance.post('/user/signin', getData);
//     console.log(response.data);

//     if (response.data && response.data.access_token) {
//       localStorage.setItem('access_token', response.data.access_token);
//       localStorage.setItem('user_info', JSON.stringify(response.data.user));
      
//       // Obtenir immédiatement un refresh token
//       const tokenResponse = await axios.post(`${baseURL}/token/`, getData);
//       localStorage.setItem('refresh_token', tokenResponse.data.refresh);

//       console.log('Connexion réussie !');
//       return response.data;
//     }
//   } catch (error) {
//     console.error('Erreur de connexion :', error.response ? error.response.data : error.message);
//     throw error;
//   }
// }

// async function logout() {
//   try {
//     const refreshToken = localStorage.getItem('refresh_token');
//     await axiosInstance.post('/logout/', { refresh: refreshToken });
//   } catch (error) {
//     console.error('Erreur lors de la déconnexion:', error);
//   } finally {
//     localStorage.clear();
//     window.location.href = '/login';
//   }
// }
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import { showErrorModal } from './errorModalSevices';

// const baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000';

// const axiosInstance = axios.create({
//   baseURL: baseURL,
//   timeout: 5000,
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   },
//   withCredentials: true
// });

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('access_token');
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }

//     if (['post', 'put', 'patch', 'delete'].includes(config.method.toLowerCase())) {
//       const csrfToken = Cookies.get('csrftoken');
//       if (csrfToken) {
//         config.headers['X-CSRFToken'] = csrfToken;
//       }
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         const refreshToken = Cookies.get('refresh_token');
//         const refreshResponse = await axios.post(`${baseURL}/token/refresh/`, {
//           refresh: refreshToken
//         });

//         const { access } = refreshResponse.data;

//         localStorage.setItem('access_token', access);
//         axiosInstance.defaults.headers['Authorization'] = `Bearer ${access}`;
//         originalRequest.headers['Authorization'] = `Bearer ${access}`;

//         return axiosInstance(originalRequest);
//       } catch (refreshError) {
//         console.error("Erreur lors du rafraîchissement du token", refreshError);
//         await logout();
//         return Promise.reject(refreshError);
//       }
//     }

//     if (error.response) {
//       showErrorModal(error.response.data.message || "Une erreur s'est produite");
//     }

//     return Promise.reject(error);
//   }
// );

// async function Connecte(getData) {
//   try {
//     const response = await axiosInstance.post('/user/signin', getData);
//     if (response.data && response.data.access_token && response.data.refresh_token) {
//       localStorage.setItem('access_token', response.data.access_token);
//       Cookies.set('refresh_token', response.data.refresh_token, { httpOnly: true, secure: true });
//       localStorage.setItem('user_info', JSON.stringify(response.data.user));
//       console.log('Connexion réussie !');
//       return response.data;
//     }
//   } catch (error) {
//     console.error('Erreur de connexion :', error.response ? error.response.data : error.message);
//     throw error;
//   }
// }

// async function logout() {
//   try {
//     await axiosInstance.post('/user/logout');
//   } catch (error) {
//     console.error('Erreur lors de la déconnexion:', error);
//   } finally {
//     localStorage.clear();
//     Cookies.remove('refresh_token');
//     window.location.href = '/login';
//   }
// }

// {
//     "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIwMjk4Mzc5LCJpYXQiOjE3MjAyOTgwNzksImp0aSI6ImEyMzE5N2E4ZTkzNzQyNDA4ZWUyYzY3ZDkwNzliMDkyIiwidXNlcl9pZCI6Nn0.pVFexA6DeszB_SNbshNiJ9n76ULn5rsyKCYr5GfvLLc",
//     "user": {
//         "id": 6,
//         "email": "kiki2306@example.com",
//         "name": "kiki kiki",
//         "address": "123 Maafple Street",
//         "zip": 12345,
//         "phone": "598-12834",
//         "city": "Springfield",
//         "role": "botanist",
//         "expiration_token": "2024-07-06T23:34:39.929724"
//     }
// }




// async function Connecte(getData) {
//   try {
//     const response = await axiosInstance.post('/user/signin', getData);
//     console.log(response.data);

//     if (response.data && response.data.access_token) {
//       localStorage.setItem('access_token', response.data.access_token);
//       localStorage.setItem('user_info', JSON.stringify(response.data.user));
//       console.log('Connexion réussie !');
//       return response.data; // Retournez les données de réponse
//     }
//   } catch (error) {
//     console.error('Erreur de connexion :', error.response ? error.response.data : error.message);
//     throw error; // Relancez l'erreur pour la gérer dans le composant
//   }
// }

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

function PostCareComment(id_post, dataComment) {
  const response = axiosInstance.post(`http://localhost:8000/attribution/create/care/${id_post}/post/comment`, dataComment)
  return response;
}
// Picture

// function PostImgPostCare(dataPicture ) {
//   const response = axios.post(`http://localhost:8000/picture/create`, dataPicture)
//   return response;
// }

function PostImgPostCare(formData) {
  return axios.post('http://localhost:8000/picture/create', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}


// Care
async function PostCreateCare(formData) {
  const response = await axiosInstance.post('http://localhost:8000/care/create', formData)

}


async function GetOwnedCares() {
  try {
    const response = axiosInstance.get(`http://localhost:8000/owned-cares/`)
    return response;
  } catch (error) {
    showErrorModal(error.message || "Une erreur s'est produite lors de la récupération des détails du post.");
    throw error;
  }


}

async function GetKeepCares() {
  const response = axiosInstance.get(`http://localhost:8000/kept-cares/`)
  return response;
}

async function PostCarePosts(id_care, data) {
  const response = axiosInstance.post(`http://localhost:8000/cares/${id_care}/posts/`, data)
  return response;
}



async function GetALLCare() {
  try {

    const response = await axiosInstance.get(`http://localhost:8000/cares-to-keep/`)
    return response;
  } catch (error) {
    console.log('hfbhjbfjdhsb');
    showErrorModal(error.message || "Une erreur s'est produite lors de la récupération des détails du post.");
    throw error;
  }

}
async function UpdtaCare(data) {
  const response = axiosInstance.put(`http://localhost:8000/keep/${data}`)
  return response;
}



function GetListKeptCares() {
  return axiosInstance.get(`http://localhost:8000/kept-cares/`)
    .catch(error => {
      showErrorModal(error.message || "Une erreur s'est produite .");
      return { data: { cares: [] } }; // Retourne un objet vide en cas d'erreur
    });
}
// Catégory


async function GetALLCat() {

  const response = axiosInstance.get('http://localhost:8000/category');
  return response;



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
  PostCareComment,
  GetOwnedCares,
  GetKeepCares,
  PostCarePosts,
  GetALLCare,
  UpdtaCare,
  GetListKeptCares,
  PostImgPostCare
};


