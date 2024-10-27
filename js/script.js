const navbar = document.querySelector(".navbar");

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwgVbjGyyis4jHwYdA1q8InZiQUzrNSm2OOdlkzEuiPDdoMikE6SxXDLtW48851gGroUA/exec";

const form = document.forms["submit-to-google-sheet"];
const btnSubmit = document.querySelector(".btn-submit");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  btnLoading.classList.toggle("d-none");
  btnSubmit.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(() => {
      btnLoading.classList.toggle("d-none");
      btnSubmit.classList.toggle("d-none");
      myAlert.classList.toggle("d-none");
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    if (scrollY > 0) {
      navbar.classList.add("blur");
      navbar.classList.add("shadow");
    } else {
      navbar.classList.remove("blur");
      navbar.classList.remove("shadow");
    }
  });
});
