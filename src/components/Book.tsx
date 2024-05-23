import {ReactNode} from "react"


type BookProps = {
    title: string,
    author?: string,
    pages?: number,
    children?: ReactNode;
}


const book1: BookProps = {

    title: "Harry"
}
console.log (book1)

function Book(props: BookProps) {
console.log ( props)

}
export default Book