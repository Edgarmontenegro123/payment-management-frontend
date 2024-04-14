import React, {useState} from 'react'
import {registerUser, UserData} from '../../services/api.ts'

const Register: React.FC = () => {
    // Estados para los datos del usuario y manejo de errores
    const [userData, setUserData] = useState<UserData>({
        username: '',
        email: '',
        password: '',
        confirm_password:'',
        bank_account_number: ''
    })
    const [error, setError] = useState<string>('')

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(userData.password !== userData.confirm_password) {
            setError('Las contraseñas no coinciden')
            return
        }
        try {
            await registerUser(userData)
            setUserData({
                username: '',
                email: '',
                password: '',
                confirm_password: '',
                bank_account_number: ''
            })
            setError('')
        } catch (error) {
            setError((error instanceof Error) ? error.message : 'Error al registrar un usuario')
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value
        }))
    }

    return (
        <div className='max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md'>
            <h2 className='text-2xl font-bold mb-4'>Registrar usuario</h2>
            {error && <p className='text-red-500'>{error}</p> }
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label htmlFor='username' className='block text-gray-700'>Usuario:</label>
                    <input type='username'
                           id='username'
                           name = 'username'
                           value = {userData.username}
                           onChange={handleChange}
                           className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                           required/>
                </div>
                <div className='mb-4'>
                    <label htmlFor='email' className='block text-gray-700'>Email:</label>
                    <input type='email'
                           id='email'
                           name = 'email'
                           value = {userData.email}
                           onChange={handleChange}
                           className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                           required/>
                </div>
                <div className='mb-4'>
                    <label htmlFor='password' className='block text-gray-700'>Contraseña:</label>
                    <input type='password'
                           id='password'
                           name='password'
                           value = {userData.password}
                           onChange={handleChange}
                           className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                           required/>
                </div>
                <div>
                    <label htmlFor='confirm_password' className='block text-gray-700'>Repite la contraseña:</label>
                    <input type='password'
                           id='confirm_password'
                           name='confirm_password'
                           value = {userData.confirm_password}
                           onChange={handleChange}
                           className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                           required/>
                </div>
                <div className='mb-4'>
                    <label htmlFor='bank_account_number' className='block text-gray-700'>Número de cuenta:</label>
                    <input type='bank_account_number'
                           id='bank_account_number'
                           name='bank_account_number'
                           value = {userData.bank_account_number}
                           onChange={handleChange}
                           className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                           required/>
                </div>
                <button type='submit'
                        className='w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50'>Registrar usuario</button>
            </form>
        </div>
    )
}

export default Register