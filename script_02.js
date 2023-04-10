const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

const titles = array => array.map( book => book.title );
console.log("Le tableau de titres est :", titles(books));

const allrented = array => {
  return array.every(book => book.rented > 0);
}
console.log("Ont ils tous été emprunté au moins une fois V/F?", allrented(books));

const mostrented = array => {
  return array.reduce((maxRentedBook, currentBook) => {
    return currentBook.rented > maxRentedBook.rented ? currentBook : maxRentedBook ;
  });
}
console.log("le livre le plus loué est:", mostrented(books));

const leastRented = array => {
  return array.reduce((leastRentedBook, currentBook) => {
    return currentBook.rented < leastRentedBook.rented ? currentBook : leastRentedBook ;
  });
}
console.log("le livre le moins loué est:", leastRented(books));

const filterById = (array, specificId) => {
  return array.filter(book => book.id !== specificId)
}
console.log("tous les livres sauf celui avec un specific Id :(133712)", filterById(books, 133712));