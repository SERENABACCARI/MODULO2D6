//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro

function cambiare() {
    document.getElementById("title").innerHTML = "Zio_zia teams"
}


// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

function colore() {
    document.getElementById("color").style.backgroundColor = "red"
    
}


// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio


function indirizzo() {
    document.getElementById("myaddress").innerHTML = "Indirizzo cambiato"
    
}
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

const Amazon=[];

console.log(Amazon)

Amazon.push("link")

console.log(Amazon)



// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

    function immagine() {
        let hidden =document.querySelectorAll("image")
for (let i = 0; i < hidden.length; i++) {
    hidden[i].classList.add("hidden")

        //document.getElementById(hidden).style.visibility = "visible";
        //document.getElementById(hidden).style.visibility = "hidden"; 
        }
    }
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

function changeColor() {
document.querySelectorAll("colorprice").style.color="yellow"   
    
}