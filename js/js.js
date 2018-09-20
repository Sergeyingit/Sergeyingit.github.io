var link = document.querySelector(".contacts .btn");
var popup = document.querySelector(".back-communication");
var closePopup = popup.querySelector(".close-btn");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var letter = popup.querySelector("[name=letter]");
var shadow = document.querySelector(".shadow");
var isStorageSupport = true;
var storage = "";
var storageEmail = "";

try {
    storage = localStorage.getItem("login");
    storageEmail = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    shadow.classList.add("shadow-on");
    popup.classList.add("modal-show");
    if (storage) {
        login.value = storage;
        if (storageEmail) {
            email.value = storageEmail;
            letter.focus();
        } else {
            email.focus();
        }
    } else {
    login.focus();
    }
});

closePopup.addEventListener("click", function (evt) {
    evt.preventDefault();
    shadow.classList.remove("shadow-on");
    popup.classList.remove("modal-show");
    popup.classList.remove ("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value || !letter.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
            localStorage.setItem("email", email.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            shadow.classList.remove("shadow-on");
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});