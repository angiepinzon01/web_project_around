let butEdit = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let butClose = document.querySelector(".popup__button_close");
let form = document.querySelector(".popup__container");
let inName = document.querySelector(".profile__name");
let inAbout = document.querySelector(".profile__about");
let inpName = document.querySelector(".popup__input_name");
let inpAbout = document.querySelector(".popup__input_about");

function openEdit() {
  inpName.value = inName.textContent;
  inpAbout.value = inAbout.textContent;
  popup.classList.toggle("popup_opened");
}

butEdit.addEventListener("click", openEdit);
butClose.addEventListener("click", openEdit);

function saveChange(e) {
  e.preventDefault();
  inName.textContent = inpName.value;
  inAbout.textContent = inpAbout.value;
  openEdit();
}

form.addEventListener("submit", saveChange);
