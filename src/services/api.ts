import axios, {AxiosError, AxiosResponse} from 'axios'

const API_URL = 'http://localhost:3000'

const api = axios.create({
    baseURL: API_URL,
    timeout: 10000
})

export interface UserData {
    username: string;
    email: string;
    password: string;
    confirm_password: string;
    bank_account_number: string;
    is_active?: boolean; // El backend podría definir este campo opcional
}

// Define una interfaz para la estructura de los datos de la respuesta esperada
interface ErrorResponse {
    message: string;
}

export const registerUser = async (userData: UserData): Promise<UserData> => {
    try {
        const response: AxiosResponse<UserData> = await api.post('/users', userData)
        return response.data
    } catch (error) {
        if(axios.isAxiosError(error)) {
            const axiosError = error as AxiosError<ErrorResponse>
            if(axiosError.response?.data?.message) {
                throw new Error(axiosError.response.data.message)
            }
        }
        throw new Error('Error al registrar el usuario')
    }
}

export default api