// 4.Filtering and Capitalizing: Books Published After 2010 with Author Names.

// Input list of books
const books = [
    { title: "Book 1", author: "john doe", year: 2005 },
    { title: "Book 2", author: "jane smith", year: 2012 },
    { title: "Book 3", author: "bob brown", year: 2000 },
    { title: "Book 4", author: "alice johnson", year: 2015 },
    { title: "Book 5", author: "charlie davis", year: 2008 },
  ];
  
  // Filter out books published before 2010 and capitalize author names
  const filteredBooks = books.filter(book => book.year >= 2010).map(book => ({
    title: book.title,
    author: book.author.toUpperCase(),
    year: book.year,
  }));
  
  console.log(filteredBooks);