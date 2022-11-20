function askNumber() {
    let number = prompt("Введите число");
    if (number == 0) {
        alert("Это ноль");
    } else if (number > 0) {
        alert("Число положительное");
    } else {
        alert("Число отрицательное");
    }
}

function askAge() {
    let age = prompt("Введите возраст");
    if (age > 0 && age < 120) {
        alert("Введено корректно");
    } else {
        alert("Возраст введён неверно");
    }
}