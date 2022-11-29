function randomNumber() {
    let div = document.getElementById('result');
    div.insertAdjacentHTML('afterbegin', '<div>' + Math.round(Math.random() * 100) + '</div>');
   }