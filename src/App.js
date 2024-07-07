// import './App.css';
// import Index from './components/index';
// import Blog from './components/blog'
// import { BrowserRouter } from 'react-router-dom';
// import { Routes } from 'react-router-dom';
// import { Route } from 'react-router-dom';
// import Connexion from './pages/connexion';
// import Enregistrement from './pages/enregistrement';
// import ProfilBotaniste from './pages/profilB';
// import ProfilProprietaire from './pages/profilP';
// import Advicee from './pages/advice';
// import ProtectedRouteRole from './api/protected'
// import ChoicesGardes from './pages/choicesGardes';

// import Inscription from './pages/co';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/*" element={<Index />}> </Route>
//         <Route path="/blog" element={<Blog />}> </Route>
//         <Route path="/connexion" element={<Connexion />}> </Route>
//         <Route path="/enregistrement" element={<Enregistrement />}> </Route>


//         <Route path="/profilb" element={<ProfilBotaniste />}> </Route>


//         <Route path="/profilp" element={<ProfilProprietaire />}> </Route>
//         <Route path="/gardes" element={<ChoicesGardes />}> </Route>





//         <Route path="/inscription" element={<Inscription />}> </Route>
//         <Route element={<ProtectedRouteRole allowedRoles={['owner']} />}>
//           <Route path="/advice" element={<Advicee />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';
import Index from './components/index';
import Blog from './components/blog';
import Connexion from './pages/connexion';
import Enregistrement from './pages/enregistrement';
import ProfilBotaniste from './pages/profilB';
import ProfilProprietaire from './pages/profilP';
import Advicee from './pages/advice';
import ProtectedRouteRole from './api/protected';
import ChoicesGardes from './pages/choicesGardes';
import Inscription from './pages/co';
import ErrorModal from './components/error/errorModal'; // Vous devrez créer ce composant
import { setShowErrorModalFunction } from './api/errorModalSevices'; // Créez ce service comme expliqué précédemment

function App() {
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  console.log(errorModalOpen);
  console.log(errorMessage);

  useEffect(() => {
    setShowErrorModalFunction((message) => {
      setErrorMessage(message);
      setErrorModalOpen(true);
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/enregistrement" element={<Enregistrement />} />
          <>
            <Route
              path="/profil"
              element={
                <ProtectedRouteRole
                  allowedRoles={['botanist', 'owner']}
                  element={
                    () => {
                      const user = JSON.parse(localStorage.getItem('user_info'));
                      const userRole = user ? user.role : null;
                      switch (userRole) {
                        case 'botanist':
                          return <ProfilBotaniste />;
                        case 'owner':
                          return <ProfilProprietaire />;
                        default:
                          return <Navigate to="/connexion" />;
                      }
                    }
                  }
                />
              }
            />
          </>
          <Route path="/gardes" element={<ChoicesGardes />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route element={<ProtectedRouteRole allowedRoles={['owner']} />}>
            <Route path="/advice" element={<Advicee />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ErrorModal
        isOpen={errorModalOpen}
        onClose={() => setErrorModalOpen(false)}
        message={errorMessage}
      />
    </>
  );
}

export default App;



