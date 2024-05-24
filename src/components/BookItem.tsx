
import { BiTrash, BiPencil } from "react-icons/bi"; 
import { Book } from "../config/types"


type BookItemProps = {
  book: Book
}

function BookItem(props: BookItemProps) { 
  
  const { book } = props;
  
  return (
    <article className="m-8 border-4 border-black rounded h-40 w-20">
      <img className="w-20 h-40" src={book.photo} alt={`Portada del libro ${book.title}`} />

      <div className="p-4 flex flex-col gap-2">
        <span className="text-2xl font-bold">{book.title}</span>

        <div className="flex items-center justify-between">
          <span className="text-xl text-gray-600">{book.author}</span>
          <span className="bg-teal-400 py-1 px-4 rounded-full text-white font-bold">{book.type}</span>
        </div>

        <div className="flex items-center">
          <span className="text-2xl italic">{book.price}€</span>
         
          <span className="ml-auto mr-4">
            <BiPencil className="text-indigo-700" size={20} />
          </span>
          <span>
            <BiTrash className="text-red-500" size={20}/>
          </span>
        </div>
      </div>
    </article>
  )
}

export default BookItem;