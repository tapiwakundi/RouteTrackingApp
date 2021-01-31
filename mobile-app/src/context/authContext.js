import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import { AsyncStorage } from 'react-native'
import { navigate } from '../navigationRef'
import {
    ADD_ERROR,
    SIGNIN,
    SIGNOUT,
    CLEAR_ERROR_MESSAGE,
    SET_USER
} from './types/authTypes'


const authreducer = (state, action) => {
    switch(action.type){
        case ADD_ERROR:
            return {...state, errorMessage: action.payload}
        case SIGNIN:
            return {errorMessage: '', token: action.payload}
        case SIGNOUT:
            return {...state, token: action.payload}
        case CLEAR_ERROR_MESSAGE:
            return {...state, errorMessage: action.payload}
        case SET_USER:
            return {...state, user: action.payload}
        default:
            return state
    }
}

const tryLocalSignin  = dispatch => async () => {
    const token = await AsyncStorage.getItem('token')
    if (!token) {navigate('Signin')}
    dispatch({type: SIGNIN, payload: token })
    navigate('TrackList')
   
}

const clearErrorMessage = dispatch => () => {
    dispatch({type: CLEAR_ERROR_MESSAGE, payload: ''})
}

const signup = dispatch => async ({firstName, lastName, email, password}) => {
    try {
    const res = await trackerApi.post('/signup', {firstName, lastName, email, password})
    await AsyncStorage.setItem('token', res.data.token)
    dispatch({type: SIGNIN, payload: res.data.token})

    navigate('TrackList')
    } catch (error) {
        dispatch({type: ADD_ERROR, payload: 'Oops Something went wrong'})
    }
}


const signin = dispatch => async ({email, password}) => {
    try {
        const res = await trackerApi.post('/signin', {email, password})
        await AsyncStorage.setItem('token', res.data.token)
        dispatch({type: SIGNIN, payload: res.data.token})
        navigate('TrackList')
    } catch (error) {
        dispatch({
            type: ADD_ERROR, payload: 'Wrong credintials'
        })
    }
    
}

const signout = dispatch => async () => {
    try {
        await AsyncStorage.removeItem('token')
        dispatch({type: SIGNOUT, payload: null})
        navigate('Signin')
    } catch (error) {
        console.log(error);
    }
}

const setUser = dispatch => async () => {
    try {
        const res = await trackerApi.get('/get-users')
        dispatch({type: SET_USER, payload: res.data})
    } catch (error) {
        console.log(error);
    }
}

export const { Provider, Context } = createDataContext(
    authreducer,
    {signup,
    signin,
    signout,
    setUser,
    clearErrorMessage,
    tryLocalSignin},
    {token: null, errorMessage: '', user: {}} 
)