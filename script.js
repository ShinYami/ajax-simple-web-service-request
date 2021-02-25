const quote = document.getElementById('quote'); 
const img = document.getElementById('img'); 
const author = document.getElementById('author');

function sentence() {
    fetch('https://thatsthespir.it/api')
    .then(res => res.json())
    .then((data) =>{
        inject(data);
    });
};

function inject(data) {
    quote.innerText = '"' + data.quote + '"';
    author.innerText = data.author;
    img.src = data.photo;
};

sentence();
