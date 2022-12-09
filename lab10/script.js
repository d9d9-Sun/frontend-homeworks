let diametr = parseInt(getComputedStyle(document.getElementById('clade')).height);
let newLeft = getRandomCoordinate(0, 500 - diametr);
let newTop = getRandomCoordinate(0, 500 - diametr);
document.getElementById("clade").style.left = newLeft + "px";
document.getElementById("clade").style.top = newTop + "px";

let countClick = 0;

function getRandomCoordinate(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getCoord(e) {
    let coordCladeX = parseInt(getComputedStyle(document.getElementById('clade')).left) +
        (parseInt(getComputedStyle(document.getElementById('clade')).width) / 2);
    let coordCladeY = parseInt(getComputedStyle(document.getElementById('clade')).top) +
        (parseInt(getComputedStyle(document.getElementById('clade')).height) / 2);
    let coordX = e.clientX;
    let coordY = e.clientY;
    countClick++;
    document.querySelector("#countClick").innerText = `Ты нажал: ${countClick} раз(а), но не нашел(`;

    let distance = findDistance(coordCladeX, coordCladeY, coordX, coordY);
    isFind(distance, countClick);
}

function findDistance(CladeX, CladeY, coordX, coordY) {
    let distX = CladeX - coordX;
    let distY = CladeY - coordY;
    let distance = Math.floor(Math.sqrt(distX * distX + distY * distY));
    return distance;
}

function isFind(distance, countClick) {
    let radius = (parseInt(getComputedStyle(document.getElementById('clade')).height)) / 2;
    if (distance <= radius) {
        document.getElementById("clade").style.opacity = "1";
        document.getElementById("countClick").innerText = `Ты нажал: ${countClick} раз(а) и нашёл клад!!!`;
        document.getElementById("reload").style.visibility = "visible";
    } 
}