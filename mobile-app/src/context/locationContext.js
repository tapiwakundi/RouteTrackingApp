import createDataContext from '../context/createDataContext'

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CURRENT_LOCATION':
            return {...state, currentLocation: action.payload}
            break;
    
        default:
            break;
    }
}

const startRecording = dispatch => () => {}

const stopRecording = dispatch => () => {}

const addLocation = dispatch => (location) => {
    dispatch({type: 'ADD_CURRENT_LOCATION', payload: location})
}



export const { Provider, Context } = createDataContext(
    locationReducer,
    {startRecording,
    startRecording,
    addLocation
    },
    {locations: [], recording: false, currentLocation: null} 
)