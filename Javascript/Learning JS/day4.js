const books = [
  { title: "The Alchemist", author: "Paulo Coelho" },
  { title: "Atomic Habits", author: "James Clear" }
];
books.push({title: " The Power of Habit", author: "Charles Duhigg"});
for (let i = 0; i < books.length; i++) {
  console.log(`Title: ${books[i].title}, Author: ${books[i].author}`);
}
for(let i=0; i<books.length; i++){
    delete books[i].title;
    console.log(books[i].title);
    console.log(books[i].author);
 
}