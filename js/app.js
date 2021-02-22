const showModalClass = "show-modal";
const modalComponent = document.querySelector(".share-div");

function showModal(e){
    e.preventDefault();
    modalComponent.classList.toggle(showModalClass);
    
}
