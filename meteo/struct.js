const url = "https://api.openweathermap.org/data/2.5/weather?q=saint-saulve&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric";

let requete = new XMLHttpRequest ();
requete.open ('GET', url);
requete.responseType = 'json';
requete.send ();

requete.onload = function (){
    if(requete.readyState === XMLHttpRequest.DONE){
        if(requete.status === 200){
            let reponse = requete.response;
            console.log(reponse);
        }
        else {alert("Erreur API");}
    }

}