import React, { useEffect, useState } from 'react';
import BookDataService from "../services/book.services";

const BookList = ({getBookId}) => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        getBooks();
    },[]);

    const getBooks = async() => {
        const data = await BookDataService.getAllBooks();
        // console.log(data.docs);
        setBooks(data.docs.map((doc) => (
            { ...doc.data(), id: doc.id}
        )));
    }

    const deleteBookId = async(id) => {
        await BookDataService.deleteBooks(id);
        getBooks();
    }

  return (
    <div className="table-container">
      <button onClick={getBooks}>Refresh</button>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Book title</th>
            <th>Book Author</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {
                books.map((doc, index) => {
                    return(
                        <tr key={doc.id}>
                        <td>{index + 1}</td>
                        <td>{doc.title}</td>
                        <td>{doc.author}</td>
                        <td>{doc.status}</td>
                        <td>
                          <button
                           className='edit'
                            onClick={(e) => getBookId(doc.id)}
                            >Edit
                          </button>

                          <button 
                           className='delete'
                            onClick={(e) => deleteBookId(doc.id)}
                             >Delete
                        </button>
                        </td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default BookList