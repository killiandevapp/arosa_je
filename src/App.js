import './App.css';
import Index from './components/index';
import Blog from './components/blog'
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Connexion from './pages/connexion';
import Enregistrement from './pages/enregistrement';
import ProfilBotaniste from './pages/profilB';
import ProfilProprietaire from './pages/profilP';
import Advicee from './pages/advice';
import ProtectedRouteRole from './api/protected'
import ChoicesGardes from './pages/choicesGardes';

import Inscription from './pages/co';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Index />}> </Route>
        <Route path="/blog" element={<Blog />}> </Route>
        <Route path="/connexion" element={<Connexion />}> </Route>
        <Route path="/enregistrement" element={<Enregistrement />}> </Route>


        <Route path="/profilb" element={<ProfilBotaniste />}> </Route>


        <Route path="/profilp" element={<ProfilProprietaire />}> </Route>
        <Route path="/gardes" element={<ChoicesGardes />}> </Route>
        

    


        <Route path="/inscription" element={<Inscription />}> </Route>
        <Route element={<ProtectedRouteRole allowedRoles={['owner']} />}>
          <Route path="/advice" element={<Advicee />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



