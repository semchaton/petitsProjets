let ville = "Aurillac";

let bouton = document.querySelector ("#changer");
bouton.addEventListener('click', () => {
    ville = prompt("Saisir la ville");
    recevoirTemp(ville);
});


function recevoirTemp (ville){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric";

    let requete = new XMLHttpRequest ();
    requete.open ('GET', url);
    requete.responseType = 'json';
    requete.send ();

    requete.onload = function (){
        if(requete.readyState === XMLHttpRequest.DONE){
            if(requete.status === 200){
                let reponse = requete.response;
                document.querySelector('#ville').textContent = ville;
                document.querySelector('#temperature_label').textContent = reponse.main.temp;
                //console.log(reponse.main.temp);
            }
            else {alert("Erreur API");}
        }

    }
}