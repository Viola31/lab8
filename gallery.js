//import * as basicLightbox from "../node_modules/basiclightbox/src/scripts/main.js"
// Масив об'єктів з інформацією про зображення
const images = [
    {
        preview:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Palacio_de_la_Magdalena_%28Santander%2C_Cantabria%29.jpg/2560px-Palacio_de_la_Magdalena_%28Santander%2C_Cantabria%29.jpg',
        original:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Palacio_de_la_Magdalena_%28Santander%2C_Cantabria%29.jpg/2560px-Palacio_de_la_Magdalena_%28Santander%2C_Cantabria%29.jpg',
        description: ' Palacio de la Magdalena ',
    },
    {
        preview:
            'https://upload.wikimedia.org/wikipedia/commons/f/f2/Centro_Bot%C3%ADn_%2837578627575%29.jpg',
        original:
            'https://upload.wikimedia.org/wikipedia/commons/f/f2/Centro_Bot%C3%ADn_%2837578627575%29.jpg',
        description: ' Centro Botín ',
    },
    {
        preview:
            'https://upload.wikimedia.org/wikipedia/commons/7/74/Banco_de_Santander.JPG',
        original:
            'https://upload.wikimedia.org/wikipedia/commons/7/74/Banco_de_Santander.JPG',
        description: ' Building of Bank of Santander ',
    },
    {
        preview:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Santander_Cathedral_2021_-_exterior_panoramic.jpg/2560px-Santander_Cathedral_2021_-_exterior_panoramic.jpg',
        original:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Santander_Cathedral_2021_-_exterior_panoramic.jpg/2560px-Santander_Cathedral_2021_-_exterior_panoramic.jpg',
        description: ' Santander Cathedral ',
    },
    {
        preview:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Santander.Plaza.de.Italia.2.jpg/2560px-Santander.Plaza.de.Italia.2.jpg',
        original:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Santander.Plaza.de.Italia.2.jpg/2560px-Santander.Plaza.de.Italia.2.jpg',
        description: ' Plaza de Italia',
    },
    {
        preview:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Puerto_de_Santander%2C_panoramica.jpg/2880px-Puerto_de_Santander%2C_panoramica.jpg',
        original:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Puerto_de_Santander%2C_panoramica.jpg/2880px-Puerto_de_Santander%2C_panoramica.jpg',
        description: ' Puerto de Santander ',
    },
    {
        preview:
            'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/260000/260305-El-Sardinero-Beach.jpg',
        original:
            'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/260000/260305-El-Sardinero-Beach.jpg',
        description: ' El Sardinero Beach',
    },
    {
        preview:
            'https://as2.ftcdn.net/v2/jpg/02/00/81/41/1000_F_200814197_qA2d3z7ApbGhUzdFo54DYHVdJf2J7Ssn.jpg',
        original:
            'https://as2.ftcdn.net/v2/jpg/02/00/81/41/1000_F_200814197_qA2d3z7ApbGhUzdFo54DYHVdJf2J7Ssn.jpg',
        description: ' Plaza Porticada  ',
    },
];

// Елемент списку галереї
let gallery = document.querySelector('ul.gallery');
// Цикл, що перебирає масив зображень та додає кожне зображення до DOM
images.forEach((image) => {
    imageAdd(image);
});
// Функція, що створює елементи списку та додає їх до галереї
function imageAdd(imgObj) {
    let imgElem = document.createElement("img");
    imgElem.src = imgObj.preview;
    imgElem.alt = imgObj.description;

    let listItem = document.createElement("li");
    listItem.append(imgElem);
    gallery.append(listItem);
};
// Обробник події "click" для галереї
gallery.addEventListener('click', function (event) {
    let clickedImage = images.find((img) => img.preview === event.target.src);
    console.log(clickedImage.original);
    // Створення модального вікна з повнорозмірним зображенням
    const instance = basicLightbox.create(`
        <div class="modalWindow">
                 <img src="${clickedImage.original}" alt="${clickedImage.description}">
                <p>${clickedImage.description}</p>
        </div>
    `, { closable: true }); // Налаштування модального вікна, щоб його можна було закривати

    // Відображення модального вікна
    instance.show();
});
