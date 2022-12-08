function setFontSize() {
    let value = document.getElementById('select');
    let selectedValue = value.value;
    let hello = document.getElementById('hello');

    hello.style.fontSize = selectedValue + 'px';
}

function getValues() {
    let textInput = document.getElementById('text').value;
    let numbers = textInput.split(' ');

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            numbers[i] = numbers[i] * 3;
        }
    }

    document.getElementById('output').innerHTML = numbers;

}