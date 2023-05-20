let button = document.getElementById("modalbutton"); // находим элемент кнопки
let colors = ["red", "orange", "yelllow", "green", "blue", "darkblue", "purple"]; // массив цветов
let currentColorIndex = 0; // текущий индекс цвета

setInterval(function() {
  // изменяем цвет кнопки на следующий цвет из массива
  button.style.backgroundColor = colors[currentColorIndex];
  // увеличиваем текущий индекс цвета на 1 или сбрасываем на 0, если достигнут конец массива
  currentColorIndex = (currentColorIndex) % colors.length; // currentColorIndex + 1 убрано чтоб не словить приступ эпилепсии
}, 100); // повторяем каждые 2 секунды


// Получаем элементы модального окна и кнопку "Закрыть"
var modal = document.querySelector(".modal");
var closeButton = document.querySelector(".close");

// Показываем модальное окно
function showModalWin() {
  modal.style.display = "block";
}

// Скрываем модальное окно

function hideModalWin() {
  modal.style.display = "none";
}

// Добавляем обработчики событий на кнопку "Закрыть" и на клик вне окна
closeButton.addEventListener("click", hideModalWin);
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    hideModalWin();
    
  }
});

          // Вывод правильных неправильных ответов

// Массив с правильными ответами
const correctAnswers = ["a", "b", "c"];

// Функция проверки результатов (вывод повторяется по нажатию кнопки)
function checkAnswers(event) {
  event.preventDefault();

  const form = event.target;
  const answers = [
    form.elements.q1.value,
    form.elements.q2.value,
    form.elements.q3.value,
  ];

  
  const resultContainer = document.createElement("div");
  resultContainer.classList.add("result-container");

  let totalCorrect = 0;

  for (let i = 0; i < answers.length; i++) {
    const isCorrect = answers[i] === correctAnswers[i];
    const resultElement = document.createElement("p");

    if (isCorrect) {
      resultElement.textContent = `Вопрос ${i + 1}: Верно!`;
      resultElement.classList.add("correct");
      totalCorrect++;
      
    } else {
      resultElement.textContent = `Вопрос ${i + 1}: Неверно!`;
      resultElement.classList.add("incorrect");
    }

    resultContainer.appendChild(resultElement);
  }
  const scoreElement = document.createElement("p");
  scoreElement.textContent = `Правильных ответов: ${totalCorrect} из ${correctAnswers.length}`;
  resultContainer.appendChild(scoreElement);

  form.appendChild(resultContainer);
}

        // Изменение цвета (без информации из массива ответов)

function changeColorAnswCont1(value)
{
    var color1 = document.getElementById("answ-container1");
    switch(value)
    {
        case 'g':
            color1 = "green";
        break;
        case 'r':
            color1 = "red";
        break;
    }
    document.getElementById("answ-container1").style.backgroundColor = color1;
}

function changeColorAnswCont2(value)
{
    var color2 = document.getElementById("answ-container2");
    switch(value)
    {
        case 'g':
            color2 = "green";
        break;
        case 'r':
            color2 = "red";
        break;
    }
    document.getElementById("answ-container2").style.backgroundColor = color2;
}

function changeColorAnswCont3(value)
{
    var color3 = document.getElementById("answ-container3");
    switch(value)
    {
        case 'g':
            color3 = "green";
        break;
        case 'r':
            color3 = "red";
        break;
    }
    document.getElementById("answ-container3").style.backgroundColor = color3;
}





// Перебираем все найденные элементы и отключаем возможность изменения выбора
function disableRadioButtonsBlock(name) {
  const radioButtonList = document.querySelectorAll('input[type="radio"][name=' + name + ']');
  radioButtonList.forEach(radio => {
  radio.disabled = true;
  });
}

function resetColorNone() {
  var containers = document.querySelectorAll(".answer-container");
  for(var i = 0; i < containers.length; i++) {

    containers[i].style.backgroundColor = "";
  }
}

function enableRadioButtonsBlock() {
  var radios = document.querySelectorAll('input[type="radio"]');
  radios.forEach(function(radio) {
  radio.disabled = false;
});
}

function eraseResultContainer () {
  var element = document.querySelector('.result-container');
  element.remove();
}

function disableSubmitButton () {
  document.getElementById("submitButton").disabled = true;
}

function enableSubmitButton () {
  document.getElementById("submitButton").disabled = false;
}

function enableResetButton () {
  document.getElementById("resetButton").disabled = false;
}

function disableResetButton () {
  document.getElementById("resetButton").disabled = true;
}

        // Для проверки по сабмиту
// Обработчик события для формы
const quizForm = document.getElementById("quiz-form");
quizForm.addEventListener("submit", checkAnswers);
quizForm.addEventListener("submit", disableSubmitButton)
quizForm.addEventListener("submit", enableResetButton)
quizForm.addEventListener("reset", enableSubmitButton)
quizForm.addEventListener("reset", disableResetButton)
quizForm.addEventListener("reset", resetColorNone)
quizForm.addEventListener("reset", enableRadioButtonsBlock)
quizForm.addEventListener("reset", eraseResultContainer)


// Обработчики событий для радиокнопок
const radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach((button) =>
  button.addEventListener("change", checkAnswers)
);




let globalLikeCounter;
let globalDislikeCounter;

const likes = document.querySelectorAll('.like');
const dislikes = document.querySelectorAll('.dislike');

// Объявляем глобальные переменные
globalLikeCounter = 4;
globalDislikeCounter = 4;

likes.forEach(like => {
  const likeButton = like.querySelector('.like-btn');
  const counterElement = like.querySelector('.like-count');
  
  counterElement.innerHTML = globalLikeCounter;

  let likeCounter = globalLikeCounter; // Используем глобальную переменную
  let isPlus = true;

  likeButton.addEventListener('click', () => {
    if (isPlus) {
      renderLike(++likeCounter, counterElement);
      globalLikeCounter = likeCounter; // Обновляем глобальную переменную
      
    } else {
      renderLike(--likeCounter, counterElement);
      globalLikeCounter = likeCounter; // Обновляем глобальную переменную
      
    }
    isPlus = !isPlus;
    changeColorOfEvent();
  });
});

dislikes.forEach(dislike => {
  const dislikeButton = dislike.querySelector('.dislike-btn');
  const counterElement = dislike.querySelector('.dislike-count');
  counterElement.innerHTML = globalDislikeCounter;

  let dislikeCounter = globalDislikeCounter; // Используем глобальную переменную
  let isPlus = true;

  dislikeButton.addEventListener('click', () => {
    if (isPlus) {
      renderDislike(++dislikeCounter, counterElement);
      globalDislikeCounter = dislikeCounter; // Обновляем глобальную переменную
    } else {
      renderDislike(--dislikeCounter, counterElement);
      globalDislikeCounter = dislikeCounter; // Обновляем глобальную переменную
    }
    isPlus = !isPlus;
    changeColorOfEvent();
  });
});

// Функция обновляет текст
const renderLike = (counter, counterElement) => counterElement.innerText = counter;
const renderDislike = (counter, counterElement) => counterElement.innerText = counter;

console.log(globalLikeCounter);
console.log(globalDislikeCounter);

function changeColorOfEvent () {

  const eventElement = document.querySelector(".event")

  if (globalLikeCounter > globalDislikeCounter) {
    eventElement.style.backgroundColor = "#ABEBC6";

  } else if (globalLikeCounter < globalDislikeCounter) {
    eventElement.style.backgroundColor = "#F5B7B1";

  } else {
    eventElement.style.backgroundColor = "#E5E7E9";
  }
}

changeColorOfEvent();