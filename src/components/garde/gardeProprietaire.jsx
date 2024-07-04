

import React, { useEffect, useState } from "react";



export default function GardeProprietaire() {
    // Trigger Garde
    const [triggerGarde, setTriggerGarde] = useState(false)
    // Data de mes gardes
    const [dataGarde, setDataGarde] = useState({
        "title": '',
        "description": ''
    })
    // Booléen vérifiant si une garde est en cours
    const [etatGarde, setEtatGarde] = useState(false)
    // Booléen ouvre est ferme le formulaire de demande de garde
    const [etatGardeForm, setEtatGardeForm] = useState(false)
    // Booléen vérifiant si l'utisateur garde une plante
    const [etatGardiennage, setEtatGardiennage] = useState(false)
    // Booléen ouvre est ferme le formulaire de demande de garde
    const [etatGardiennageForm, setEtatGardiennageForm] = useState(false)


    // Ici je dois verifier si :
    // 1) l'utilisateur garde une plante (etatGarde)  --> garde
    // 2) l'utilisateur ce fait garder une plante  (etatGardiennage) --> gardien
    useEffect(() => {
        
    }, [])




    // Function pour sauvegarder la garde

    function saveGarde() {


        console.log('ici on sauvegarde la garde');

    }




    return (
        <>

            <div>
                <div className="grid grid-cols-2 w-full">
                    <div className="flex justify-center">
                        <input value='Garde' type="button" className="bg-[#5AD058] w-1/3 p-3 rounded-lg text-base mt-[15px] font-semibold text-white cursor-pointer"
                            onClick={() => { setTriggerGarde(true) }}
                        />

                    </div>
                    <div className="flex justify-center">
                        <input value='Historique' type="button" className="bg-[#5AD058] w-1/3 p-3 rounded-lg text-base mt-[15px] font-semibold text-white cursor-pointer"
                            onClick={() => { setTriggerGarde(false) }}
                        />
                    </div>

                </div>
                <div>
                    {triggerGarde ? (<>

                        <div className="mb-[100px]">
                            <h3 className="text-lg font-semibold">Garde</h3>
                            {/* L'utilisateur peut demander une garde */}
                            <>
                                {!etatGarde ? (
                                    <>
                                        <p>Pas de garde en cour</p>
                                        {/* Pas de demande de garde en cour */}

                                        {etatGardeForm ? (
                                            <>
                                                <div className="mt-[25px] mb-[25px]">
                                                    <div>
                                                        <input placeholder="Titre" type="text" name="title" onChange={(e) => { setDataGarde(prev => ({ ...prev, title: e.target.value })) }} />
                                                        <input placeholder="Description" type="text" name="description" onChange={(e) => { setDataGarde(prev => ({ ...prev, description: e.target.value })) }} />
                                                    </div>
                                                    <div>
                                                        <input value='Sauvegarder la garde' type="button" className="bg-[#5AD058] w-1/3 p-3 rounded-lg text-base mt-[15px] font-semibold text-white cursor-pointer"
                                                            onClick={() => { saveGarde() }}
                                                        /> </div>
                                                </div>

                                            </>

                                        ) : null}


                                        <input value={!etatGardeForm ? 'Demande de garde' : 'Annuler'} type="button" className="bg-[#5AD058] w-1/3 p-3 rounded-lg text-base mt-[15px] font-semibold text-white cursor-pointer"
                                            onClick={() => { setEtatGardeForm(!etatGardeForm) }}
                                        />
                                    </>
                                ) :
                                    (
                                        <>
                                            <p>Garde en cour</p>
                                            {/* Lister les post qui est lier a cette garde et a cette utilisateur */}

                                            {/* Deux possibiliter : 
                                           1 er : 
                                           
                                           */}

                                        </>
                                    )}
                            </>

                        </div>


                        <div>
                            <h3 className="text-lg font-semibold">Gardiennage</h3>
                            {/* L'utilisateur peut demander a garder une plante */}
                            {etatGardiennage ? (
                                <>
                                    <p>Vous ne gardez pas de plante actuellement</p>
                                </>
                            ) : (
                                <>
                                    <h3>Création de publication. </h3>

                                    {!etatGardiennageForm ? (
                                        <>
                                            <div className="mt-[25px] mb-[25px]">
                                                <div>
                                                    <input placeholder="Titre" type="text" name="title" onChange={(e) => { setDataGarde(prev => ({ ...prev, title: e.target.value })) }} />
                                                    <input placeholder="Description" type="text" name="description" onChange={(e) => { setDataGarde(prev => ({ ...prev, description: e.target.value })) }} />
                                                    <input type="file" placeholder="Prendre photo" />
                                                </div>
                                                <div>
                                                    <input value='Crée une la publication' type="button" className="bg-[#5AD058] w-1/3 p-3 rounded-lg text-base mt-[15px] font-semibold text-white cursor-pointer"
                                                        onClick={() => { saveGarde() }}
                                                    /> </div>
                                            </div>

                                        </>

                                    ) : null}
                                </>
                            )}

                        </div>

                    </>



                    ) : (

                        <>

                            <p className="text-lg font-semibold">Historique Garde </p>
                            <div>
                                <h3>Mes gardes :</h3>
                                {/* Lister les gardes de l'utilisateur */}
                            </div>
                            <div>
                                <h3>Propriétaire de plante : </h3>
                                {/* Lister les gardes effectuer par d'autres utilisateur */}
                            </div>

                        </>



                    )}

                </div>
            </div>

        </>
    );
}

{/* {dataGarde ? (
                            <p>Pas de garde en cour</p>
                            
                            ) : null}</> */}