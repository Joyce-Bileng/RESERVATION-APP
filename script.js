let reservations = [];

function reserver(){
    let type = document .getElementById("type") .value;
    let date = document .getElementById("date") .value;
    let heure = document .getElementById("heure") .value;
    let notreNumero ="+243897818835";
    let reservation = type + " _ " + date + " _ " + heure + " _Contact : " + notreNumero;

    if (reservations.includes(reservation)){
        alert("Ce créneau est déjà réservé !");
        return;
    }

    reservations.push(reservation);


    let li = document.createElement("li");
    li.textContent = reservation;

    document.getElementById("liste") .appendChild(li);

     alert("Merci pour votre reservation!");
}