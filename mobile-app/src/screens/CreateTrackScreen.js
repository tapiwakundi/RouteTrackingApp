import '../_mockLocation'
import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import Map from '../components/Map'
import useLocation from '../hooks/useLocation'

import { Context as LocationContext } from '../context/locationContext'


const CreateTrackScreen = ({isFocused}) => {
    const { currentLocation, addLocation } = useContext(LocationContext)

    const [err] = useLocation(isFocused, addLocation)
    
    return (
        <SafeAreaView forceInset={{top: 'always'}} >
            <Text>CREATE TRACK</Text>
            <Map />
            { err ? <Text>PLease enable location services</Text>: null }
        </SafeAreaView>
    )
}

export default withNavigationFocus(CreateTrackScreen)
