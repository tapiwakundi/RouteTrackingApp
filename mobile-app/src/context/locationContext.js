import createDataContext from '../context/createDataContext'

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CURRENT_LOCATION':
            return {...state, currentLocation: action.payload}
            break;
        case 'START_RECORDING':
            return {...state, recording: true}
        case 'STOP_RECORDING':
            return {...state, recording: false}    
        case 'ADD_LOCATION':
            return{...state, locations: [...state.locations, action.payload ]}   
        case 'CHANGE_NAME':
            return{...state, name: action.payload}     
        default:
            break;
    }
}

const changeName = dispatch => name => {
    dispatch({type: 'CHANGE_NAME', payload: name })
}

const startRecording = dispatch => () => {
    dispatch({type: 'START_RECORDING'})
}
   

const stopRecording = dispatch => () => {
    dispatch({type: 'STOP_RECORDING'})
}
  

const addLocation = dispatch => (location, recording) => {
    dispatch({type: 'ADD_CURRENT_LOCATION', payload: location})
    if (recording) {
        dispatch({type: 'ADD_LOCATION', payload: location})
    }
    console.log(location.length);
}



export const { Provider, Context } = createDataContext(
    locationReducer,
    {startRecording,
    stopRecording,
    addLocation,
    changeName
    },
    {locations: [], recording: false, currentLocation: null, name: ''} 
)