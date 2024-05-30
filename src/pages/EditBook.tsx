import { useState } from "react"

function EditBook () {

  const [formValues, setFormValues] = useState({
    title: '',
    type: '',
    author: '',
    price: '',
    photo: ''
  })

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>){
    const {name, value} = event.target;
    setFormValues({...formValues, [name]: value});
  }

  function handleSelectChange(event:React.ChangeEvent<HTMLSelectElement>){
    const {name, value} = event.target;
    setFormValues({...formValues, [name]: value})
  }
  

    return(    

      <form className = "h-96 w-96 flex flex-col items-center justify-center gap-8 rounded bg-teal-100">
            
      <input className="h-8 w-80 border-2 border-teal-700 rounded" type="text" name="title" placeholder="Title" value ={formValues.title} onChange={handleInputChange}/>
      <select className="h-8 w-80 border-2 border-teal-700 rounded" name="type" value ={formValues.type} onChange={handleSelectChange}>
        <option value =''>Select cover</option>
        <option value ='soft cover'>Soft cover</option>
        <option value ='hard cover'>Hard cover</option>
      </select>
      <input className="h-8 w-80 border-2 border-teal-700 rounded" type="text" name="author" placeholder="Author" value ={formValues.author} onChange={handleInputChange}/>
      <input className="h-8 w-80 border-2 border-teal-700 rounded" type="number" name="price" placeholder="Price" value ={formValues.price} onChange={handleInputChange}/>
      <input className="h-8 w-80 border-2 border-teal-700 rounded" type="text" name="photo" placeholder="Photo" value ={formValues.photo} onChange={handleInputChange}/>
      

      
      <button className="h-8 w-48 border-2 border-teal-700 rounded bg-teal-200">Guardar</button>

      {/* <pre style={{fontSize: '2rem'}}>
          {JSON.stringify(formValues, null, 3)}
      </pre> */}

  </form>
    )
}

export default EditBook;