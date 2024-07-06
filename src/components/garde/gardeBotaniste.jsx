import React, { useEffect, useState } from "react";
import { GetListAttribute, GetListPostCare, GetDetailleCarePost, PostCareComment } from "../../api/conf";
import moment from 'moment';

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
    const [openDetailAndPost, setOpenDetailAndPost] = useState(false)

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
            if (el && el.data && el.data.cares) {
                setDataGarde(el.data.cares)

            } else {
                console.log('error');
            }
        })

    }, [])

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
            const b = document.getElementById('ctnFormComment' + id_post)
            b.classList.add('hidden')

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


    // function getIdGarde(id_care) {
    //     console.log(openDetailAndPost);

    
    //         if (dataGarde) {
    //             const res = GetListPostCare(id_care)
    //             res.then((el) => {
    //                 setDataPost(el.data.posts)

    //             })
    //         }
        



    // }

    function getIdGarde(id_care) {
        const ctnPosComment = document.getElementById('ctnPosComment');
    
        if (ctnPosComment) {
            if (ctnPosComment.classList.contains('hidden')) {
                // Ouvrir le conteneur et charger les posts
                if (dataGarde) {
                    const res = GetListPostCare(id_care);
                    res.then((el) => {
                        setDataPost(el.data.posts);
                        ctnPosComment.classList.remove('hidden');
                        ctnPosComment.classList.add('flex');
                    });
                }
            } else {
                // Fermer le conteneur
                ctnPosComment.classList.add('hidden');
                ctnPosComment.classList.remove('flex');
                setDataPost([]); // Optionnel : vider les données des posts
            }
        }
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
                
                    {/* Détataille de la garde */}
                    {!triggerGarde ? (
                        <>
                            <p className="font-semibold text-xl mt-[25px] mb-[25px]">Surveillance de garde</p>
                
                            <div>
                                {dataGarde ? (
                                    dataGarde.map((el, index) =>
                                        <>
                                            <div onClick={() =>  setOpenDetailAndPost(!openDetailAndPost)}>
                                                <p className=" text-lg font-medium">Garde N°{index + 1}  Titre : {el.title}</p>
                                              
                                                    <div>
                                                        <p>Description : {el.description}</p>
                                                        <p>Début de la garde : <span>{moment(el.started_at).format('DD/MM/YYYY')}</span> </p>
                                                        <p>Fin de la garde : {moment(el.ended_at).format('DD/MM/YYYY')}</p>
                                                        <button className="p-[5px] mb-[35px] bg-xhite w-1/6 p-3 border-2 shadow-xl rounded-lg text-base mt-[15px] font-semibold text-[#5AD058] cursor-pointer" onClick={()=> getIdGarde(el.id)}>Voir post</button>
                                                    </div>

                                             


                                            </div>
                                        </>
                                    )
                                ) : null}

                            </div>
                         
                            <div id="ctnPosComment" className="hidden flex-col mt-[30px] ">
                                {dataPost != undefined ? (
                                    <>
                                        {dataPost.map((el, index) =>
                                            <>
                                                <div className="mb-[30px] shadow-xl border-2">
                                                    <div key={el.id_post} className="grid grid-cols-[80%_20%] ">
                                                        <button onClick={(() => { detaillePost(el.id_post) })} className="ml-[15px] mt-[15px] mb-[15px] text-black text-start "><span className="font-semibold">Titre du post  : </span>{el.title}</button>
                                                        <button className=" text-[#5AD058] font-bold" onClick={(() => { openFormComment(el.id_post) })}>Cree commentaire</button>
                                                    </div>
                                                    <div className="ctnFormComment hidden flex-col" id={"ctnFormComment" + el.id_post}>
                                                        <input className="m-[15px] p-[10px]" type="text" placeholder="Commentaire" onChange={(e) => setDataComment({ comments: e.target.value })} />
                                                        <button className="m-[15px] bg-[#5AD058] w-[200px] p-[10px] rounded-lg text-white font-semibold " onClick={() => addComment(el.id_post)}>Faire commentaire</button>
                                                    </div>


                                                    <div className="ctnDeatilleBotaniste hidden flex-col p-[20px]" id={'ctnDeatilleBotaniste' + el.id_post}>
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