import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, Button, FlatList, Image } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { ListItem } from 'react-native-elements'
import { Context as TrackContext } from '../context/trackContext'
import {Context as AuthContext} from '../context/authContext'
import { FontAwesome } from '@expo/vector-icons'
import RunCard from './ScreenComponents/RunCard'
import AppUserName from '../components/texts/AppUserName'
import {Dimensions} from 'react-native'

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height


const TrackListScreen = ({ navigation }) => {

    const { state, fetchTracks } = useContext(TrackContext)
    const { setUser } = useContext(AuthContext)

    useEffect(()=> {
        setUser()
    }, [])


    return (
        <View>

            <NavigationEvents onWillFocus={fetchTracks} />
            <Image source={require('../../assets/images/tracks-header@2x.png')} style={styles.image} />
            <AppUserName>Previous Runs</AppUserName>
            <FlatList 
            data={state}
            keyExtractor={item => item._id}
            renderItem={({ item })=> {
                return <RunCard _id={item._id}/>
            }}
            />
        </View>
    )
}

TrackListScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

export default TrackListScreen

const styles = StyleSheet.create({
    li: {
        marginVertical: 5
    },
    image: {
        width: width,
        height: height * 0.2,
        resizeMode: 'contain'
    }
})
