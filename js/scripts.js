var gifsYes = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
    'img/9.jpg',
    'img/10.jpg',
    'img/11.jpg',
    'img/13.jpg',
    'img/14.jpg',
    'img/15.jpg',
    // Додайте посилання на інші картинки, які ви хочете використовувати
];

var phrasesYes = [
    "Ти завжди здивовуєш мене своєю красою. 🌟",
    "Твоя усмішка робить день яскравішим. 😊",
    "Я вірю в твої сили і талант. 💪",
    "Ти моє натхнення до досягнень. 🔥",
    "З тобою я відчуваю себе найщасливішим. 💖",
    "Ти - прекрасна душа, що світить світлою любов'ю. ✨",
    "Твоя присутність наповнює мій світ красою. 🌺",
    "Ти здатна на неймовірні речі! 🌈",
    "Твоя сила і впевненість завжди мене вражають. 💫",
    "Ти - символ краси та елегантності. 🌹",
    "Ти заслуговуєш на найкраще у світі. 🎁",
    "Твої мрії - джерело натхнення для мене. 💭",
    "З тобою кожен день - це свято! 🎉",
    "Ти - моє джерело щастя та радості. 😄",
    "Ти додаєш справжній сенс до мого життя. 💖",
    "Твоя пристрасть завжди мотивує мене до дій. 🔥",
    "Ти - втілення кохання та тепла. ❤️",
    "Твоя енергія безмежна, як твоя краса. 💥",
    "Ти - мій найкращий друг та найближчий союзник. 👫",
    "Ти вмієш здивувати своєю мудрістю та чуйністю. 🌟",
    "Ти - джерело віри та впевненості для мене. 🙏",
    "Твоя любов - найцінніший дарунок для мене. 💖",
    "Ти - неймовірна, просто твоя відмінність. 🌸",
    // Додайте інші фрази, які ви хочете використовувати
];

var gifsNo = 'img/12.jpg'; // Ссилка на статичне зображення, яке не змінюється

var phrasesNo = [
    "Ти впевнена? 🙃",
    "Бубубу 🥺",
    "КУСЬ!!!!😘",
    // Додайте інші фрази, які ви хочете використовувати
];

var defaultNoButtonTop, defaultNoButtonLeft;

window.onload = function() {
    var noButton = document.getElementById('noButton');
    var buttonRect = noButton.getBoundingClientRect();
    defaultNoButtonTop = buttonRect.top;
    defaultNoButtonLeft = buttonRect.left;
};

function changeYes() {
    var randomIndex = Math.floor(Math.random() * gifsYes.length);
    var randomGif = gifsYes[randomIndex];
    var randomPhrase = phrasesYes[Math.floor(Math.random() * phrasesYes.length)];
    document.getElementById('gif').src = randomGif;
    document.getElementById('phrase').innerText = randomPhrase;

    // Повернення кнопки "Ні" на своє місце
    var noButton = document.getElementById('noButton');
    noButton.style.position = 'static';
    noButton.style.top = 'auto';
    noButton.style.left = 'auto';
}

function changeNo() {
    var randomPhrase = phrasesNo[Math.floor(Math.random() * phrasesNo.length)];
    document.getElementById('gif').src = gifsNo;
    document.getElementById('phrase').innerText = randomPhrase;

    // Змінюємо рандомно позицію кнопки "Ні" на екрані
    var noButton = document.getElementById('noButton');
    var randomTop = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
    var randomLeft = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));

    noButton.style.position = 'absolute';
    noButton.style.top = randomTop + 'px';
    noButton.style.left = randomLeft + 'px';
}

function playAudio() {
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.play();
}