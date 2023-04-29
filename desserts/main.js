let offset = 0;
let isAnimating = false; // добавляем переменную для защиты от многократных нажатий
const sliderLine = document.querySelectorAll('.menu_content_row-one, .menu_content_row-two');
const nextButtons = document.querySelectorAll('.next');
const prevButtons = document.querySelectorAll('.prev');
const myBlock = document.getElementById('myBlock');

let nav = document.querySelector('nav');







nextButtons.forEach(function(button) {
  button.addEventListener('click', function () {
    if (!isAnimating) { // проверяем, не выполняется ли анимация в данный момент

      isAnimating = true; // устанавливаем флаг анимации в true

 



      
      offset = offset + 365; 
      if (offset >730) {
        offset = 0
      }



      if (getComputedStyle(nav).display === 'none') {
        offset = offset - 35; 
        if (offset > 730) {
          offset = 0
        }
        
      
        
      
      }




/*
if (getComputedStyle(nav).display === 'none') {
  offset = offset + 35; 
  if (offset < 0) {
    offset = 730;
  }
} else {
  offset = offset + 365; 
  if (offset > 730) {
    offset = 0;
  }
}

*/





      sliderLine.forEach(function(item) {
        item.style.left = -offset + 'px';
      });






      const currentWidth = myBlock.offsetWidth;
      if (currentWidth < 300) {
        myBlock.style.width = (currentWidth + 100) + 'px';
      } else {
        myBlock.style.width = '100px';
      }


      
      



      setTimeout(() => {
        isAnimating = false; // сбрасываем флаг анимации в false после окончания анимации
      }, 500); // устанавливаем таймаут в 500 мс для синхронизации с длительностью анимации (0.5 секунды)
    }
  });
});


prevButtons.forEach(function(button) {
  button.addEventListener('click', function () {
    if (!isAnimating) { // проверяем, не выполняется ли анимация в данный момент
      isAnimating = true; // устанавливаем флаг анимации в true


      



      offset = offset - 365; 
      if (offset < 0) {
        offset = 730;
      }
      sliderLine.forEach(function(item) {
        item.style.left = -offset + 'px';
      });
      const currentWidth = myBlock.offsetWidth;
      if (currentWidth > 100) {
        myBlock.style.width = (currentWidth - 100) + 'px';
      } else {
        myBlock.style.width = '300px';
      }
      setTimeout(() => {
        isAnimating = false; // сбрасываем флаг анимации в false после окончания анимации
      }, 500); // устанавливаем таймаут в 500 мс для синхронизации с длительностью анимации (0.5 секунды)
    }
  });
});




/*




prevButtons.forEach(function(button) {
  button.addEventListener('click', function () {
    if (!isAnimating) { // проверяем, не выполняется ли анимация в данный момент
      isAnimating = true; // устанавливаем флаг анимации в true
      if (container.style.width < '600px') { // если ширина контейнера равна 600px
        offset = offset - 250; // отправляем блок на 100px влево
      } else {
        offset = offset - 365; // отправляем блок на 365px влево
      }
      if (offset < 0) {
        if (container.style.width < '600px') { // если ширина контейнера равна 600px
          offset = 600; // устанавливаем смещение в 600px
        } else {
          offset = 730; // устанавливаем смещение в 730px
        }
      }
      sliderLine.forEach(function(item) {
        item.style.left = -offset + 'px';
      });
      const currentWidth = myBlock.offsetWidth;
      if (currentWidth > 100 && container.style.width !== '600px') { // если ширина блока больше 100 и ширина контейнера не равна 600px
        myBlock.style.width = (currentWidth - 100) + 'px'; // уменьшаем ширину блока на 100px
      } else {
        myBlock.style.width = '300px'; // устанавливаем ширину блока в 300px
      }
      setTimeout(() => {
        isAnimating = false; // сбрасываем флаг анимации в false после окончания анимации
      }, 500); // устанавливаем таймаут в 500 мс для синхронизации с длительностью анимации (0.5 секунды)
    }
  });
});


nextButtons.forEach(function(button) {
  button.addEventListener('click', function () {
    if (!isAnimating) { // проверяем, не выполняется ли анимация в данный момент
      isAnimating = true; // устанавливаем флаг анимации в true
      if (container.style.width < '600px') { // если ширина контейнера равна 600px
        offset = offset + 250; // отправляем блок на 100px влево
      } else {
        offset = offset + 365; // отправляем блок на 365px влево
      }
      if (offset < 0) {
        if (container.style.width < '600px') { // если ширина контейнера равна 600px
          offset = 600; // устанавливаем смещение в 600px
        } else {
          offset = 730; // устанавливаем смещение в 730px
        }
      }
      sliderLine.forEach(function(item) {
        item.style.left = -offset + 'px';
      });
      const currentWidth = myBlock.offsetWidth;
      if (currentWidth > 100 && container.style.width !== '600px') { // если ширина блока больше 100 и ширина контейнера не равна 600px
        myBlock.style.width = (currentWidth - 100) + 'px'; // уменьшаем ширину блока на 100px
      } else {
        myBlock.style.width = '300px'; // устанавливаем ширину блока в 300px
      }
      setTimeout(() => {
        isAnimating = false; // сбрасываем флаг анимации в false после окончания анимации
      }, 500); // устанавливаем таймаут в 500 мс для синхронизации с длительностью анимации (0.5 секунды)
    }
  });
});









*/






const sliderContainers = document.querySelectorAll('.menu_content_row-one, .menu_content_row-two');

sliderContainers.forEach(function(sliderContainer) {
  sliderContainer.addEventListener('wheel', function(event) {
    event.preventDefault(); 
    if (event.deltaY < 0) {
      prevButtons[0].click();
    } else {
      nextButtons[0].click();
    }
  });
});




const sliderContainer = document.querySelector('.menu_content');
let isDragging = false;
let startPosition = null;
let currentTranslate = null;
let prevTranslate = 0;

sliderContainer.addEventListener('touchstart', touchStart);
sliderContainer.addEventListener('touchmove', touchMove);
sliderContainer.addEventListener('touchend', touchEnd);

function touchStart(e) {
  startPosition = e.touches[0].clientX;
  isDragging = true;
}

function touchMove(e) {
  if (isDragging) {
    const currentPosition = e.touches[0].clientX;
    currentTranslate = prevTranslate + currentPosition - startPosition;
  }
}

function touchEnd() {
  prevTranslate = currentTranslate;
  isDragging = false;
}

// Функция, которая обновляет положение слайдера при перетаскивании
function updateSliderPosition() {
  sliderLine.forEach(function(item) {
    item.style.transform = `translateX(${-offset}px)`;
  });
}

// Функция, которая сдвигает слайдер на определенную величину
function moveSlider() {
  offset = currentTranslate;
  updateSliderPosition();
}

// Вызываем функцию moveSlider() при перемещении пальца по экрану
setInterval(function() {
  if (isDragging) {
    moveSlider();
  }
}, 0);








