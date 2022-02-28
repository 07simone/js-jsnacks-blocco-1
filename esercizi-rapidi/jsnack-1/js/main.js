const utente1 = parseInt (prompt("inserire il primo numero"));
const utente2 = parseInt (prompt("inserire il secondo numero"));

if (isNaN(utente1) || isNaN(utente2)){          //correzione con l'inserimento dei numeri non validi
    console.log("i numeri non sono validi")
} else if (utente1 === utente2){
    console.log("i numeri sono uguali")
} else if (utente1 > utente2){
    console.log("vince utente1")
} else{
    console.log("vince utente2")
    
}
