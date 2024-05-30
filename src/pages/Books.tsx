// import Book from "../components/BookItem"
import BookList from "../components/BookList"


function Books() {
    
    const styleBookPage = "";
    return (
        <>
        
        <div className= "border-2 border-black h-190 w-full">
            <h1> MY BOOKS </h1>
        </div>
        <main className = {styleBookPage}>
            <BookList/>
        </main>

        </>
    )

   
}

export default Books