const quote = document.getElementById('quote'); 
const img = document.getElementById('img'); 
const author = document.getElementById('author');

let getData = function() {
    fetch('https://thatsthespir.it/api')
    .then(res => res.json())
    .then((data) =>{
        quote.innerText = '"' + data.quote + '"';
        author.innerText = data.author;
        img.src = data.photo;
    });
};

getData();
