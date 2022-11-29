function makeBold() {
    let ta = document.getElementById('textarea');
    ta.classList.add('bold');
}

function makeItalic() {
    let ta = document.getElementById('textarea');
    ta.classList.add('italic');
}

function incFont() {
    let ta = document.getElementById('textarea');
    ta.style.fontSize = parseInt(getComputedStyle(ta, '').fontSize) + 2 + 'px';
}

function decFont() {
    let ta = document.getElementById('textarea');
    ta.style.fontSize = parseInt(getComputedStyle(ta, '').fontSize) - 2 + 'px';
}

colorPicker.addEventListener("change", changeColor, false);

function changeColor(event) {
  document.getElementById('textarea')(function() {
    ta.style.color = event.target.value;
  });
}