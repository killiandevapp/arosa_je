import React, { useState } from 'react';
import axios from 'axios';

const Inscription = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    address: '',
    zip: '',
    city: '',
    phone: '',
    role: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/user/signup', formData);
      console.log(response);
      if (response.status === 201) {
        alert('Inscription réussie !');
        // Rediriger vers la page de connexion ou autre
      }
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error);
      alert('Erreur lors de l\'inscription. Veuillez réessayer.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} placeholder="Nom complet" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Adresse" required />
      <input type="number" name="zip" value={formData.zip} onChange={handleChange} placeholder="Code postal" required />
      <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Ville" required />
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Téléphone" required />
      <select name="role" value={formData.role} onChange={handleChange} required>
        <option value="">Sélectionnez un rôle</option>
        <option value="owner">Propriétaire</option>
        <option value="botanist">Botaniste</option>
      </select>
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Mot de passe" required />
      <button type="submit">S'inscrire</button>
    </form>
  );
};

export default Inscription;