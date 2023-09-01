let share_wrapper = document.querySelector(".share__wrapper");
let share_btn = document.querySelector(".share");
let close_btn = document.querySelector(".close");

share_btn.addEventListener("click", function () {
  share_wrapper.style = "display: flex";
});

close_btn.addEventListener("click", function () {
  close_btn.parentElement.style = "display: none";
});
