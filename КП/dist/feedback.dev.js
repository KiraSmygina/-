"use strict";

// feedback.js
// Функция для загрузки модального окна
function loadFeedbackModal() {
  fetch('feedback.html').then(function (response) {
    return response.text();
  }).then(function (data) {
    // Создаем временный элемент для вставки HTML
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = data; // Вставляем модальное окно в конец body

    document.body.insertAdjacentHTML('beforeend', tempDiv.querySelector('#feedbackModal').outerHTML); // Инициализируем модальное окно

    var modal = new bootstrap.Modal(document.getElementById('feedbackModal')); // Показываем модальное окно

    modal.show();
  })["catch"](function (error) {
    return console.error('Ошибка загрузки формы:', error);
  });
} // Функция для инициализации


function initFeedbackButton() {
  var feedbackButton = document.querySelector('nav a[href="feedback.html"]'); // Убедитесь, что селектор соответствует вашей кнопке

  if (feedbackButton) {
    feedbackButton.addEventListener('click', function (event) {
      event.preventDefault(); // Предотвращаем переход по ссылке

      loadFeedbackModal();
    });
  }
} // Загружаем модальное окно и инициализируем кнопку


window.onload = function () {
  initFeedbackButton();
};
//# sourceMappingURL=feedback.dev.js.map
