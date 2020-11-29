import React, { useContext, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { Context as LocationContext } from '../context/locationContext'

const TrackForm = () => {
    const { 
        state: {name, recording, locations}, 
        changeName, 
        startRecording, 
        stopRecording 
    } = useContext(LocationContext)

    return (
        <View style={styles.container}>
            <TextInput placeholder='Enter route name' style={styles.input} onChangeText={changeName} value={name}/>
            {recording
            ? <Button title='Stop recording' onPress={stopRecording } color='red' />
            : <Button title='Record' onPress={ startRecording } color='red' />
            }
            {
                !recording && locations.length 
                ? <Button title='Save recording' /> 
                : null
            }
        </View>
    )
}

export default TrackForm

const styles = StyleSheet.create({
    input: {
        height: 50,
        padding: 5,
        borderBottomColor: '#dedede',
        borderBottomWidth: 2,
        width: 250
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    }
})
