import { AsyncStorage } from 'react-native'
import axios from 'axios'
import { useContext } from 'react'

const instance = axios.create({
    baseURL: 'https://b98e6835d4d1.ngrok.io'
})

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token')
        if (token) {config.headers.Authorization = `Bearer ${token}`}
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default instance