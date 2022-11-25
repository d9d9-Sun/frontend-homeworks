function Car(vendor, model, year, avgSpeed) {
    this.vendor = vendor;
    this.model = model;
    this.year = year;
    this.avgSpeed = avgSpeed;
}

let car = new Car("volvo", "xc90", 2009, 90);

function show(car) {
    document.writeln(car.vendor + " " + car.model + " " + car.year + " " + car.avgSpeed);
}

function time() {
    let distance = prompt("Введите расстояние");
    let speed = prompt("Введите среднюю скорость");

    let timeInWay = distance/speed;

    let timeInRest = (timeInWay % 4 == 0) ? (timeInWay / 4 | 0) - 1 : timeInWay / 4 | 0;

    let timeTotal = distance/speed + timeInRest;

    alert(`Общее время в пути = ${timeTotal} часов`);
}