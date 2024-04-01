import React, { useState } from "react";

export default function Connexion() {
    const [getData, setGetData] = useState({
        "login": '',
        "password": ''
    });

    console.log(getData);

    return (
        <section id="sctConnexion1">
            <div id="div1CtnConnexion">
                <div id="ctn">
                    <input type="text" onChange={(e) => setGetData({ ...getData, login: e.target.value })} />
                    <input type="text" onChange={(e) => setGetData({ ...getData, password: e.target.value })} />

                </div>
            </div>
            <div id="div2CtnConnexion">
                {/* Contenu du deuxième conteneur */}
            </div>
        </section>
    );
}
