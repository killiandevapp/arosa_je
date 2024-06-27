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


import React, { useState } from 'react';
import axiosInstance from '../api/conf';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";


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

export default function Profil() {
    const [dataProfil, setDataProfil] = useState();
    const [openAcc1, setOpenAcc1] = useState(true);
    const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);

    
    

    return (
      <>
                 <div className="justify-center items-center my-5 mx-8 rounded-xl shadow-xl border border-gray-300">
                <>
                    <Accordion className="mb-5" open={openAcc1} icon={<Icon id={1} open={!openAcc1} />}>
                        <div className="mx-5 mt-2">
                            <AccordionHeader className="text-md mb-2" onClick={handleOpenAcc1}>


                                <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_640_2)">
                                        <circle cx="51" cy="36" r="22" stroke="#1791EE" strokeWidth="6" />
                                        <path d="M90 102.5C90 120.62 72.9483 136 51 136C29.0517 136 12 120.62 12 102.5C12 84.38 29.0517 69 51 69C72.9483 69 90 84.38 90 102.5Z" stroke="#1791EE" strokeWidth="6" />
                                    </g>
                                    <rect x="3" y="3" width="94" height="94" rx="47" stroke="black" strokeWidth="6" />
                                    <defs>
                                        <clipPath id="clip0_640_2">
                                            <rect width="100" height="100" rx="50" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Informations générales
                            </AccordionHeader>
                            <AccordionBody> 
                                {/* Information générale du client */}
                                <div id="ctnGenInfoPatient" className="grid grid-cols-">
                                    <div id="ctnInfoGeneralePatientTop" className="col-start-1 col-span-2">


                                        <p className="font-bold text-xl/8">
                                        </p>
                                    </div>
                                    <div id="ctnInfoGeneralePatientMiddle" className="col-start-1 col-end-2 flex mb-5 max-sm:flex-col">
                                        <span className="mr-3"></span>
                                        <span className="mr-3"></span>
                                        <span className="font-semibold"> </span>

                                    </div>
                                    <div className="col-start-3 col-end-4 row-start-1 row-end-2 flex justify-end">


                                    </div>
                                    <div className="col-start-1 col-end-2 row-start-3 row-end-4" id="ctnInfoGeneralePatientBottomLeft">

                                        <span className="text-stone-500 font-semibold mr-3">Code Orthop : </span>
                                        <p><span className="text-stone-500 font-semibold">Date installation : </span></p>
                                        <p><span className="text-stone-500 font-semibold">Forfait : </span></p>

                                        <p><span className="text-stone-500 font-semibold">Télésuivi : </span></p>

                                       

                                        <p className="mt-5"><span className="text-stone-500 font-semibold">Prescripteur : </span></p>
                                        <p className="mb-5"><span className="text-stone-500 font-semibold">Fin de prescription : </span></p>
                                        <p className="mb-5"><span className="text-stone-500 font-semibold ">  </span></p>
                                        


                                    </div>
                                    {/* Ligne séparateur */}
                                    <div className="h-divider">
                                        <div className="itemShadow"></div>
                                    </div>

                                    {/* Information adresse et téléphone */}
                                    <div className="col-start-2 col-end-3 row-start-3 row-end-4 flex flex-col">
                                        <div className="flex">
                                            <p className="font-semibold	text-stone-500"></p>
                                            
                                        </div>
                                

                                        <p className="flex flex-col mb-5 text-black">
                                           
                                        </p>

                                        <div className="flex mb-5">

                                           

                                        </div>





                                    </div>


                                  
                                </div>

                                {/* Information livraison */}


                         
                            </AccordionBody>
                        </div>
                    </Accordion>

                </>
            </div>
         </> 
    );
}