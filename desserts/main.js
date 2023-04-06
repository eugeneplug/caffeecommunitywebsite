/*
let offset = 0;
let sliderLine = document.querySelector('.menu_content_row-one, .menu_content_row-two');

document.querySelector('.next').addEventListener('click', function () {
    offset = offset + 365; 
    if (offset > 1500) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.prev').addEventListener('click', function () {
    offset = offset - 365; 
    if (offset < 0) {
        offset = 1500;
    }
    sliderLine.style.left = -offset + 'px';
});
*/

/*
let offset = 0;
const sliderLine = document.querySelectorAll('.menu_content_row-one, .menu_content_row-two');
const nextButtons = document.querySelectorAll('.next');
const prevButtons = document.querySelectorAll('.prev');



nextButtons.forEach(function(button) {
  button.addEventListener('click', function () {
    offset = offset + 365; 
    if (offset > 1500) {
      offset = 0;
    }
    sliderLine.forEach(function(item) {
      item.style.left = -offset + 'px';
    });
  });

});

prevButtons.forEach(function(button) {
  button.addEventListener('click', function () {
    offset = offset - 365; 
    if (offset < 0) {
      offset = 1500;
    }
    sliderLine.forEach(function(item) {
      item.style.left = -offset + 'px';
    });
  });
});




const myBlock = document.getElementById('myBlock');

nextButtons.addEventListener('click', function () {
  const currentWidth = myBlock.offsetWidth;
  myBlock.style.width = (currentWidth + 100) + 'px';
});
*/

/*
let offset = 0;
const sliderLine = document.querySelectorAll('.menu_content_row-one, .menu_content_row-two');
const nextButtons = document.querySelectorAll('.next');
const prevButtons = document.querySelectorAll('.prev');
const myBlock = document.getElementById('myBlock');

nextButtons.forEach(function(button) {
  button.addEventListener('click', function () {
    offset = offset + 365; 
    if (offset > 1500) {
      offset = 0;
    }
    sliderLine.forEach(function(item) {
      item.style.left = -offset + 'px';
    });

    const currentWidth = myBlock.offsetWidth;
    myBlock.style.width = (currentWidth + 100) + 'px';
  });
});

prevButtons.forEach(function(button) {
  button.addEventListener('click', function () {
    offset = offset - 365; 
    if (offset < 0) {
      offset = 1500;
    }
    sliderLine.forEach(function(item) {
      item.style.left = -offset + 'px';
    });
  });
});
*/
/*
let offset = 0;
const sliderLine = document.querySelectorAll('.menu_content_row-one, .menu_content_row-two');
const nextButtons = document.querySelectorAll('.next');
const prevButtons = document.querySelectorAll('.prev');
const myBlock = document.getElementById('myBlock');

nextButtons.forEach(function(button) {
  button.addEventListener('click', function () {
    offset = offset + 365; 
    if (offset > 1500) {
      offset = 0;
    }
    sliderLine.forEach(function(item) {
      item.style.left = -offset + 'px';
    });
    const currentWidth = myBlock.offsetWidth;
    myBlock.style.width = (currentWidth + 100) + 'px';
  });
});

prevButtons.forEach(function(button) {
  button.addEventListener('click', function () {
    offset = offset - 365; 
    if (offset < 0) {
      offset = 1500;
    }
    sliderLine.forEach(function(item) {
      item.style.left = -offset + 'px';
    });
    const currentWidth = myBlock.offsetWidth;
    myBlock.style.width = (currentWidth - 100) + 'px';
  });
});

*/

/*
let offset = 0;
const sliderLine = document.querySelectorAll('.menu_content_row-one, .menu_content_row-two');
const nextButtons = document.querySelectorAll('.next');
const prevButtons = document.querySelectorAll('.prev');
const myBlock = document.getElementById('myBlock');

nextButtons.forEach(function(button) {
  button.addEventListener('click', function () {
    offset = offset + 365; 
    if (offset > 730) {
      offset = 0;
    }
    sliderLine.forEach(function(item) {
      item.style.left = -offset + 'px';
    });
    const currentWidth = myBlock.offsetWidth;
    if (currentWidth < 300) {
      myBlock.style.width = (currentWidth + 100) + 'px';
    } else {
      myBlock.style.width = '100px';
    }
  });
});

prevButtons.forEach(function(button) {
  button.addEventListener('click', function () {
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
  });
});
*/



let offset = 0;
let isAnimating = false; // добавляем переменную для защиты от многократных нажатий
const sliderLine = document.querySelectorAll('.menu_content_row-one, .menu_content_row-two');
const nextButtons = document.querySelectorAll('.next');
const prevButtons = document.querySelectorAll('.prev');
const myBlock = document.getElementById('myBlock');

nextButtons.forEach(function(button) {
  button.addEventListener('click', function () {
    if (!isAnimating) { // проверяем, не выполняется ли анимация в данный момент
      isAnimating = true; // устанавливаем флаг анимации в true
      offset = offset + 365; 
      if (offset > 730) {
        offset = 0;
      }
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
