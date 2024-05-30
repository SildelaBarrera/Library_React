
import { BiTrash, BiPencil } from "react-icons/bi"; 
import { Book } from "../config/types"


type BookItemProps = {
  book: Book
}

function BookItem(props: BookItemProps) {
  const {book} = props

  const styleCard = 'h-96 w-60 m-8 p-2 flex flex-col items-center justify-center border-slate-400 border-2 rounded bg-sky-100';
  
  return (
    <div className={styleCard}>

      <div className="h-52 w-40 flex items-center justify-center border-2 border-slate-400 border-dotted bg-white">
        <img className = "h-52 w-40" src={book.photo} alt={`Portada ${book.title}`} />
      </div>

      <div className="h-20 w-full flex flex-col items-center pt-4 m-2 font-serif">
        <p className="font-bold text-center text-cyan-600 text-sm">{book.title}</p>
        <p className="text-cyan-700 ">{book.author}</p>
      </div>

      <div className=" flex gap-2 font-serif text-slate-500"> 
        <span className="">{book.type} ❊ {book.price}€</span>
        <span className="">
            <BiPencil className="text-emerald-700" size={20} />
        </span>
        <span>
            <BiTrash className="text-emerald-700" size={20}/>
        </span>
      </div>

      <div className=" flex"> 
        
      </div>
      

    </div>
  )
}

export default BookItem;