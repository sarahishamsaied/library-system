import { db } from "../../Firebase";
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";
  
  const bookCollectionRef = collection(db, "Books");
  class BookDataService {
    addBooks = (newBook) => {
      return addDoc(bookCollectionRef, newBook);
    };
  
    updateBook = (id, updatedBook) => {
      const bookDoc = doc(db, "Books", id);
      return updateDoc(bookDoc, updatedBook);
    };
  
    deleteBook = (id) => {
      const bookDoc = doc(db, "Books", id);
      return deleteDoc(bookDoc);
    };
  
    getAllBooks = () => {
      return getDocs(bookCollectionRef);
    };
  
    getBook = (id) => {
      const bookDoc = doc(db, "Books", id);
      return getDoc(bookDoc);
    };
  }
  
  export default new BookDataService();