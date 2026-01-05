// ======= task-01 ======= //

// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список

const bodyEl = document.body;
console.log(bodyEl);

// ----------------------- //

const titleEl = document.querySelector('#title');
console.log(titleEl);

// ----------------------- //

const listEl = document.querySelector('.list');
console.log(listEl);

// ----------------------- //

const dataEls = document.querySelectorAll('[data-topic]');
console.log(dataEls);

// ----------------------- //

const firstDataEl = dataEls[0];
console.log(firstDataEl);

// ----------------------- //

const lastDataEl = dataEls[dataEls.length - 1];
console.log(lastDataEl);

// ----------------------- //

console.log(titleEl.nextElementSibling);

// ----------------------- //

const subtitles = document.querySelectorAll('h3');
console.log(subtitles);

// ----------------------- //

subtitles.forEach((h3) => {
  h3.classList.add('active');
});

// ----------------------- //

const navItem = document.querySelector('li[data-topic="navigation"]');
console.log(navItem);

// ----------------------- //

navItem.style.backgroundColor = 'yellow';

// ----------------------- //

const itemText = navItem.querySelector('p');
itemText.textContent = 'Я змінив тут текст!';

// ----------------------- //

const currentTopic = 'manipulation';

const topicEl = document.querySelector(`[data-topic="${currentTopic}"]`);
console.log(currentTopic);

// ----------------------- //

topicEl.style.backgroundColor = 'lightblue';

// ----------------------- //

const completedTitle = document.querySelector('.completed');
console.log(completedTitle);

// ----------------------- //

completedTitle.parentElement.remove();

// ----------------------- //

const paragraph = document.createElement('p');
paragraph.textContent = "Об'єктна модель документа (Document Object Model)";

titleEl.insertAdjacentElement('afterend', paragraph);

// ----------------------- //

// const liEl = document.createElement('li');

// const newTitleEl = document.createElement('h3');
// newTitleEl.textContent = 'Властивість innerHTML';

// const descEl = document.createElement('p');
// descEl.textContent =
//   'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';

// liEl.append(newTitleEl, descEl);

// listEl.append(liEl);

// ----------------------- //

listEl.insertAdjacentHTML(
  'beforeend',
  `
    <li>
      <h3>Властивість innerHTML</h3>
      <p>
        Ще один спосіб створити DOM-елементи і помістити їх в дерево —
        це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу
      </p>
    </li>
  `
);

// ----------------------- //

listEl.innerHTML = '';

// ======================= //
// ======= task-02 ======= //

// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).
// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const numberContainer = document.createElement('div');

numberContainer.classList.add('number-container');

listEl.insertAdjacentElement('afterend', numberContainer);

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

for (let i = 0; i < 100; i++) {
  const numberEl = document.createElement('div');
  const value = randomNumber();

  numberEl.textContent = value;
  numberEl.classList.add('number');

  if (value % 2 === 0) {
    numberEl.classList.add('even');
  } else {
    numberEl.classList.add('odd');
  }

  numberContainer.append(numberEl);
}

// ======================= //
// ======= task-03 ======= //
// ======================= //
// ======= task-04 ======= //

// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

const box = document.querySelector('.box');
const decreaseBtn = document.querySelector('.js-decrease');
const increaseBtn = document.querySelector('.js-increase');

let size = box.offsetWidth;

decreaseBtn.addEventListener('click', () => {
  if (size <= 20) return;

  size -= 20;
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
});

increaseBtn.addEventListener('click', () => {
  size += 20;
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
});

// ======================= //
