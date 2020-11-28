import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Map from '../components/Map'

const CreateTrackScreen = () => {
    return (
        <SafeAreaView forceInset={{top: 'always'}} >
            <Text>CREATE TRACK</Text>
            <Map />
        </SafeAreaView>
    )
}

export default CreateTrackScreen
