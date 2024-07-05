// import React, { useState } from "react";
// import '../styles/connexion.css'
// import axios from 'axios';


// export default function Connexion() {
//     const [getData, setGetData] = useState({
//         "email": "kiki1rferfe234@example.com",
//         "password":"12fer344"
//     });

//     function triggerConnection(){
//         const response = axios.post("http://localhost:8000/user/signin", getData)
       
//         response.then((el)=> console.log(el))

//     }


    

//     return (
//         <section id="sctConnexion1">
//             <div id="div1CtnConnexion">
//                 <div id="ssCnFormBlog">
//                     <div>
//                         <h2>Vous revoilà !</h2>
//                         <p>Entrez vos identifiants pour vous connecter.</p>
//                     </div>
//                     <div id="ctnInputConnexion">
//                         <div>
//                             <input placeholder="Entrez votre adresse e-mail" type="text" onChange={(e) => setGetData({ ...getData, login: e.target.value })} />
//                             <img src={require('../images/emailLogo.png')}  alt="" srcset="" />

//                         </div>
//                         <div>
//                             <input placeholder="Entrez votre mot de passe" type="text" onChange={(e) => setGetData({ ...getData, password: e.target.value })} />
//                             <img src={require('../images/passwordLogo.png')}  alt="" srcset="" />

//                         </div>
//                     </div>
//                     <div id="ctnBtnConnexion">
//                         <button onClick={()=> {triggerConnection()}}>Connexion</button>
//                     </div>

//                 </div>
//             </div>
//             <div id="div2CtnConnexion">
//                 <p>J’ai <span className="colorGrenn">oublié  mon mot de passe </span></p>
//                 <p>Pas encore inscrit ? <a href="/enregistrement" className="colorGrenn"> Creér mon compte</a></p>

//                 {/* Contenu du deuxième conteneur */}
//             </div>
//         </section>
//     );
// }

// src/components/Connexion.jsx
import React, { useState } from 'react';
import {Connecte} from "../api/conf"
// import axiosInstance from '../api/conf';

export default function Connexion() {
    // const [getData, setGetData] = useState({
    //     "email": "killianvincent@example.com",
    //     "password":"kiki1234"
    // });
        const [getData, setGetData] = useState({
            "email": "kiki2307@example.com",
            "password":"kiki1234"
    });






    async function triggerConnection(e) {
        e.preventDefault(); // Empêche le comportement par défaut du bouton
        try {
            const response = await Connecte(getData);
            console.log(response); // Gérez la réponse ici
        } catch (error) {
            console.error("Erreur lors de la connexion:", error);
        }
    }


    return (
        <section id="sctConnexion1">
            <div id="div1CtnConnexion">
                <div id="ssCnFormBlog">
                    <div>
                        <h2>Vous revoilà !</h2>
                        <p>Entrez vos identifiants pour vous connecter.</p>
                    </div>
                    <div id="ctnInputConnexion">
                        {/* <div>
                            <input 
                                placeholder="Entrez votre adresse e-mail" 
                                type="text" 
                                onChange={(e) => setGetData({ ...getData, email: e.target.value })} 
                            />
                            <img src={require('../images/emailLogo.png')} alt="" />
                        </div>
                        <div>
                            <input 
                                placeholder="Entrez votre mot de passe" 
                                type="password" 
                                onChange={(e) => setGetData({ ...getData, password: e.target.value })} 
                            />
                            <img src={require('../images/passwordLogo.png')} alt="" />
                        </div> */}
                    </div>
                    <div id="ctnBtnConnexion">
                        <button onClick={triggerConnection}>Connexion</button>
                    </div>
                </div>
            </div>
            <div id="div2CtnConnexion">
                <p>J'ai <span className="colorGrenn">oublié mon mot de passe</span></p>
                <p>Pas encore inscrit ? <a href="/enregistrement" className="colorGrenn">Créer mon compte</a></p>
            </div>
        </section>
    );
}