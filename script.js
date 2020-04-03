function myFunction() {
    var x = document.getElementById("myTopnav");
    
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function choise(decision) {
    var display = document.getElementById("valittu-puolue");

    display.value = decision;
}