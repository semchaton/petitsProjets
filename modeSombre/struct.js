let bouton = document.querySelector ("#mode");

let body = document.querySelector ('body');
let estSombre = false; // false=> mode clair et true mode sombre

bouton.addEventListener('click', () => {
    if (!estSombre){
        body.style.backgroundColor = "#112F41";
        body.style.color = "white";
        estSombre = true;
    }else{
        body.style.backgroundColor = "white";
        body.style.color = "black";
        estSombre = false;
    }
});