import '../scss/style.scss';
const allBoxes = document.querySelectorAll('.brand');
const active = document.querySelectorAll('.active')
const univsr = document.getElementById('together')
const adapted = document.querySelectorAll('.active2')
const mueryediaQ = window.matchMedia('(min-width: 768px) and (max-width: 1119px)');
const mueryedia11 = window.matchMedia('(min-width: 1120px)');
const disable = document.querySelectorAll('.disable')
const brmenu = document.getElementById('burger')
const left_side = document.getElementById('br')
const close_b = document.getElementById('close')
const left_side_back = document.getElementById('back-br')
const hidden_box = document.getElementById('op-cl')
const opened = document.getElementById('opened')
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.active');
    
    elements.forEach(el => {
        el.style.display = 'none';
    });
    

});

document.addEventListener('DOMContentLoaded', () => {
    const width = window.innerWidth
    if (width>=768 && width <= 1119){
    const elements = document.querySelectorAll('.active2');
    elements.forEach(el => {
        el.style.display = 'none';
    });}

});

function start1 (rt, yu, dy) {
    if (rt.matches) {
        yu.forEach((box) => {
            box.style.display = 'none'
    })
}
    else {
        yu.forEach((box) => {
            box.style.display = 'flex'
    })
    }}

function start2 (rt, yu, dy) {
    if (rt.matches) {

        yu.forEach((box) => {
            box.style.display = 'none'})
        dy.forEach((v) => {
            v.style.display = 'flex'
        })
        console.log('check')
    }}




if (brmenu && left_side) {
    // 3. Вешаем событие клика ТОЧНО через точку
    brmenu.addEventListener('click', () => {
        let burgerStyles = window.getComputedStyle(left_side);
        
        if (burgerStyles.display === 'none') {
            left_side.style.display = 'flex';
            left_side_back.style.display = 'flex'
            console.log('Меню открылось');
        } else {
            left_side.style.display = 'none';
            left_side_back.style.display = 'none'
            console.log('Меню закрылось');
        }
    });
} else {
    console.error('Ошибка: проверь ID элементов в HTML! Нужны id="burger" и id="br"');
}

function close_button() {close_b.addEventListener('click', () =>{
    const width = window.innerWidth
    if (width < 1120) {
        left_side.style.display = 'none'
        left_side_back.style.display = 'none'
        console.log('closed')
}})}

function univvv() {univsr.addEventListener('click', () => {
    const width = window.innerWidth
    active.forEach((box) => { 
        let check = window.getComputedStyle(box)
        if (width >= 1120)
            if (check.display === 'flex') {
                box.style.display = 'none'
                console.log('2345')
                univsr.textContent = "Показать всё"
            }          
            else {box.style.display = 'flex'
                console.log('no')
                univsr.textContent="Скрыть"
            }
    })
})}

function adapt() {univsr.addEventListener('click', () => {
    const width = window.innerWidth
    adapted.forEach((box) => {
        let check = window.getComputedStyle(box)
        if (width>=768 && width <= 1119)
            if (check.display === 'flex') {
                box.style.display = 'none'
                console.log('2345')
                univsr.textContent = "Показать всё"
            }          
            else {box.style.display = 'flex'
                console.log('no')
                univsr.textContent="Скрыть"
            }
    })
})}

function llopen() {opened.addEventListener('click', () => {
    const width = window.innerWidth
    let check = window.getComputedStyle(hidden_box)
    if (width>=768 && width <= 1119)
        if (check.display === 'flex') {
            hidden_box.style.display = 'none'
            console.log('hj45')
            opened.textContent = "Показать всё"
        }          
        else {hidden_box.style.display = 'flex'
            console.log('no')
            opened.textContent="Скрыть"
        }
})}

llopen()
close_button()
adapt()
univvv()
start1(mueryediaQ, adapted)
start2(mueryedia11, disable, adapted)
mueryediaQ.addEventListener("change", (e) => {start1(e, adapted)})
mueryedia11.addEventListener("change", (e) => {start2(e, active, disable); 
});

