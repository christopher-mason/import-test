let nbr = 0;

function loaded() {
    console.log("Loaded");
    display();
}

function plus() {
    nbr++;
    display();
}

function minus() {
    nbr--;
    display();
}

function display() {
    let ctrl = document.getElementById("nbr") as HTMLInputElement;
    ctrl.value = nbr.toString();
}