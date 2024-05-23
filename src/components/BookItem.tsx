import { Book } from '../config/types'

type BookItemProps ={
    book:Book
}

function BookItem(props: BookItemProps) {
   const {book} = props

    const stiloPpal = 'p-4 m-3 h-100 w-64 border-2 border-red-500';
    const img = 'w-full'
    const title = 'font-bold text-xl'
    return (
        <div className={stiloPpal}>
            <div className={img}>
                <img className={img} src={book.photo} alt="" />
            </div>
            <div>
                <h2 className={title}>Title: {book.title}</h2>
                <p>Author: {book.author}</p>
                <p>Id: {book.id_book}</p>
            </div>
            <div>

            </div>
            <p>{book.type}</p>
            <p>{book.price} €</p>
            <div>

            </div>
        </div>

    )
}

export default BookItem