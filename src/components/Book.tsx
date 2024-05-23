// import {ReactNode} from "react"

import { Book } from "../config/types"


// function Book(props: BookProps) {
    
//     return(
//         <div className ='inblock-flex 
//         justify-items-center content-center h-96 w-60 border-blue-500 border-solid border-4'>
//             <h1 className = "font-bold text-lg border-black border-solid border-2 text-center p-2">{props.title}</h1>
//             <h2 className = "m-2 text-center" > Author: {props.author}</h2>
//             <h2 className = "m-2 text-center" > Pages: {props.pages}</h2>
//             <div className= "m-3 flex justify-center h-40 w-30 border-blue-500 border-solid border-2 ">  
//                 <img className = 'h-40 w-30' src = {props.photo} alt= "book1"></img>
//             </div>  
//         </div>

//     )

type BookProps = { book: Book} 

function Book( props: BookProps){
    const {book}
    const book1 = {
        id_book: 1,
        id_user: 1,
        title: "Harry Potter and the Philosopher's Stone",
        type: 'Soft cover',
        author: "J. K. Rowling",
        price: 10,
        photo: "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9781526626585.jpg"
    }
   
    return(
        <article className = "borde-2 border-black border-solid">
            <div className= "flex flex col gap-2 rounded w-1/2">
                <span className="text-2xl font-bold">{book1.title}</span>        
            </div>
        
            <div>
                <img src={book1.photo} alt={'portada libro ${book1.title}'}></img>
            </div>
        
            <div>

                <span className= "text-lg ">{book1.author}</span>
                <span className= "text-lg ">{book1.type}</span>
                <span className= "text-lg ">{book1.price}</span>
                <span>
                    <BiEditAll className = " text-indigo-700"></BiEditAll>
                </span>
            </div>
        </article>
    )
  
}
export default Book
