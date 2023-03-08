const shareSection = document.querySelector('.modal-container');
const overLay = document.querySelector('.overlay');

//   Modal open function
const openModal = () => {
    console.log("Modal is Open");
    shareSection.classList.add("active");
    overLay.classList.add("overlayactive");
  };
  
  // Modal close function
  const closeModal = () => {
    shareSection.classList.remove("active");
    overLay.classList.remove("overlayactive");
  };