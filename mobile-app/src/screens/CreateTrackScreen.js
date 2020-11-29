// import '../_mockLocation' -- import this to fake some data
import React, { useContext, useCallback } from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import Map from '../components/Map'
import useLocation from '../hooks/useLocation'
import { FontAwesome } from '@expo/vector-icons'

import { Context as LocationContext } from '../context/locationContext'
import TrackForm from '../components/TrackForm'

const CreateTrackScreen = ({isFocused}) => {
    const { state: { recording }, addLocation } = useContext(LocationContext)

    const callback = useCallback((location) => {
        addLocation(location, recording)
    }, [recording])

    
    const [err] = useLocation(isFocused || recording, callback )
    
    return (
        <SafeAreaView forceInset={{top: 'always'}} >
            <Text>CREATE TRACK</Text>
            <Map />
            { err ? <Text>PLease enable location services</Text>: null }
            <TrackForm />
        </SafeAreaView>
    )
}

CreateTrackScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name='plus' size={25} />
}

export default withNavigationFocus(CreateTrackScreen)
