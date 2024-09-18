// WORKING WITH THE CLASSES (MODAL)
"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowModal = document.querySelectorAll(".show-modal");
const openModal = function () {
  console.log("clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
// The For loops ensured that each element namely the button get its own event listener.
for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal); //we define the function and not call it because we want this function to run only when the click event happens.
overlay.addEventListener("click", closeModal);
// Keyboard event is a global event and usually listen to the whole document
document.addEventListener("keydown", function (event) {
  //event object
  // console.log(event.key);
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
