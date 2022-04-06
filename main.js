const modal = document.querySelector(".modal");
const openModalButton = document.querySelector(".open-modal-button");
const closeModalButton = document.querySelector(".close-modal");
const modalImage = document.querySelector(".modal-image");
let modalIsOpen;

modalIsOpen = false;
openModalButton.addEventListener("click", () => {
    if (modalIsOpen)
        modal.style.display = "none";
    else
        modal.style.display = "flex";
});

closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});

function resize_image() {
    if (window.innerWidth / window.innerHeight < .7)
        modalImage.src = "images/stack.jpg";
    else
        modalImage.src = "images/noa_4.png";
}

window.addEventListener("resize", resize_image);