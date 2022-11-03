//program nomor 1
const p1 = document.querySelector('.p1');
p1.innerHTML = 'Text Sudah diubah memakai DOM';

//program nomor 2
const pNew = document.createElement('p');
const textNew = document.createTextNode('Ini adalah paragraf baru dari DOM');
pNew.appendChild(textNew);
const textB = document.getElementById('textB');
textB.appendChild(pNew);

//program nomor 3
const p3 = document.querySelector('.p3');
function Color() {
    p3.style.backgroundColor = 'red';
    p3.style.color = 'white';
}
p3.onclick = Color;