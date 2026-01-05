const STORAGE_KEY = 'feedback-msg';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');

textarea.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

populateTextArea();

// - Скасовуємо стандартну поведінку
// - Видаляємо повідомлення зі сховища
// - Очищаємо форму

function handleSubmit(event) {
  event.preventDefault();

  console.log('submitting the form');
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

// - Отримуємо значення поля
// - Зберігаємо його у сховище

function handleInput(event) {
  const message = event.target.value;
  localStorage.setItem(STORAGE_KEY, message);
}

// - Отримуємо значення зі сховища
// - Якщо там щось було, оновлюємо DOM

function populateTextArea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    textarea.value = savedMessage;
  }
}
