import React, { useState } from "react";
import '../styles/connexion.css'

export default function Connexion() {
    const [getData, setGetData] = useState({
        "login": '',
        "password": ''
    });

    console.log(getData);

    return (
        <section id="sctConnexion1">
            <div id="div1CtnConnexion">
                <div id="ssCnFormBlog">
                    <div>
                        <h2>Vous revoilà !</h2>
                        <p>Entrez vos identifiants pour vous connecter.</p>
                    </div>
                    <div id="ctnInputConnexion">
                        <div>
                            <input placeholder="Entrez votre adresse e-mail" type="text" onChange={(e) => setGetData({ ...getData, login: e.target.value })} />
                            <img src={require('../images/emailLogo.png')}  alt="" srcset="" />

                        </div>
                        <div>
                            <input placeholder="Entrez votre mot de passe" type="text" onChange={(e) => setGetData({ ...getData, password: e.target.value })} />
                            <img src={require('../images/passwordLogo.png')}  alt="" srcset="" />

                        </div>
                    </div>
                    <div id="ctnBtnConnexion">
                        <button>Connexion</button>
                    </div>

                </div>
            </div>
            <div id="div2CtnConnexion">
                <p>J’ai <span className="colorGrenn">oublié  mon mot de passe </span></p>
                <p>Pas encore inscrit ? <a href="/enregistrement" className="colorGrenn"> Creér mon compte</a></p>

                {/* Contenu du deuxième conteneur */}
            </div>
        </section>
    );
}
