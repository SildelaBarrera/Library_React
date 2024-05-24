// import Book from "../components/BookItem"
import BookList from "../components/BookList"


function BookPage() {
    
    const styleBookPage = " border-2 border-black border-solid";
    return (

        <main className = {styleBookPage}>
            <BookList/>
        </main>
    )

   
}

export default BookPage