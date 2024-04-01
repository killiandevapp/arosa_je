import React, { useState, useEffect } from "react";
import "../styles/profil.css";
import data from "../data/johnDoe.json";

// Import des composants Header et Footer
import Header from "../components/header";
import Footer from "../components/footer";

//import des icons
import mail from "../assets/email.png";
import phone from "../assets/phone-call.png";
import address from "../assets/location-pin.png";

export default function MyProfilePage() {
  const [editing, setEditing] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setUserData(data);
  }, []);

  const toggleEditing = () => {
    setEditing(!editing);
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleEditing();
  };

  const ProfileDisplay = () => {
    return (
      <div className="body">
        <Header />
        <h1 className="section-title">Mon profile</h1>
        <div className="profile">
          <div className="left">
            <img className="profilPicture" src={userData.profilPicture} alt="profil picture" />
          </div>
          <div className="right">
            <h1 className="name">{userData.firstName + " " + userData.name}</h1>
            <p className="profil-data">
                <img src={mail} alt="mail" className="icons" />
                {userData.mail}
                </p>
            <p className="profil-data">
                <img src={phone} alt="phone" className="icons" />  
                {userData.phone}</p>
            <p className="profil-data">
                <img src={address} alt= "address" className="icons" />
              {userData.street +
                " " +
                userData.city +
                " " +
                userData.zip}
            </p>
        
            <button className="button-modifier" onClick={toggleEditing}>Modifier mon profil</button>
          </div>
        </div>
        <div className="separator" />
        <h1 className="section-title">Mes Gardes</h1>
        <div className="gardes">
        {userData.gardes && userData.gardes.map((garde, index) => (
          <div className="garde-display" key={index}>
            <p>Date de début : {garde.debut}</p>
            <p>Date de fin : {garde.fin}</p>
            <p>Type de plante : {garde.typePlante}</p>
          </div>
        ))}
      </div>
      <div className="space" />
        <Footer />
      </div>
    );
  };

  const ProfileEdit = () => {
    return (
      <form className="profile-edit" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={userData.firstName}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="mail"
          value={userData.mail}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="phone"
          value={userData.phone}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="address"
          value={
            userData.address.street +
            " " +
            userData.address.city +
            " " +
            userData.address.zip
          }
          onChange={handleChanges}
        />
        <button type="submit">Save</button>
        <button type="button" onClick={toggleEditing}>
          Cancel
        </button>
      </form>
    );
  };

  return (
    <div className="profile-page">
      {editing ? <ProfileEdit /> : <ProfileDisplay />}
    </div>
  );
}