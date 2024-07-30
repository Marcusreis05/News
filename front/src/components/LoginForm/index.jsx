'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from "react";
import './style.css'

const LoginForm = () => {
    const router = useRouter()
    const [formulario, setFormulario] = useState({
        email: '',
        senha: ''
    })


    const aoSubmeter = async (e) => {
        e.preventDefault()
        try {
            const result = await axios.post('http://localhost:8080/login', formulario)
            alert(result.data.message)
            router.push('/admin/noticia/criar')

        } catch (error) {
            alert(error.response.data.message)

        }
    }

    const aoAlterarValores = (e) => {
        const {name , value} = e.target
        setFormulario({
            ...formulario,
            [name]: value
        })
    }
  return (
    <form onSubmit={aoSubmeter} className='formLogin'>
        <div className='boxForm'>
            <h1>Login</h1>
            <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" name='email' onChange={aoAlterarValores} />
            </div>
            <div>
                    <label htmlFor="Senha">Senha</label>
                    <input type="password" name='senha' onChange={aoAlterarValores} />
            </div>
            <button type="submit">Enviar</button>
        </div>
    </form>
  )
}

export default LoginForm
