const buttons = document.querySelectorAll('.button');
const modals = document.querySelectorAll('.modal');

// Функция для показа случайного модального окна
function showRandomModal() {
    const randomIndex = Math.floor(Math.random() * modals.length); // Генерируем случайный индекс
    const modal = modals[randomIndex]; // Получаем случайное модальное окно
    modal.style.display = 'block'; // Показываем модальное окно

    // Создаем элемент изображения
    const image = document.createElement('img');
    image.src = 'img/book-background.jpg'; // Замените 'example.jpg' на путь к вашему изображению
    image.alt = 'Картинка';
    image.style.maxWidth = '100%';

    // Вставляем изображение перед первым дочерним элементом модального окна
    modal.insertBefore(image, modal.firstChild);
}

// Добавляем обработчик клика на каждую кнопку
buttons.forEach(button => {
    button.addEventListener('click', showRandomModal);
});