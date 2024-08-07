
import React from "react";
import '../styles/enregistrement.css'
import { useState } from "react";
import axios from 'axios';

export default function Enregistrement() {
    const [userData, setUserData] = useState({
        "fullname": "kDi kiki",
        "email": "ki3066@example.com",
        "address": "123 Maafple Street",
        "password": "kiki1234",
        "zip": 12345,
        "city": "Springfield",
        "phone": "598-12834",
        "role": "botanist"
    });

    // "fullname": "kiki kiki",
    // "email": "kiki2307@example.com",
    // "address": "123 Maafple Street",
    // "password":"kiki1234",
    // "zip": 12345,
    // "city": "Springfield",
    // "phone": "598-12804",
    // "role": "owner"

    
    // "fullname": "kiki kiki",
    // "email": "kiki2306@example.com",
    // "address": "123 Maafple Street",
    // "password":"kiki1234",
    // "zip": 12345,
    // "city": "Springfield",
    // "phone": "598-12834",
    // "role": "botanist"



    // co new date = 

    // "fullname": "kik bondi",
    // "email": "kikibondi@example.com",
    // "address": "123 Male Street",
    // "password":"kiki1234",
    // "zip": 1345,
    // "city": "Springfield",
    // "phone": "598-72834",
    // "role": "owner"

    const [isBotaniste, setIsBotaniste] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleBotanisteChange = () => {
        setIsBotaniste(prevState => !prevState); // Inverse la valeur actuelle de isBotaniste
        setUserData(prevState => ({
            ...prevState,
            role: isBotaniste ? "utilisateur" : "botaniste"
        }));
    };

    const handleEnregistrement = () => {
        // Effectuez ici les actions nécessaires pour enregistrer les données
        // console.log("Données d'enregistrement :", userData);
        const response = axios.post("http://localhost:8000/user/signup", userData)
        console.log(response);

    };

    return (
        <>
            <div className="container">
                <h2>Inscription</h2>
                <p>Débutez dès maintenant chez arosa-je !</p>
                <p>Informations personnelles</p>
                <form>
                    <div className="form-group">

                        <div className="half">
                            <label htmlFor="fullname">Nom complet :</label>
                            <input type="text" id="fullname" name="fullname" value={userData.fullname} onChange={handleChange} required />
                            <img src={require("../images/emailLogo.png")} alt="" srcset="" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="half">
                            <label htmlFor="adresseEmail">Adresse e-mail:</label>
                            <input type="email" id="adresseEmail" name="email" value={userData.email} onChange={handleChange} required />
                            <img src={require("../images/emailLogo.png")} alt="" srcset="" />
                        </div>
                        <div className="half">
                            <label htmlFor="telephone">Téléphone:</label>
                            <input type="tel" id="telephone" name="phone" value={userData.phone} onChange={handleChange} required />
                            <img src={require("../images/emailLogo.png")} alt="" srcset="" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="half">
                            <label htmlFor="adress">Adresse:</label>
                            <input type="text" id="adress" name="adress" value={userData.adress} onChange={handleChange} required />
                            <img src={require("../images/emailLogo.png")} alt="" srcset="" />
                        </div>
                        <div className="half">
                            <label htmlFor="zip">Code postal:</label>
                            <input type="text" id="zip" name="zip" value={userData.zip} onChange={handleChange} required />
                            <img src={require("../images/emailLogo.png")} alt="" srcset="" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="half">
                            <label htmlFor="ville">Ville:</label>
                            <input type="text" id="ville" name="city" value={userData.city} onChange={handleChange} required />
                            <img src={require("../images/emailLogo.png")} alt="" srcset="" />
                        </div>
                        <div className="half">
                            <label htmlFor="mdp">Mot de passe:</label>
                            <input type="password" id="mdp" name="password" value={userData.password} onChange={handleChange} required />
                            <img src={require("../images/emailLogo.png")} alt="" srcset="" />
                        </div>
                    </div>
                    <label htmlFor="botaniste">Botaniste</label>
                    <input type="checkbox" name="botaniste" id="botaniste" checked={isBotaniste} onChange={handleBotanisteChange} />
                    <button type="button" onClick={handleEnregistrement}>S'enregistrer</button>
                </form>
            </div>
            <div className="icon-container">
                <img src="reste_connecte.png" alt="Reste connecté" />
            </div>
        </>
    );
}
