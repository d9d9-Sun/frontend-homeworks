function askName() {
    let name = prompt("Введите имя");
    alert("Привет, " + name + "!");
}

function askYear() {
    const CURRENT_YEAR = 2022;
    let year = prompt("Введите год рождения");
    alert("Ваш возраст: " + (CURRENT_YEAR - year));
}