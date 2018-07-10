'use strict';

(function () {
var btn = document.querySelector(".form_btn");
var modal = document.querySelector(".modal");
var close = document.querySelector(".exit");

//open modal_content
btn.addEventListener("click", function (evt) {
  event.preventDefault();
  modal.classList.add("modal_show");
});

//close modal_content(click on button)
close.addEventListener("click", function (evt) {
  event.preventDefault();
  modal.classList.remove("modal_show");
});

//close modal_content(click on modal)
window.addEventListener("click", function (evt) {
  if (event.target == modal) {
    if (modal.classList.contains("modal_show")){
      modal.classList.remove("modal_show");
    }
  }
});

//close modal_content(push on ESC)
window.addEventListener("keydown", function (evt) {
  if (event.keyCode === 27) {
    if (modal.classList.contains("modal_show")){
      modal.classList.remove("modal_show");
    }
  }
});
})();