import { db } from "../../Firebase";
import { getDoc,collection,getDocs,addDoc,updateDoc,deleteDoc,doc } from "firebase/firestore";
const bookCollectionRef = collection(db,"Books")
//collection ===> the FOLDER or the TABLE
//addBook ===> adds document
// updateBook ===> updates the document. Takes 2 arguments (Id, New Data). Returns updateDoc method that takes the found doc and the new data
// deleteBook ===> deletes the document from the db. Searches the db if the document exists or not
// getAllBooks ===> returns getDocs(searched document)
class BookDataService{
     addBook = (newBook)=>{
        return addDoc(bookCollectionRef,newBook)
    }
    updateBook = (id,updatedBook)=>{
        // updatedBook ==> new data
        const bookDoc = doc(db,"Books",id) //searches the book in db
        return updateDoc(bookDoc,updatedBook) //updates the book
    }
    deleteBook = (id)=>{
        const bookDoc = doc(db,"Books",id) //searches the book in db
        if(!bookDoc)
        return
        return deleteDoc(bookDoc)
    }
    getAllBooks = ()=>{
        return getDocs(bookCollectionRef)
    }
    getBook = (id)=>{
        const bookDoc = doc(db,"Books",id)
        return getDoc(bookDoc)
    }

}
export default new BookDataService()