// import { useRef, useState } from "react"
// import {useForm} from "react_hook-form"



// type FormValues = {
//     email: string,
//     password: string
// }

function LogIn() {

    // const {register, handleSubmit, formState} = useForm<FormValues>();

    // const {errors, isValid} = formState;

    // const [formValues, setFormValues] = useState({
    //     email: '',
    //     password: ''
    // });

    // function onSubmit (data: FormValues){
    //     console.log(data)
    // }
    // const inputRef = useRef<HTMLInputElement>(null);

    // function handleSubmit (event: React.FormEvent<HTMLFormElement>){
    //     event.preventDefault()
    //     console.log(formValues);

    //     setFormValues({})
    // }

    // function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {

    //     const { name, value } = event.target;
    //     setFormValues({ ...formValues, [name]: value })
    // }

    // return (
        // <form onSubmit = {handleSubmit (onSubmit)} className="h-96 w-96 flex flex-col items-center justify-center gap-8 rounded bg-sky-100">
        //     <label htmlFor='email'>Email</label>
        //     <div className="relative">
        //         <input className=" h-8 w-80 border-2 border-cyan-700 rounded" type="email" name="email" placeholder="Insert email" value={formValues.email} onChange={handleInputChange}
        //         {...register('email', { 
        //             required: 'Email obligatorio',
        //             pattern: { value: "/^[a-zA-Z0-9_/-.]@{3,10}", message: 'Email incorrecto'}}
        //         )}   />
        //         <span className="absolute top-full left-0 text-red-400">Wrong email</span>
        //     </div>
        //     <div className="relative">
        //         <input className="h-8 w-80 border-2 border-cyan-700 rounded" name="password" placeholder="Insert password" value={formValues.password} onChange={handleInputChange}
        //             {...register('password', { 
        //                 required: 'Contraseña obligatorio',
        //                 minLength: { value: 3, message: 'Minimo 3 caracteres'},
        //                 maxLength: {value: 16, message: 'Máximo 16 caracteres'}
        //             })}   />
        //         <span className="absolute top-full left-0 text-red-400">Wrong password</span>
        //     </div>


        //     <button className="disabled:cursor h-8 w-48 border-2 border-sky-600 rounded bg-sky-200">Enviar</button>

        //     {/* <pre style={{fontSize: '2rem'}}>
        //         {JSON.stringify(formValues, null, 3)}
        //     </pre> */}

        // </form>
    // )
}

export default LogIn