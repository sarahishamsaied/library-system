// import React from 'react'
// import { useState } from 'react'
// import { createContext } from 'react'
// import BookDataService from '../Components/Services/Book.services'
// import { useContext } from 'react'
// import { useEffect } from 'react'
// export const BookCtx = createContext()
// export default function BookDataProvider({children}) {
//     const [books,setBooks] = useState([])
//     const getBooks = async()=>{
//         const data = await BookDataService.getAllBooks();
//         console.log("data is")
//         console.log(data.docs);
//         setBooks(data.docs.map((doc)=>({ ...doc.data(), id:doc.id})))
//         console.log(books)
//        }
//        useEffect(()=>{
//         getBooks();
//        },[])
//     //    function setBookData(newData){
//     //         setBooks(newData)
//     //    }
//   return <BookCtx.Provider value={{books}}>
//       {children}
//   </BookCtx.Provider>
// }
// export function useBookContext(){
//     return useContext(BookCtx)
// }
