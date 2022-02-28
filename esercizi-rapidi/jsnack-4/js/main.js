const firstword = prompt( "inserire prima parola");
const secondword = prompt( "inserire seconda parola");

if (firstword.length === secondword.length){
    console.log("le paroli sono ugualmete lunghe");     //correzzione inserendo l'istruzione per le parole con la stessa lunghezza
} else if(firstword.length >= secondword.length){
    console.log (firstword + " " + secondword);
} else {
    console.log( secondword +" "+ firstword)
}