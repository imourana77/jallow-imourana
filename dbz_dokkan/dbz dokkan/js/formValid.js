const buttonTheme = document.querySelector("#theme");
const about = document.querySelector("#about");
const contact = document.querySelector("#form");

buttonTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    about.classList.toggle("dark");
    contact.classList.toggle("dark");
});

let form = document.querySelector("#formulaire");
let nomInput = document.querySelector("#nom");
let prenomInput = document.querySelector("#prenom");
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let messageError = document.querySelector(".message-error");
let messageSuccess = document.querySelector(".message-success");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let nom = nomInput.value;
  let prenom = prenomInput.value;
  let email = emailInput.value;
  let password = passwordInput.value;
  function isEmail(email) {
    return /^w+([.-]?w+)@w+([.-]?w+)(.w{2,3})+$/.test(email);
  }

  if (nom.length < 2) {
    messageError.innerHTML = "Le nom doit contenir au moins 2 caractères";
    messageError.style.display = "block";
    nomInput.classList.add("error");
    return;
  } else if (prenom.length < 2) {
    messageError.innerHTML = "Le prénom doit contenir au moins 2 caractères";
    messageError.style.display = "block";
    prenomInput.classList.add("error");
    return;
  } else if (password.length < 8) {
    messageError.innerHTML =
      "Le mot de passe doit contenir au moins 8 caractères et au moins une majuscule, une minuscule et un chiffre et un caractère spécial";
    messageError.style.display = "block";
    passwordInput.classList.add("error");
    return;
  } else {
    nomInput.classList.add("success");
    nomInput.classList.remove("error");
    prenomInput.classList.add("success");
    prenomInput.classList.remove("error");
    emailInput.classList.add("success");
    prenomInput.classList.remove("error");
    passwordInput.classList.add("success");
    passwordInput.classList.remove("error");
  }

  messageError.style.display = "none";
  messageSuccess.style.display = "block";

  console.log("Envoi du form detecté !");
});

let succesContainer = document.querySelector(".message-success");
succesContainer.classList.remove("visible");
if (
  nomInput.classList.contains("success") &&
  prenomInput.classList.contains("success") &&
  emailInput.classList.contains("success") &&
  passwordInput.classList.contains("success")
) {
  succesContainer.classList.add("visible");
}
