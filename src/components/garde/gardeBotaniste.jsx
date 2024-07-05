import React, { useEffect, useState } from "react";
import { GetListAttribute, GetListPostCare, GetDetailleCarePost, PostCareComment } from "../../api/conf";


export default function GardeBotaniste() {
    // Trigger Garde
    // A noter voir si i y a plusieur garde lier a cette utilisateur
    // Voir si la requete selectoionne que la garde actuel
    // Ce qui sera aussi pratique pour l'historique
    const [triggerGarde, setTriggerGarde] = useState(false)
    const [dataGarde, setDataGarde] = useState()
    const [dataPost, setDataPost] = useState()
    const [dataPostDetaille, setDataPostDetaille] = useState()
    const [openFormAddComment, setOpenFormAddComment] = useState(false)

    const [dataComment, setDataComment] = useState({
        "comments": '',
        "createdAt": new Date()

    })
    function listGarde() {

    }

    console.log(new Date());
    // Récuperation de la garde du botaniste si il est lier a une garde 
    useEffect(() => {
        const res = GetListAttribute()
        res.then((el) => {
            setDataGarde(el.data.cares)
        })

    }, [])

    // Si nous recuperont une garde alor on recupere la list des post
    useEffect(() => {
        // if (dataGarde) {
        //     const res = GetListPostCare(dataGarde[0])
        //     res.then((el) => {
        //         setDataPost(el.data.posts)
        //     })

        // }

    }, [dataGarde])

    // Récuperer les détaille d'un post
    function detaillePost(id_post) {
        // Ici je veut que tu mette a tou les element qui on  ctnDeatilleBotaniste comme classe a hidden
        const allDetailContainers = document.querySelectorAll('.ctnDeatilleBotaniste');
        const targetContainer = document.getElementById('ctnDeatilleBotaniste' + id_post);

        allDetailContainers.forEach(container => {
            if (container !== targetContainer) {
                container.classList.add('hidden');
                container.classList.remove('flex');
            }
        });

        if (targetContainer) {
            if (targetContainer.classList.contains('hidden')) {
                // Ouvrir les détails
                const res = GetDetailleCarePost(id_post);
                res.then((el) => {
                    setDataPostDetaille(el.data);
                });
                targetContainer.classList.remove('hidden');
                targetContainer.classList.add('flex');
            } else {
                // Fermer les détails
                targetContainer.classList.add('hidden');
                targetContainer.classList.remove('flex');
            }
        }

    }
    //Ajouter un commentaire
    function addComment(id_post) {
        const res = PostCareComment(id_post, dataComment)
        res.then((el) => {
            console.log(el)
        })
    }

    function openFormComment(id_post) {
        if (id_post) {
            const allFormContainers = document.querySelectorAll('.ctnFormComment');
            const targetContainer = document.getElementById('ctnFormComment' + id_post);

            allFormContainers.forEach(container => {
                if (container !== targetContainer) {
                    container.classList.add('hidden');
                    container.classList.remove('flex');
                }
            });

            if (targetContainer) {
                targetContainer.classList.toggle('hidden');
                targetContainer.classList.toggle('flex');
            }

        }
    }



    if (dataGarde) {
        dataGarde.map((el) => { console.log(el.title) })

    }
    console.log(dataPostDetaille);

    if (dataPost) {
        console.log(dataPost);
        dataPost.map((el) => { console.log(el.title) })

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
                    {!triggerGarde ? (
                        <>
                            <p>Surveillance de garde</p>
                            <p>Détaille de la garde : </p>
                            <div>
                                {dataGarde ? (
                                    dataGarde.map((el) =>
                                        <>
                                            <p>Titre : {el.title}</p>
                                            <p>Description : {el.description}</p>
                                            <p>Début de la garde : {el.started_at}</p>
                                            <p>Fin de la garde : {el.ended_at}</p>

                                        </>
                                    )
                                ) : null}

                            </div>
                            <p className="text-lg font-medium mt-[25px]">Voici les post : </p>
                            <div>
                                {dataPost != undefined ? (
                                    <>
                                        {dataPost.map((el, index) =>
                                            <>
                                                <div className="mb-[15px]">
                                                    <div key={el.id_post} className="grid grid-cols-[80%_20%] bg-zinc-200">
                                                        <button onClick={(() => { detaillePost(el.id_post) })} className="mt-[15px] mb-[15px] ">Post :  {el.title}</button>
                                                        <button onClick={(() => { openFormComment(el.id_post) })}>Cree commentaire</button>
                                                    </div>
                                                    <div className="ctnFormComment hidden flex-col" id={"ctnFormComment" + el.id_post}>
                                                        <input className="m-[15px] p-[10px]" type="text" placeholder="Commentaire" onChange={(e) => setDataComment({ comments: e.target.value })} />
                                                        <button className="m-[15px] bg-[#5AD058] w-[200px] p-[10px] rounded-lg text-white font-semibold " onClick={() => addComment(el.id_post)}>Faire commentaire</button>
                                                    </div>


                                                    <div className="ctnDeatilleBotaniste hidden  flex-col" id={'ctnDeatilleBotaniste' + el.id_post}>
                                                        <p className="text-lg font-medium mb-[25px] mt-[15px]">Détaille : </p>
                                                        <p>Titre : {el.title}</p>
                                                        <p>Description : {el.description}</p>

                                                        {dataPostDetaille ? (
                                                            <>
                                                                {dataPostDetaille.comments.length > 0 ? (

                                                                    <div>
                                                                        <p className="text-base font-medium mb-[25px] mt-[15px]">Commentaire : </p>
                                                                        {dataPostDetaille.comments.map((el, index) => <p>Commentaire n°{index + 1} : {el.comments}</p>)}
                                                                    </div>
                                                                ) : (<p>Pas de commentaire pour ce post</p>)}

                                                            </>

                                                        ) : (

                                                            <p>Pas de commentaire</p>


                                                        )}
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </>
                                ) : null
                                }
                                {/* {dataGarde ? (
                                    dataGarde.map((el) =>
                                        <>
                                            <p>Titre : {el.title}</p>
                                            <p>Description : {el.description}</p>
                                            <p>Début de la garde : {el.started_at}</p>
                                            <p>Fin de la garde : {el.ended_at}</p>
                                        </>
                                    )
                                ) : null} */}


                            </div>

                        </>


                    ) : (

                        <>

                            <p>Historique Garde </p>
                            <div>
                                <button onClick={() => { listGarde() }}>
                                    enregistrer
                                </button>   </div>



                        </>



                    )}

                </div>
            </div>
        </>
    );
}