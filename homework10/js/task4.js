function askUSD() {
    let usd = prompt("Введите сумму в USD");
    let currency = prompt("Выберите валюту (EUR, UAN, AZN)").toUpperCase();

    switch(currency) {
        case 'EUR':
            alert(usd / 1.2);
            break;
        case 'UAN':
            alert(usd * 25);
            break;
        case 'AZN':
            alert(usd * 1000);
            break;
        default:
            alert("Такой валюты нет")
    }
}