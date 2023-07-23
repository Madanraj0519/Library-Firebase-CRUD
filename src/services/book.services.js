import { db } from "../firebase-config";
import { 
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
 } from "firebase/firestore";

 const bookCollectionRef = collection(db, "books");

 class BookDataService {
    // Methods
    addBooks = (newBook) => {
        return addDoc(bookCollectionRef, newBook);
    };

    updateBooks = (id, updateBook) => {
        //check whether the particular is exist  or not
        const bookDoc = doc(db, "books", id);
        return updateDoc(bookDoc, updateBook);
    };

    deleteBooks = (id) => {
        //check whether the particular is exist  or not
        const bookDoc = doc(db, "books", id);
        return deleteDoc(bookDoc);
    };

    getAllBooks = () => {
        return getDocs(bookCollectionRef);
    };

    getBook = (id) => {
        //check whether the particular is exist  or not
        const bookDoc = doc(db, "books", id);
        return getDoc(bookDoc)
    };
 }

 export default new BookDataService();