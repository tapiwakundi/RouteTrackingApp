import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const TrackListScreen = ({ navigation }) => {
    return (
        <>
            <Text>TRACKLIST</Text>
            <Button title='go to track list' onPress={() => navigation.navigate('TrackDetails')}/>
        </>
    )
}

export default TrackListScreen

const styles = StyleSheet.create({})
