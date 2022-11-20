function askAge() {
    let age = prompt("Введите возраст");

    if (age >= 0 && age <= 2) {
        alert("ребенок");
    } else if (age >=12 && age <=18) {
        alert("подросток");
    } else if (age > 18 && age <= 60 ) {
        alert("взрослый");
    } else if (age > 60) {
        alert("пенсионер");
    }
}