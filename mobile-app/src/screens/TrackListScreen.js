import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, Button, FlatList, TouchableOpacity } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { ListItem } from 'react-native-elements'
import { Context as TrackContext } from '../context/trackContext'
import { FontAwesome } from '@expo/vector-icons'


const TrackListScreen = ({ navigation }) => {

    const { state, fetchTracks } = useContext(TrackContext)


    return (
        <>
            <NavigationEvents onWillFocus={fetchTracks} />
            <FlatList 
            data={state}
            keyExtractor={item => item._id}
            renderItem={({ item })=> {
                return <TouchableOpacity style={styles.li} onPress={()=>navigation.navigate('TrackDetails', {_id: item._id})} >
                    <ListItem chevron title={item.name}/>
                </TouchableOpacity>
            }}
            />
        </>
    )
}


export default TrackListScreen

const styles = StyleSheet.create({
    li: {
        marginVertical: 5
    }
})
