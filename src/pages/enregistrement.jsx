
import React from "react";
import '../styles/enregistrement.css'

export default function Enregistrement() {
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
                        </div>
                        <div className="half">
                            <label htmlFor="prenom">Prénom:</label>
                            <input type="text" id="prenom" name="prenom" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="half">
                            <label htmlFor="adresseEmail">Adresse e-mail:</label>
                            <input type="text" id="adresse" name="adresse" required />
                        </div>
                        <div className="half">
                            <label htmlFor="telephone">Téléphone:</label>
                            <input type="tel" id="adresseEmail" name="adresseEmail" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="half">
                            <label htmlFor="adresse">Adresse:</label>
                            <input type="text" id="adresse" name="adresse" required />
                        </div>
                        <div className="half">
                            <label htmlFor="Ville">Ville:</label>
                            <input type="tel" id="ville" name="ville" required />
                        </div>
                    </div>
                    <div className="password-section">
                        <div className="form-groupMdp">
                            <label htmlFor="mdp">Mot de passe:</label>
                            <input type="password" id="mdp" name="mdp" required />
                        </div>
                        <div className="form-groupMdp">
                            <label htmlFor="reMdp">Confirmer mot de passe:</label>
                            <input type="password" id="reMdp" name="reMdp" required />
                        </div>
                    </div>
                    <button type="submit">S'enregistrer</button>
                </form>
            </div>
            <div className="icon-container">
                <img src="reste_connecte.png" alt="Reste connecté" />
            </div>
        </>
    );
}
