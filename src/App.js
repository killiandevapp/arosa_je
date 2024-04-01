import logo from './logo.svg';
import './App.css';
import Index from './components/index';
import Blog from './components/blog'
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Connexion from './pages/connexion';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Index />}> </Route>
      <Route path="/blog" element={<Blog />}> </Route>
      <Route path="/connexion" element={<Connexion />}> </Route>
     
    </Routes>
  </BrowserRouter>
  );
}

export default App;
