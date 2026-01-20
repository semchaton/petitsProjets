let bouton = document.querySelector("#mode");
let body = document.body;
let estSombre = localStorage.getItem("theme") === "sombre";

if (estSombre) {
    body.style.backgroundColor = "#112F41";
    body.style.color = "white";
}

bouton.addEventListener("click", () => {
    estSombre = !estSombre;

    if (estSombre) {
        body.style.backgroundColor = "#112F41";
        body.style.color = "white";
        localStorage.setItem("theme", "sombre");
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        localStorage.setItem("theme", "clair");
    }
});