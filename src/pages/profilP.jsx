// import React, { useState, useEffect } from "react";
// import "../styles/profil.css";
// import "../styles/editProfil.css"
// import data from "../data/johnDoe.json";

// // Import des composants Header et Footer
// import Header from "../components/header";
// import Footer from "../components/footer";

// //import des icons
// import mail from "../assets/email.png";
// import phone from "../assets/phone-call.png";
// import address from "../assets/location-pin.png";
// import flower from "../assets/flower-pot.png";

// export default function MyProfilePage() {
//   const [editing, setEditing] = useState(false);
//   const [userData, setUserData] = useState({});

//   useEffect(() => {
//     setUserData(data);
//   }, []);

//   const toggleEditing = () => {
//     setEditing(!editing);
//   };

//   const handleChanges = (e) => {
//     const { name, value } = e.target;
//     setUserData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     toggleEditing();
//   };

//   const ProfileDisplay = () => {
//     return (
//       <div className="body">
//         <Header />
//         <h1 className="section-title">Mon profile</h1>
//         <div className="profile">
//             <img
//               className="profilPicture"
//               src={userData.profilPicture}
//               alt="profil"
//             />
//              <h1 className="name">{userData.firstName + " " + userData.name}</h1>
//             <p className="profil-data">
//               <img src={mail} alt="mail" className="icons" />
//               {userData.mail}
//             </p>
//             <p className="profil-data">
//               <img src={phone} alt="phone" className="icons" />
//               {userData.phone}
//             </p>
//             <p className="profil-data">
//               <img src={address} alt="address" className="icons" />
//               {userData.street + " " + userData.city + " " + userData.zip}
//             </p>
//             <button 
//             id="editButton"
//             className="button-modifier" onClick={toggleEditing}>
//               Modifier mon profil
//             </button>
//         </div>
//         <div className="separator" />
//         <h1 className="section-title">Mes Gardes</h1>
//         <div className="gardes">
//           {userData.gardes &&
//             userData.gardes.map((garde, index) => (
//               <div className="garde-display" key={index}>
//                 <img src={flower} alt="flower" className="icons" />
//                 <p>Date de début : {garde.debut}</p>
//                 <p>Date de fin : {garde.fin}</p>
//                 <p>Type de plante : {garde.typePlante}</p>
//               </div>
//             ))}
//         </div>
//         <div className="space" />
//         <Footer />
//       </div>
//     );
//   };

//   const ProfileEdit = () => {
//     return (
//       <form className="profile-edit" onSubmit={handleSubmit}>
//         <input
//         id="firstName"
//           type="text"
//           name="firstName"
//           value={userData.firstName}
//           onChange={handleChanges}
//         />
//         <input
//         id="name"
//           type="text"
//           name="name"
//           value={userData.name}
//           onChange={handleChanges}
//         />
//         <input
//         id="mail"
//           type="text"
//           name="mail"
//           value={userData.mail}
//           onChange={handleChanges}
//         />
//         <input
//         id="phone"
//           type="text"
//           name="phone"
//           value={userData.phone}
//           onChange={handleChanges}
//         />
//         <input
//         id="address"
//           type="text"
//           name="address"
//           value={
//             userData.street +
//             " " +
//             userData.city +
//             " " +
//             userData.zip
//           }
//           onChange={handleChanges}
//         />
//         <button 
//           id="saveButton"
//           type="submit">Save</button>
//         <button 
//           id="cancelButton"
//           type="button" onClick={toggleEditing}>
//           Cancel
//         </button>
//       </form>
//     );
//   };

//   return (
//     <div className="profile-page">
//       {editing ? <ProfileEdit /> : <ProfileDisplay />}
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import Header from '../components/header'

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import Advice from '../components/adviceComponent';
import ProfilDetaille from '../components/profils/detailleProfil';
import GardeBotaniste from '../components/garde/gardeBotaniste';
import GardeProprietaire from '../components/garde/gardeProprietaire';


function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

export default function ProfilProprietaire() {
    const [dataProfil, setDataProfil] = useState();
    const [openAcc1, setOpenAcc1] = useState(true);
    const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);

    const [openAcc2, setOpenAcc2] = useState(true);
    const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);

    
    const [openAcc3, setOpenAcc3] = useState(true);
    const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);


    const [formData, setFormData] = useState({
        title: '',
        description: '',
        like: 0,
        id_category: '',
        picture: null
    });

    const [categories, setCategories] = useState([]);
    const [previewUrl, setPreviewUrl] = useState('');



    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'number' ? parseInt(value) : value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData(prevState => ({ ...prevState, picture: file }));

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setPreviewUrl('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        if (formData) {

        }
        // Ici, vous pouvez envoyer les données à votre backend
    };



    return (
        <>
            <Header />

            <div className="justify-center items-center my-5 mx-8 rounded-xl shadow-xl border border-gray-300 overflow-hidden">
                <>
                    <Accordion className="mb-5" open={openAcc1} icon={<Icon id={1} open={!openAcc1} />}>
                        <div className="mx-5 mt-2">
                            <AccordionHeader className="text-md mb-2" onClick={handleOpenAcc1}>


                             <p className='text-xl'>Informations générales</p>
                                
                            </AccordionHeader>
                            <AccordionBody>
                                {/* Information générale du client */}
                                <div >

                                    <ProfilDetaille />




                                </div>

                                {/* Information livraison */}



                            </AccordionBody>
                        </div>
                    </Accordion>

                </>
            </div>





            <div className="justify-center items-center my-5 mx-8 rounded-xl shadow-xl border border-gray-300 overflow-hidden">

                <Accordion className="mb-5" open={openAcc3} icon={<Icon id={1} open={!openAcc3} />}>
                    <div className="mx-5 mt-2">
                        <AccordionHeader className="text-md mb-2" onClick={handleOpenAcc3}>



                           <p className='text-xl'>Mes gardes</p> 
                        </AccordionHeader>
                        <AccordionBody>
                            {/* Information générale du client */}
                            <div >


                       

                                    <GardeProprietaire />
                                






                            </div>

                            {/* Information livraison */}



                        </AccordionBody>
                    </div>
                </Accordion>

            </div>


        </>
    );
}