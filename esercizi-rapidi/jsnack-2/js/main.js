const invitati = prompt("inserire il tuo nome").toLowerCase() .trim();

const listaInvitati =["franco","giusepppe","sara","marika","antonio","massimo","alessandra","francesco"];
/* console.log ("listaInvitati"); */

let contatore = 0;
for ( i = 0; i < listaInvitati.length; i++ ){
    if (invitati === listaInvitati[i]){
        console.log("puoi entrare")
        contatore = contatore + 1;
    }
}

if( contatore == 0){
    console.log("nome non presente")
}