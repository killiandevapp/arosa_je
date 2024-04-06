
import React from "react";
import '../styles/enregistrement.css'
import { useState } from "react";
import axios from 'axios';

export default function Enregistrement() {
    //desactiver pour les tests
   //const [getDataEnregistrement, setGetDataEnregistrement] = useState({
   //    "login": '',
   //    "password": ''
   //});

    function postRegister() {
        var body = {
            "name": "tom",
            "firstname": "vincent",
            "email": "ikikikikiki@gmail.com",
            "adress": "2 de qi",
            "zip": 31700,
            "city": "Nice",
            "phone": "0676969895",
            "password": "kiki",
            "role": "user",
            "lastconx": "2024-05-16T14:26:00Z",
            "idadvice": null

        }
        
      const response = axios.post("http://127.0.0.1:8000/user/create/", body)
      console.log(response);
    }
    return (
        <>
            <div className="container">
                <h2>Inscription</h2>
                <p>Débutez dès maintenant chez arosa-je !</p>
                <p>Informations personnelles</p>
                <form action="#">
                    <div className="form-group">
                        <div className="half">
                            <label htmlFor="nom">Nom:</label>
                            <input type="text" id="nom" name="nom" required />
                            <img src={require("../images/emailLogo.png")} alt="" srcset="" />
                        </div>
                        <div className="half">
                            <label htmlFor="prenom">Prénom:</label>
                            <input type="text" id="prenom" name="prenom" required />
                            <img src={require("../images/emailLogo.png")} alt="" srcset="" />

                        </div>
                    </div>
                    <div className="form-group">
                        <div className="half">
                            <label htmlFor="adresseEmail">Adresse e-mail:</label>
                            <input type="text" id="adresseEmail" name="adresse" required />
                            <img src={require("../images/emailLogo.png")} alt="" srcset="" />

                        </div>
                        <div className="half">
                            <label htmlFor="telephone">Téléphone:</label>
                            <input type="telehone" id="telephone" name="telephone" required />
                            <img src={require("../images/emailLogo.png")} alt="" srcset="" />

                        </div>
                    </div>
                    <div className="form-group">
                        <div className="half">
                            <label htmlFor="adresse">Adresse:</label>
                            <input type="text" id="adresse" name="adresse" required />
                            <img src={require("../images/emailLogo.png")} alt="" srcset="" />

                        </div>
                        <div className="half">
                            <label htmlFor="Ville">Ville:</label>
                            <input type="tel" id="ville" name="ville" required />
                            <img src={require("../images/emailLogo.png")} alt="" srcset="" />

                        </div>
                    </div>
                    <div className="password-section">
                        <div className="form-groupMdp">
                            <label htmlFor="mdp">Mot de passe:</label>
                            <input type="password" id="mdp" name="mdp" required />
                            <img src={require("../images/emailLogo.png")} alt="" srcset="" />

                        </div>
                        <div className="form-groupMdp">
                            <label htmlFor="reMdp">Confirmer mot de passe:</label>
                            <input type="password" id="reMdp" name="reMdp" required />
                            <img src={require("../images/emailLogo.png")} alt="" srcset="" />

                        </div>
                    </div>
                    <label htmlFor="botaniste">Botaniste</label>
                    <input type="checkbox" name="botaniste" id="botaniste" placeholder="botaniste" />
                    <button type="submit" id="enregistrer" onClick={()=> {postRegister()}}>S'enregistrer</button>
                </form>
            </div>
            <div className="icon-container">
                <img src="reste_connecte.png" alt="Reste connecté" />
            </div>
        </>
    );
}
