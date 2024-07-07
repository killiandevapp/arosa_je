

import React, { useEffect, useState } from "react";
import { PostCreateCare } from "../../api/conf";
import { testAdd } from "../../api/conf";
import { GetOwnedCares } from "../../api/conf";
import { GetListPostCare } from "../../api/conf";
import { PostCarePosts } from "../../api/conf";
import { GetListKeptCares } from "../../api/conf";
import { PostImgPostCare } from "../../api/conf";
import ModalError from "../error/errorModal";
import moment from "moment";

export default function GardeProprietaire() {
    // Trigger Garde
    const [triggerGarde, setTriggerGarde] = useState(false)
    const [idUser, setIdUser] = useState()
    // Data de mes gardes
    const [dataGarde, setDataGarde] = useState({

        "title": '',
        "description": '',
        "started_at": '',
        "ended_at": '',
        "active": 0,
        "owner": '',
    })
    const [dataPost, setDataPost] = useState({
        "title": 'testAddIMg',
        "description": 'descriptionPost22',
        "visibility": true,
        "read": false,
        "id_care": ''


    })
    const [dataImgPost, setDataImgPost] = useState({
        "picture": '',
        "post_id": ''
    })

    const [readImgPost, setReadImgPost] = useState({
        "picture": ''
    })
    const [listPostCare, setListPostCare] = useState()

    // Booléen vérifiant si une garde est en cours
    const [etatGarde, setEtatGarde] = useState(false)
    // Booléen ouvre est ferme le formulaire de demande de garde
    const [etatGardeForm, setEtatGardeForm] = useState(false)
    // Booléen vérifiant si l'utisateur garde une plante
    const [etatGardiennage, setEtatGardiennage] = useState(false)
    // Booléen ouvre est ferme le formulaire de demande de garde
    const [etatGardiennageForm, setEtatGardiennageForm] = useState(false)

    // Ouverture fermeture demande de garde
    const [openFormAddCare, setOpenFormAddCare] = useState(false)
    // Stock la liste des gardes effectuer
    const [listCareOwner, setListCareOwner] = useState()
    // Ouvre et ferme les donnés de la partie mes plantes garder
    const [openDataOwnerCare, setOpenDataOwnerCare] = useState(false)

    // Ouvre et ferme les donnés de la partie de mes garde effectué
    const [openDataKeeper, setOpenDataKeeper] = useState(false)

    // List des gardes prise 


    const [listDataKeeper, setDataKeeper] = useState([])
    // Message de validation || erreur 
    const [messageResponse, setMessageResponse] = useState()
    // Trigger message
    const [triggerMessage, setTriggerMessage] = useState(false)














    // Ici je dois verifier si :
    // 1) l'utilisateur garde une plante (etatGarde)  --> garde
    // 2) l'utilisateur ce fait garder une plante (etatGardiennage) --> gardien


    useEffect(() => {
        const userInfoString = localStorage.getItem('user_info')
        if(userInfoString){
        const userInfo = JSON.parse(userInfoString);
        const idd = userInfo.id;
        setDataGarde({ ...dataGarde, owner: idd })
 

        const res = GetOwnedCares()
        res.then((el) => {
           
            if (el.status === 200) {
                setListCareOwner(el.data.cares)
            }

        })    
        }
        






    }, [])
    useEffect(() => {



        if (listCareOwner) {
            // const r = PostCreateCare()
      

        }
    }, [listCareOwner])




    // Fonction ouvrant le détaille d'un blog

    function openDeatailGarde(id_care) {

        if (id_care) {
            const r = GetListPostCare(id_care)
            r.then((item) => {
   
                setListPostCare(item.data.posts)

            })

            // On reccupere le detaille 
            const allFormContainers = document.querySelectorAll('.ctnDeatilGarde');
            const targetContainer = document.getElementById('ctnDeatilGarde' + id_care);

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

    function openDetailAndAddPost(id_care) {

        if (id_care) {
            setDataPost({ ...dataPost, id_care: id_care })
           

            // On reccupere le detaille 
            const allFormContainers = document.querySelectorAll('.ctnDeatailAndPost');
            const targetContainer = document.getElementById('ctnDeatailAndPost' + id_care);

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
    // Envoyer un post kept cares


    // Afficher les plante a garder


    useEffect(() => {
        const r = GetListKeptCares()
        r.then((i) => {
            setDataKeeper(i.data.cares);
        })
    }, [])



    // Function pour sauvegarder la garde

    function saveGarde() {
        const res = PostCreateCare(dataGarde)
        console.log('ici on sauvegarde la garde');

    }



    function savePost(id_care) {

        const t = PostCarePosts(id_care, dataPost)
        t.then((e) => {
            if (e.data.id_post) {
                const responseIdPost = e.data.id_post;
                const my = {
                    "picture": dataImgPost.picture,
                    "post": responseIdPost
                }
                const b = PostImgPostCare(my);
                
            }

        }


        )
    }





    function AddImgPost(event) {
        const file = event.target.files[0];
        setDataImgPost({... dataImgPost, picture: file})
        if (file) {


            const reader = new FileReader();
            reader.onloadend = () => {
                setReadImgPost(prevState => ({
                    ...prevState,
                    picture: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    }



    return (
        <>


            <div className="grid h-[250px] grid-cols-[50%_50%]">
                <div className="flex items-center justify-center" onClick={() => setOpenDataOwnerCare(!openDataOwnerCare)}>
                    <div className="h-[70%] p-[15px] w-9/12 cursor-pointer rounded-xl shadow-xl border border-gray-300 flex flex-col justify-center gap-[15%]	">
                        <h3 className="text-lg font-medium"> Plante qui ont été confiées à d'autres.</h3>
                        <p className="text-base text-gray-500">Affichage les gardes et les posts des plante qui ont été confiées à d'autres.</p>
                    </div>
                </div>
                <div className="flex items-center justify-center" onClick={() => { setOpenDataKeeper(!openDataKeeper) }}>
                    <div className="h-[70%] p-[15px] w-9/12 cursor-pointer rounded-xl shadow-xl border border-gray-300 flex flex-col justify-center gap-[15%]	">
                        <h3 className="text-lg font-medium">Mes plantes gardées</h3>
                        <p className="text-base text-gray-500">Visualisez les plantes que je garde et publier des posts .</p>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={() => { setOpenFormAddCare(!openFormAddCare) }} className="p-[15px] mb-[35px] bg-xhite w-1/6 p-5 border-2 shadow-xl rounded-lg text-base mt-[15px] font-semibold text-[#5AD058] cursor-pointe">Créé une garde</button>

            </div>

            {/* Formulaire demande de garde */}

            {openFormAddCare ? (
                <>
                    <div className="flex flex-col duration-100 mt-[40px] ml-[40px]">
                        <input className="mt-[10px]" placeholder="Titre" type="text" name="title" onChange={(e) => { setDataGarde(prev => ({ ...prev, title: e.target.value })) }} />
                        <input className="mt-[10px]" placeholder="Description" type="text" name="description" onChange={(e) => { setDataGarde(prev => ({ ...prev, description: e.target.value })) }} />
                        <label className="mt-[10px]">Date de début</label>
                        <input className="w-1/4" type="date" name="Date début" onChange={(e) => { setDataGarde(prev => ({ ...prev, started_at: e.target.value })) }} />
                        <label className="mt-[10px]">Date de fin</label>
                        <input className="w-1/4" type="date" name="Date fin" onChange={(e) => { setDataGarde(prev => ({ ...prev, ended_at: e.target.value })) }} />
                        <button className="p-[5px] mb-[35px] bg-xhite w-1/6 p-3 border-2 mt-[35px] shadow-xl rounded-lg text-base mt-[15px] font-semibold text-[#5AD058] cursor-pointe" onClick={(() => saveGarde())}>Sauvegarder</button>

                    </div>


                </>
            ) : null}

            {/* Affichage des plante qui ont été confiées à d'autres. */}
            {openDataOwnerCare ? (

                <>
                    <div>
                        <div>
                            <h3 className="font-semibold text-xl mt-[25px] mb-[25px]">Plante ont été confiées à d'autres. </h3>

                            <div>
                                {listCareOwner ? ( 
                                listCareOwner.map((item, index) =>





                                    <div onClick={() => openDeatailGarde(item.id)} className="cursor-pointer border-2 shadow-xl p-[10px] rounded-lg mt-[35px]">

                                        <p className="font-normal text-lg mb-[10px] mt-[10px]">Garde N°{index + 1}  Titre : {item.title}</p>
                                        {/* Détaille de la garde  */}
                                        <div id={'ctnDeatilGarde' + item.id} className="ctnDeatilGarde hidden flex-col">
                                            <p><span className="font-medium">Description : </span>{item.description}</p>
                                            <p><span className="font-medium">Début de la garde : </span>  {moment(item.started_at).format('DD/MM/YYYY')}</p>
                                            <p><span className="font-medium" >Fin de la garde : </span>  {moment(item.ended_at).format('DD/MM/YYYY')} </p>
                                            <p><span className="font-medium">Personne gardant la plante : </span> {item.keeper != undefined ? item.keeper : ' attribution en cour.'}</p>
                                            <p><span>Botaniste attribuer : </span> {item.botaniste != undefined ? ' un botaniste a bien était attribuer' : ' pas de botaniste '} </p>
                                            <div>
                                                <h3 className="font-lg text-xl mb-[20px] mt-[20px]">Lists des post : </h3>   {listPostCare ? (
                                                    listPostCare.map((item, index) =>
                                                        <div className="flex flex-col w-1/2 mt-[10px]">
                                                            <p className="font-semibold mt[15px] mb-[10px]">Post <span className=" text-[#5AD058]"> N°{index + 1}</span></p>
                                                            <p>Titre : {item.title}</p>
                                                            <p>Description : {item.description}</p>
                                                        </div>
                                                    )

                                                ) : null}

                                            </div>
                                        </div>

                                    </div>









                                )
                            ):<p>Pas garde de plante qui ont été confiées à d'autres en cour. </p>}
                            </div>
                        </div>
                    </div>

                </>
            ) : null}
            {/*  Lister les garde que je gardes */}
            {openDataKeeper ? (
                <>

                    <p className="mt-[30px] text-xl font-bold">Les plantes que j'ai garder</p>
                   

                        {
                            listDataKeeper && listDataKeeper.length > 0 ? (
                            
                            
                            listDataKeeper.map((item, index) =>


                                <>
                                  <div onClick={() => openDetailAndAddPost(item.id)} className="cursor-pointer border-2 shadow-xl p-[10px] rounded-lg mt-[35px]">
                                    <p  className="mt-[10px] mb-[10px] text-lg font-medium">Garde N°{index + 1}</p>
                                    <div className="hidden ctnDeatailAndPost flex-col" id={"ctnDeatailAndPost" + item.id} >
                                        <p><span className="font-medium"> Description :</span> {item.description}</p>
                                        <p><span className="font-medium">Début de la garde : </span>  {moment(item.started_at).format('DD/MM/YYYY')}</p>
                                        <p><span className="font-medium">Fin de la garde :</span> {moment(item.ended_at).format('DD/MM/YYYY')} </p>
                                        <p><span className="font-medium">Personne gardant la plante :</span> {item.keeper != undefined ? item.keeper : ' attribution en cour.'}</p>
                                        <p><span className="font-medium">Botaniste attribuer :</span>{item.botaniste != undefined ? ' un botaniste a bien était attribuer' : ' pas de botaniste '} </p>


                                        <div className="flex flex-col mt-[10px]">
                                            <input className="mb-[25px] mt-[15px]" placeholder="Titre" />
                                            <input className="mb-[10px]" placeholder="Description" />
                                            <input className="mt-[10px] bg-white" type="file" name="Choisir image" onChange={AddImgPost} />
                                        </div>

                                        <button onClick={() => savePost(item.id)} className="p-[5px] mb-[35px] bg-xhite w-1/6 p-5 border-2 shadow-xl rounded-lg text-base mt-[35px] font-semibold text-[#5AD058] cursor-pointe">Ennvoyer Post </button>
                                    </div>
                                    </div>
                                </>



                            )
                        ) : <p>Vous ne gardez pas de plante pour le moment. Je voudrais <a className="text-green-400" href="http://localhost:3000/gardes"> gardez une plante</a></p>




                        }



                








                </>
            ) : null}







        </>
    );
}

