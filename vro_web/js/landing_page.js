let typeEffect = document.getElementById("type-effect")

let displayText = [];

let phrases = [
    "Where History Meets Strategy and Facts Define Power.", 
    "Facts Forge Power in the Realm of History and Strategy.",
    "Facts, History, and Strategy: The Essence of Power.",
    "Power: Crafted by the Hands of History and Strategy.",
    "Historical Facts and Strategy Narrate the Story of Power."
];

let i = 0;
let j = 0;
let isDeleting = false;
let isEnd = false;

function loop(){
    isEnd = false;

    if (i < phrases.length)
    {
        if(!isDeleting && j < phrases[i].length)
        {
            displayText.push(phrases[i][j]);
            j++;
            typeEffect.innerText = displayText.join("");
        }

        if(isDeleting && j <= phrases[i].length)
        {
            displayText.pop();
            j--;
            typeEffect.innerText = displayText.join("");
        }

        if(j == phrases[i].length)
        {
            isDeleting = true;
            isEnd = true;
        }

        if(isDeleting && j == 0)
        {
            displayText = [];
            i++; 
            isDeleting = false;

            if(i == phrases.length)
            {
                i = 0;
            }
        }
    }

    const speed = Math.random() * 80;
    const normalSpeed = Math.random() * 300;
    const time = isEnd ? 2000 : isDeleting ? speed : normalSpeed;
    setTimeout(loop, time);
}

loop();


document.addEventListener("DOMContentLoaded", function() {

    const dropDownContainer = document.getElementsByClassName("dropdown");
    const dropDownButton = document.getElementById("dropbtn");
    const dropDownContent = document.getElementsByClassName("dropdown-content");

    if (dropDownButton && dropDownContent) {
    dropDownButton.addEventListener("click", function(event){
        event.preventDefault();
        dropDownContent[0].classList.toggle("show");
    });

    document.addEventListener("click", function(event){
        if(!dropDownContainer[0].contains(event.target) && event.target !== dropDownButton){
            dropDownContent[0].classList.remove("show");
        }
    });
    }
});



let bookContainer = document.getElementById("book-container");

let bookItems = [
        {
            img: "../assets/book-1.png",
            bookTitle: "A Legacy Faded in History's Shadow.",
            producer: "Eldvar Institute",
            numberOfReaders: "2.5K Reads",
        },

        {
            img: "../assets/book-2.png",
            bookTitle: "Brahmins : Brahmin Exploring the Brahmin Gene.",
            producer: "Eldvar Institute",
            numberOfReaders: "2.0K Reads",
        },

        {
            img: "../assets/book-3.jpeg",
            bookTitle: "Impact of Rupee Depreciation on the Indian Economy.",
            producer: "Frontier Reaserch Hub",
            numberOfReaders: "1.3K Reads",
        },

        {
            img: "../assets/book-4.png",
            bookTitle: "The Reality Of Constitution Writer.",
            producer: "Elvdar Institute",
            numberOfReaders: "1.7k Reads",
        },
];


bookItems.forEach((bookInfo) => {

    let book = document.createElement("div");
    book.classList.add("book-dimension");

    let bookImage = document.createElement("div");
    bookImage.classList.add("book-img");

    const image = document.createElement("img");
    image.src = bookInfo.img;

    bookImage.appendChild(image);

    let bookTitle = document.createElement("div");
    bookTitle.classList.add("book-title");

    const title = document.createElement("h2");
    title.textContent = bookInfo.bookTitle;

    bookTitle.appendChild(title);

    let producer = document.createElement("div");
    producer.classList.add("institute");

    const institute = document.createElement("p");
    institute.textContent = bookInfo.producer;

    producer.appendChild(institute);

    let readers = document.createElement("div");
    readers.classList.add("reader");

    readers.textContent = bookInfo.numberOfReaders;

    book.appendChild(bookImage);
    book.appendChild(bookTitle);
    book.appendChild(producer);
    book.appendChild(readers);

    bookContainer.appendChild(book);
})

