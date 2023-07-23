import React, { useEffect, useState } from 'react';
import { Alert, Button } from "react-bootstrap";
import BookDataService from "../services/book.services";

const AddBook = ({id, setBookId}) => {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [status, setStatus] = useState("Available");
    const [flag, setFlag] = useState(true);
    const [message, setMessage] = useState({
        error: false,msg: ""
    });

    const handleSubmit = async(e) => {
        e.preventDefault();
        setMessage("");
        if(title === "" || author === ""){
            setMessage({error:true, msg: "All fields are required!"});
        }

        const newBook = {
            title,
            author,
            status
        };
        // console.log(newBook);

        try{
            if(id !== undefined && id !== ""){
                await BookDataService.updateBooks(id, newBook);
                setBookId("");
                setMessage({error:false, msg: "Updated Successfully"});
            }else{
                await BookDataService.addBooks(newBook);
                setMessage({error:false, msg: "New Book added Successfully"});
            }
        }catch(err){
            setMessage({error:true, msg: err.message})
        }

        setTitle("");
        setAuthor("");
    };
    
    const editHandler = async() => {
        setMessage("");
        try{
            const docSnap = await BookDataService.getBook(id);
            console.log("the record is: ", docSnap.data());
            setTitle(docSnap.data().title);
            setAuthor(docSnap.data().author);
            setStatus(docSnap.data().Status);
        }catch(err){
            setMessage({error: true, msg: err.message})
        }
    }

    useEffect(() => {
        console.log("the id here is: ", id);
        if(id !== undefined && id !== ""){
            editHandler();
        }
    },[id])

  return (
    <>
    <form className="form-container" onSubmit={handleSubmit}>
      <h1>Library-Firebase CRUD</h1>
      <div className="input-container">
        <label>Book:</label>
        <input
          type="text"
          name="input1"
          placeholder="Enter Book Title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Author:</label>
        <input
          type="text"
          name="input2"
          placeholder="Enter Author Name"
          value={author}
          required
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="button-container">
        <span
          className='available'
          onClick={(e) => {
            setStatus("Available");
            setFlag(true);
          }}
        >
          Available
        </span>
        <span
          className='not-available'
          onClick={(e) => {
            setStatus("Not Available");
            setFlag(false);
          }}
        >
          Not Available
        </span>
      </div>
      <div className="update-button-container">
        <button type='submit'>Add/Update</button>
      </div>
    </form>    
    </>
  )
}

export default AddBook