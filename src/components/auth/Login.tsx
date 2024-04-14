import React from 'react'
import {Link} from 'react-router-dom'

const Login: React.FC = () => {
    return (
        <div className='max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md'>
            <h2 className='text-2xl font-bold mb-4'>Iniciar sesión</h2>
            <form>
                <div className='mb-4'>
                    <label htmlFor='email' className='block text-gray-700'>Email:</label>
                    <input type='email' id='email' name = 'email' className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' required/>
                </div>
                <div className='mb-4'>
                    <label htmlFor='password' className='block text-gray-700'>Contraseña:</label>
                    <input type='password' id='password' name='password' className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' required/>
                </div>
                <button type='submit' className='w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50'>Iniciar sesión</button>
            </form>
            <p className='mt-4 text-gray-700'>¿No tienes una cuenta? <Link to='/registro'>Regístrate aquí</Link></p>
        </div>
    )
}

export default Login