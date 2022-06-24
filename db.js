const mysql = require('mysql')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'manager',
  database: 'book_db',
  connectionLimit: 20,
})

module.exports = { pool }

// create table book(
//     book_id integer primary key auto_increment,
//     book_title varchar(100),
//     publisher_name varchar(100),
//     author_name varchar(100)
// )

//INSERT INTO book ( book_title,publisher_name,author_name) VALUES ("ShreemanYogi","ReaderZone","VishwasPatil");
// INSERT INTO book ( book_title,publisher_name,author_name) VALUES ("Panipat","BooksZone","RanjitDesai");
// INSERT INTO book ( book_title,publisher_name,author_name) VALUES ("Yugandhar","WolfRead","ShivajiSawant");
// INSERT INTO book ( book_title,publisher_name,author_name) VALUES ("Musafir","FoxReader","AchyutGodbole");
// {
//     "book_title":"Panipat",
//     "publisher_name":"Readerzone",
//     "author_name":"vishwaspatil"
// }
