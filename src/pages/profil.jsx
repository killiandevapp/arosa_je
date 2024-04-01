import React, { useState, useEffect } from "react";
import "../styles/profil.css";
import data from "../data/johnDoe.json";

// Import des composants Header et Footer
import Header from "../components/header";
import Footer from "../components/footer";

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
    // Handle submission logic here
  };

  const ProfileDisplay = () => {
    return (
      <div>
        <Header />
        <div className="profile">
          <div className="left">
            <img src={userData.profilPicture} alt="profil picture" />
          </div>
          <div className="right">
            <h1>{userData.firstName + " " + userData.name}</h1>
            <p>{userData.mail}</p>
            <p>{userData.phone}</p>
        
            <button onClick={toggleEditing}>Edit Profile</button>
          </div>
        </div>
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