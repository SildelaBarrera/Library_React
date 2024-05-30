import BookItem from "./BookItem";
import {Book} from "../config/types"

const bookArray: Book [] = [{
    
    id_book: 1,
    id_user: 1,
    title: 'ALICE IN WONDERLAND',
    type: 'Hard cover',
    author: 'Lewis Carroll',
    price: 12.99,
    photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGHRxG_IZX-fd2i7pbgxAJFKeh2w2B19917yBm4i56mMUOOC2SRAQHTXJ9Ef7Fl41Ze20&usqp=CAU',
    
    
},
{
    id_book: 2,
    id_user: 2,
    title: 'CINDERELLA',
    type: 'Soft cover',
    author: 'Grimm',
    price: 20,
    photo:'https://d.gr-assets.com/books/1382793475l/251299.jpg',
    
},
{
    id_book: 1,
    id_user: 1,
    title: 'THE LITTLE MERMAID',
    type: 'Soft cover',
    author: 'Andersen',
    price: 12.99,
    photo:'https://www.elsotano.com/imagenes_grandes/9788494/978849417145.JPG',
    
},
{
    id_book: 1,
    id_user: 1,
    title: 'ROBIN HOOD',
    type: 'Hard cover',
    author: 'Howard',
    price: 12.99,
    photo:'https://www.elsotano.com/imagenes_grandes/9781435/978143514474.JPG'   
}
]


function BookList(){

    const [books, setBooks] = useState ([]);
    return (
        <>
            {books.map((book) => (
            <Book key={id_book} book={book} />
            
           ) )}
        
        
        </>
    )

    // const list = 'flex justify-around flex-wrap gap-2'
    
    // return (
    //     <div className={list}>
    //         {bookArray.map((book)=><BookItem book={book}/>)}
    //     </div>
    // )
}

export default BookList