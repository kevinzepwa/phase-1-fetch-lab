function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch('https://anapioficeandfire.com/api/books')
  .then(res => res.json())
  .then(book => renderBooks(book))
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

//*Alternatively
// function fetchBooks() {
//   // To pass the tests, don't forget to return your fetch!
//   fetch('https://anapioficeandfire.com/api/books')
//   .then(res => res.json())
//   .then(data => data.map(book => renderBooks(book)))
// }

// function renderBooks(book) {
//   const main = document.querySelector('.main');
//   const h2 = document.createElement('h2');
//   h2.innerHTML = book.name;
//   main.appendChild(h2);
// }

//*Refactoring the fetch fn
// function fetchData(url, cb) {
//   fetch(url)
//   .then(res => res.json())
//   .then(data => cb(data))
// }

// const url =  'https://anapioficeandfire.com/api/books'
// fetchData(url, renderBooks)