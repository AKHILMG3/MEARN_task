import { createSlice } from "@reduxjs/toolkit";


const bookSlice = createSlice({

    name:'bookslice',
    initialState:{
        books:[]
    },

    reducers:{
        addBook:(state,action) =>{
            state.books.push(action.payload)
        },
        editBook:(state, action) =>{
            const {id,title,author} = 
            action.payload;
            const existingBook = state.books.find((book) => book.id ===
            id );

            if(existingBook){
                existingBook.title=title;
                existingBook.author=author;
            }
        },
        deleteBook:(state,action) => {
            state.books = 
            state.books.filter((book) => book.id !==
        action.payload)
        }
    }
})

export const {addBook , editBook , deleteBook} = 
bookSlice.actions
export default bookSlice.reducer