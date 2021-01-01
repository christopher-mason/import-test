"use strict";
var nbr = 0;
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
    var ctrl = document.getElementById("nbr");
    ctrl.value = nbr.toString();
}
