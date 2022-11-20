function askNumbers() {
    let d1 = +prompt("Введите первое число");
    let d2 = +prompt("Введите второе число");
    let sum = 0;
    for (d1; d1 <= d2; d1++) {
        sum = +sum + d1;
    }
    alert(sum);
}