import './App.css';
import Index from './components/index';
import Blog from './components/blog'
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Connexion from './pages/connexion';
import Enregistrement from './pages/enregistrement';
import Profil from './pages/profil';
import Advice from './pages/advice';

import Inscription from './pages/co';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Index />}> </Route>
      <Route path="/blog" element={<Blog />}> </Route>
      <Route path="/connexion" element={<Connexion />}> </Route>
      <Route path="/enregistrement" element={<Enregistrement />}> </Route>
      <Route path="/profil" element={<Profil />}> </Route>
      <Route path="/inscription" element={<Inscription />}> </Route>
      <Route path="/advice" element={<Advice />}> </Route>
     
    </Routes>
  </BrowserRouter>
  );
}

export default App;



