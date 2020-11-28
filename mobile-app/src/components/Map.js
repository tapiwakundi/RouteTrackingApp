import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Polyline } from 'react-native-maps'

const Map = () => {
    return (
        <MapView 
        style={styles.map}
        initialRegion={{
            latitude:51.05111387954019, 
            longitude: -114.20627195937954,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }}
        >
            <Polyline />
        </MapView>
    )
}



const styles = StyleSheet.create({
    map: {
        height: 300
    }
})
export default Map