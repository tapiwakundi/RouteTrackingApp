import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Context as TrackContext } from '../../context/trackContext'
import MapView, { Polyline } from 'react-native-maps'
import AppUserName from '../../components/texts/AppUserName'

export default RunCard = ({ _id }) => {
    const { state } = useContext(TrackContext)
    const track = state.find(t => t._id === _id)
    const initialCoords = track.locations[0].coords


    return (
        <View>
            <Text>{track.name}</Text>
            <MapView
                initialRegion={{
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...initialCoords
                }}
                style={styles.map}
            >
                <Polyline coordinates={track.locations.map(loc => loc.coords)} />
            </MapView>
            <View style={styles.statswrapper} >
                <View>
                    <Text>Distance</Text>
                    <Text>2km</Text>
                </View>
<View>
<Text>Time</Text>
                <Text>6 min, 3 sec</Text>
</View>
              

            </View>
        </View>
    )
}




const styles = StyleSheet.create({
    map: {
        height: 300,
    },
    statswrapper: {
        flexDirection: 'row'
    }
})