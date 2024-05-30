import { useState } from "react"

function Profile () {

    const [formValues, setFormValues] = useState({
        name: '',
        last_name:'',
        photo: '',
        email: '',
    })

    function handleInputChange (event: React.ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target
        setFormValues({...formValues, [name]: value})
    }

    return(
        <form className = "h-96 w-96 flex flex-col items-center justify-center gap-8 rounded bg-violet-100">
            
            <input className="h-8 w-80 border-2 border-sky-700 rounded" type="text" name="name" placeholder="Insert name" value ={formValues.name} onChange={handleInputChange}/>
            <input className="h-8 w-80 border-2 border-sky-700 rounded" type="text" name="last_name" placeholder="Insert last name" value ={formValues.last_name} onChange={handleInputChange}/>
            <input className="h-8 w-80 border-2 border-sky-700 rounded" type="text" name="photo" placeholder="Insert photo" value ={formValues.photo} onChange={handleInputChange}/>
            <input className="h-8 w-80 border-2 border-sky-700 rounded" type="email" name="email" placeholder="Insert email" value ={formValues.email} onChange={handleInputChange}/>
            
            <button className="h-8 w-48 border-2 border-sky-700 rounded bg-violet-300">Guardar</button>

            {/* <pre style={{fontSize: '2rem'}}>
                {JSON.stringify(formValues, null, 3)}
            </pre> */}

        </form>
            
    
    )
}


export default Profile