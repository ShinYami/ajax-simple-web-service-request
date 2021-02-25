const quote = document.getElementById('quote'); 
const img = document.getElementById('img'); 
const author = document.getElementById('author');

let sentence = function() {
    fetch('https://thatsthespir.it/api')
    .then(res => res.json())
    .then((data) =>{
        inject(data);
    });
};

let inject = function(data) {
    quote.innerText = '"' + data.quote + '"';
    author.innerText = data.author;
    img.src = data.photo;
};

sentence();
