// import Book from '../models/book.js'

// export const getAllBooks = async (req, res) => {
//   try {
//     const book = await Book.find()
//       .then((data) => res.send(data.slice(0, 150)))
//       .catch((err) => console.log(err.message));

//     res.status(200).json({ message: error.message });
//   } catch (error) {}
// };

// export const addBook = (req, res) => {
//   let {
//     title,
//     writer,
//     category,
//     almira,
//     shelf,
//     publisher,
//     isbn,
//     totalPage,
//     yearOfPublication,
//     description,
//     price,
//   } = req.body;
//   let book = new Book({
//     title,
//     writer,
//     category,
//     almira,
//     shelf,
//     publisher,
//     isbn,
//     totalPage,
//     yearOfPublication,
//     description,
//     price,
//   });
//   console.log(book);

//   book
//     .save()
//     .then((b) => {
//       console.log("Book posted to mongo", b);
//       res.send(b)
//     })
//     .catch((e) => {
//       console.log(e);
//       res.json({
//         message: "Error Occurred",
//       });
//     });
// };

// export const getBook = async (req, res, next) => {
//   let id  = req.params.id;
//   Book.findById(id)
//     .then((b) => {
//       res.json(b);
//     })
//     .catch((e) => {
//       console.log(e);
//       res.json({
//         message: "Error Occurred",
//       });
//     });
// };



// export const getHint = async (req, res, next) => {
//   const filter = req.params.filter
//   const value = req.params.keyword
  
//   try {
//     let booksQuery = null;
//     // const books = await Book.find({`${filter}` : new RegExp(value,"i")});    

//     switch (filter) {
//       // case "everywhere":
//       //   setHint([]);
//       //   break;
//       case "title":
//         booksQuery = Book.find({ title: new RegExp(value, "i") }).select("title -_id");
//         break;
//       case "writer":
//         booksQuery = Book.find({ writer: new RegExp(value, "i") }).select("writer -_id");
//         break;
//       case "publisher":
//         booksQuery = Book.find({ publisher: new RegExp(value, "i") }).select(
//           "publisher -_id"
//         );
//         break;
//       case "category":
//         booksQuery = Book.find({ category: new RegExp(value, "i") }).select(
//           "category -_id"
//         );
//         break;
//       case "almira":
//         booksQuery = Book.find({ almira: new RegExp(value, "i") }).select(
//           "almira -_id"
//         );
//         break;
//       case "isbn":
//         booksQuery = Book.find({ isbn: new RegExp(value, "i") }).select(
//           "isbn -_id"
//         );
//         break;
//       default:
//         booksQuery = null;
//         break;
//     }

//     if (booksQuery == null) {
//       res.send([]);
//       return;
//     }

//     var books = await booksQuery.limit(10);
//     var hints = books.map(b=>b[filter]);
//     res.send(hints);
//     // console.log(hints);
//   } catch (err) {
//     console.log(err);
//   }
// };


// export const getSearchResults = async (req, res, next) => {
//   const filter = req.params.filter;
//   const value = req.params.keyword;
//   // console.log("search", filter, value);
//   // const books = await Book.find({`${filter}` : new RegExp(value,"i")});
//   let searchResult = null;
//   switch (filter) {
//     // case "everywhere":
//     //   setHint([]);
//     //   break;
//     case "title":
//       searchResult = await Book.find({ title: new RegExp(value, "i") });
//       break;
//     case "writer":
//       searchResult = await Book.find({ writer: new RegExp(value, "i") });
//       break;
//     case "publisher":
//       searchResult = await Book.find({ publisher: new RegExp(value, "i") });
//       break;
//     case "category":
//       searchResult = await Book.find({ category: new RegExp(value, "i") });
//       break;
//     case "almira":
//       searchResult = await Book.find({ almira: new RegExp(value, "i") });
//       break;
//     case "isbn":
//       searchResult = await Book.find({ isbn: new RegExp(value, "i") });
//       break;
//     default:
//       searchResult = [];
//       break;
//   }
//   res.send(searchResult);
// };

// export const editBook = (req, res) => {
//   let {
//     title,
//     writer,
//     category,
//     almira,
//     shelf,
//     publisher,
//     isbn,
//     totalPage,
//     yearOfPublication,
//     description,
//     price,
//   } = req.body;
//   console.log(req.params)
  
//   const id = req.params.id
//   console.log(title, writer, id)
//   Book.findOneAndUpdate(
//     {
//       _id: id,
//     },
//     {
//       $set: {
//         title,
//         writer,
//         category,
//         almira,
//         shelf,
//         publisher,
//         isbn,
//         totalPage,
//         yearOfPublication,
//         description,
//         price,
//       },
//     },
//     {
//       new: true,
//     }
//   )
//     .then((book) => {
//       // res.json(book);
//       res.send(book)
//     })
//     .catch((e) => {
//       console.log(e);
//       res.json({
//         message: "Error Occurred",
//       });
//     });
// }

// export const deleteBook = (req, res) => {
//   let { id } = req.params;
//   Book.findOneAndDelete({
//     _id: id,
//   })
//     .then((contact) => {
//       res.json(contact);
//     })
//     .catch((e) => {
//       console.log(e);
//       res.json({
//         message: "Error Occurred",
//       });
//     });
//  }

// export const postAllBook = (req, res) => {
//   const allBooks = req.body;

//   allBooks.forEach((b) => {
//     //   res.send(b);
//     let {
//       title,
//       writer,
//       category,
//       almira,
//       shelf,
//       publisher,
//       isbn,
//       totalPage,
//       yearOfPublication,
//       description,
//       price,
//     } = b;
//     let book = new Book({
//       title,
//       writer,
//       category,
//       almira,
//       shelf,
//       publisher,
//       isbn,
//       totalPage,
//       yearOfPublication,
//       description,
//       price,
//     });

//     book
//       .save()
//       .then((b) => {
//         console.log("posted to mongo", b);
//       })
//       .catch((e) => {
//         console.log(e);
//         res.json({
//           message: "Error Occurred",
//         });
//       });
//   });
// };