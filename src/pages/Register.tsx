import {  useState } from "react"
// import {useForm} from "react_hook-form"

function Register () {


    // const {register} =useForm({
    //     mode: onChange
    // })

    const [formValues, setFormValues] = useState({
        name: '',
        last_name:'',
        photo: '',
        email: '',
        password: '',
        password2: ''
    })

    function handleInputChange (event: React.ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target
        setFormValues({...formValues, [name]: value})
    }

    return(
        <form className = "w-2/3 p-8 flex flex-col items-center justify-center gap-8 rounded bg-sky-100">
            <div className="relative">
                <input className="peer invalid:bg-red-200 h-8 w-80 border-2 border-cyan-700 rounded "  type="text" name="name" placeholder="Insert name" value ={formValues.name} onChange={handleInputChange}
                pattern="[a-zA-Z]{3,10}"/>
                {/* Eso dice que acepta mayúsculas y minúsculas pero entre 3 y 10 carácteres */}
                <span className="hidden peer-invalid:block error absolute top-full left-0 text-red-400">Wrong name</span>

            </div>
            <div className="relative">
                <input className="peer invalid:bg-red-200 custom-input" type="text" name="last_name" placeholder="Insert last name" value ={formValues.last_name} onChange={handleInputChange} 
                pattern="[a-zA-Z]{3,10}"/>
                <span className="hidden peer-invalid:block absolute top-full left-0 text-red-400">Wrong last name</span>
            </div>
            <div className="relative">
                <input className="peer invalid:bg-red-200 h-8 w-80 border-2 border-cyan-700 rounded" type="text" name="photo" placeholder="Insert photo" value ={formValues.photo} onChange={handleInputChange}
                pattern="[a-zA-Z]{}"/>
                <span className="hidden peer-invalid:block absolute top-full left-0 text-red-400">The photo is necessary</span>
            </div>
            <div className="relative">
                <input className="peer invalid:bg-red-200 h-8 w-80 border-2 border-cyan-700 rounded" type="email" name="email" placeholder="Insert email" value ={formValues.email} onChange={handleInputChange}/>
                <span className="hidden peer-invalid:block absolute top-full left-0 text-red-400">Wrong email</span>
            </div>
            <div className="relative">
                <input className="peer invalid:bg-red-200 h-8 w-80 border-2 border-cyan-700 rounded" type="password" name="password" placeholder="Insert password" value ={formValues.password} onChange={handleInputChange}
                minLength={5}/>
                <span className="hidden peer-invalid:block absolute top-full left-0 text-red-400">Wrong password</span>
                
            </div>
            <div className="relative">
                <input className="peer invalid:bg-red-200 h-8 w-80 border-2 border-cyan-700 rounded" type="password" name="password2" placeholder="Repit password" value ={formValues.password2} onChange={handleInputChange}
                minLength={5} pattern="[a-zA-Z1-9]"/>
                <span className="hidden peer-invalid:block absolute top-full left-0 text-red-400">Wrong password</span>
            </div>
            
            <button className="h-8 w-48 border-2 border-sky-600 rounded bg-sky-200">Enviar</button>

            {/* <pre style={{fontSize: '1rem'}}>
                {JSON.stringify(formValues, null, 3)}
            </pre> */}

        </form>
            
    
    )
}

export default Register