// Получаем ссылки на нужные элементы
const blocks = document.querySelectorAll(".check-block");
const textElements = document.querySelectorAll(".text-element");

// Скрываем все блоки, кроме первого
for (let i = 1; i < blocks.length; i++) {
  blocks[i].style.display = "none";
}

// Добавляем обработчик события для клика по каждому текстовому элементу
textElements.forEach((textElement, index) => {
  textElement.addEventListener("click", function() {
    // Скрываем все блоки, кроме выбранного
    for (let i = 0; i < blocks.length; i++) {
      if (i !== index) {
        blocks[i].style.display = "none";
      }
    }
    // Показываем выбранный блок
    blocks[index].style.display = "block";
  });
});






textElements.forEach(function(textElement) {
  textElement.addEventListener('click', function() {
    textElements.forEach(function(textElement) {
      textElement.classList.remove('active');
    });
    this.classList.add('active');
  });
});