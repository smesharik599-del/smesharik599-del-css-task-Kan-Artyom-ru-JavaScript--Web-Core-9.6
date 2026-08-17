import '../scss/style.scss';
import Swiper from 'swiper/bundle'; // Импортируем бандл со всеми модулями (пагинацией)

let brandsSwiper = null;

// Функция включения/выключения Swiper в зависимости от ширины экрана
function initBrandsSwiper() {
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    if (!brandsSwiper) {
      brandsSwiper = new Swiper('.js-mobile-slider', {
        slidesPerView:'auto',
        spaceBetween: 16,
        slidesOffsetBefore: 16,    // Отступ слева у первого слайда
        slidesOffsetAfter: 16,     // Отступ справа у последнего слайда
        centeredSlides: true,       // Центрируем свайпаемые карточки
        centeredSlidesBounds: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }
  } else {
    if (brandsSwiper) {
      brandsSwiper.destroy(true, true); // Полностью уничтожаем слайдер на ПК и планшетах
      brandsSwiper = null;
    }
  }
}

function updateDesktopVisibility() {
  const width = window.innerWidth;
  if (width >= 768 && width <= 1119) {
    document.querySelectorAll('.brands__item--disabled').forEach(el => {
      el.style.display = 'none';
    });
  } else if (width >= 1120) {
    document.querySelectorAll('.brands__item--active').forEach(el => {
      el.style.display = 'none';
    });
  }
}

// Запускаем сразу и при изменении размера окна
initBrandsSwiper();
window.addEventListener('resize', initBrandsSwiper);

// Ваша исходная логика для меню и кнопок "Показать всё"
const allBoxes = document.querySelectorAll('.brands__item');
const active = document.querySelectorAll('.brands__item--active');
const univsr = document.getElementById('together');
const adapted = document.querySelectorAll('.brands__item--disabled');
const mueryediaQ = window.matchMedia('(min-width: 768px) and (max-width: 1119px)');
const mueryedia11 = window.matchMedia('(min-width: 1120px)');
const disable = document.querySelectorAll('.brands__item--disabled');
const brmenu = document.getElementById('burger');
const left_side = document.getElementById('br');
const close_b = document.getElementById('close');
const left_side_back = document.getElementById('back-br');
const hidden_box = document.getElementById('op-cl');
const opened = document.getElementById('opened');

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.brands__item--active');
    elements.forEach(el => {
        el.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const width = window.innerWidth;
    if (width >= 768 && width <= 1119) {
        const elements = document.querySelectorAll('.brands__item--disabled');
        elements.forEach(el => {
            el.style.display = 'none';
        });
    }
});

function start1(rt, yu) {
    if (rt.matches) {
        yu.forEach((box) => {
            box.style.display = 'none';
        });
    } else {
        yu.forEach((box) => {
            box.style.display = 'flex';
        });
    }
}

function start2(rt, yu, dy) {
    if (rt.matches) {
        yu.forEach((box) => {
            box.style.display = 'none';
        });
        dy.forEach((v) => {
            v.style.display = 'flex';
        });
    }
}

if (brmenu && left_side) {
    brmenu.addEventListener('click', () => {
        let burgerStyles = window.getComputedStyle(left_side);
        if (burgerStyles.display === 'none') {
            left_side.style.display = 'flex';
            left_side_back.style.display = 'flex';
        } else {
            left_side.style.display = 'none';
            left_side_back.style.display = 'none';
        }
    });
}

function close_button() {
    if (close_b) {
        close_b.addEventListener('click', () => {
            const width = window.innerWidth;
            if (width < 1120) {
                left_side.style.display = 'none';
                left_side_back.style.display = 'none';
            }
        });
    }
}

function univvv() {
    if (univsr) {
        univsr.addEventListener('click', () => {
            const width = window.innerWidth;
            active.forEach((box) => { 
                let check = window.getComputedStyle(box);
                if (width >= 1120) {
                    if (check.display === 'flex') {
                        box.style.display = 'none';
                        univsr.textContent = "Показать всё";
                    } else {
                        box.style.display = 'flex';
                        univsr.textContent = "Скрыть";
                    }
                }
            });
        });
    }
}

function adapt() {
    if (univsr) {
        univsr.addEventListener('click', () => {
            const width = window.innerWidth;
            adapted.forEach((box) => {
                let check = window.getComputedStyle(box);
                if (width >= 768 && width <= 1119) {
                    if (check.display === 'flex') {
                        box.style.display = 'none';
                        univsr.textContent = "Показать всё";
                    } else {
                        box.style.display = 'flex';
                        univsr.textContent = "Скрыть";
                    }
                }
            });
        });
    }
}

function llopen() {
    if (opened) {
        opened.addEventListener('click', () => {
            const width = window.innerWidth;
            if (hidden_box) {
                let check = window.getComputedStyle(hidden_box);
                if (width >= 768 && width <= 1119) {
                    if (check.display === 'flex') {
                        hidden_box.style.display = 'none';
                        opened.textContent = "Показать всё";
                    } else {
                        hidden_box.style.display = 'flex';
                        opened.textContent = "Скрыть";
                    }
                }
            }
        });
    }
}

llopen();
close_button();
adapt();
univvv();
start1(mueryediaQ, adapted);
start2(mueryedia11, disable, adapted);
mueryediaQ.addEventListener("change", (e) => { start1(e, adapted); });
mueryedia11.addEventListener("change", (e) => { start2(e, active, disable); });