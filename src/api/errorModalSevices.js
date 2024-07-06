// api/errorModalService.js
let showErrorModalFunction = null;

export const setShowErrorModalFunction = (func) => {
  showErrorModalFunction = func;
};

export const showErrorModal = (message) => {
  if (showErrorModalFunction) {
    showErrorModalFunction(message);
  } else {
    console.error("Fonction d'affichage de la modale d'erreur non définie");
  }
};