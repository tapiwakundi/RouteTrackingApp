import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import { AsyncStorage } from 'react-native'
import { navigate } from '../navigationRef'

const trackReducer = (state, action) => {
    switch (action.type) {
        case 'GET_TRACKS':
            return action.payload
        default:
            return state
    }
}

const fetchTracks = dispatch => async () => {
    try {
        const res = await trackerApi.get('/tracks')
        dispatch({type: 'GET_TRACKS', payload: res.data})
    } catch (error) {
        console.log(error);
    }
}

const createTrack = dispatch => async (name, locations) => {
    try {
        await trackerApi.post('/tracks', {name, locations})
        navigate('TrackList')
    } catch (error) {
        console.log(error);
    }

    
     
}

export const { Provider, Context } = createDataContext(
    trackReducer, 
    { fetchTracks, createTrack },
    []
)