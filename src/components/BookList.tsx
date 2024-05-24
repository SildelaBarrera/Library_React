import BookItem from "./BookItem";
import {Book} from "../config/types"

const bookArray: Book [] = [{
    
    id_book: 1,
    id_user: 1,
    title: 'Caperucita Roja',
    author: 'Jacked Jhons',
    photo:'https://images.pexels.com/photos/20245912/pexels-photo-20245912/free-photo-of-old-book-on-a-fence.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 12.99,
    type: 'Tapa dura'
},
{
    id_book: 2,
    id_user: 2,
    title: 'Peter Pan',
    author: 'Hmnos',
    photo:'https://images.pexels.com/photos/20245912/pexels-photo-20245912/free-photo-of-old-book-on-a-fence.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 20,
    type: 'Tapa dura'
}
]


function BookList(){
    const list = 'flex justify-around flex-wrap gap-y-1.5'
    return (
        <div className={list}>
            {bookArray.map((book)=><BookItem book={book}/>)}
        </div>
    )
}

export default BookList