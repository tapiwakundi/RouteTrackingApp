import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import {getDate} from '../utils/getDate'
import {Context as AuthContext} from '../context/authContext'
import { ActivityIndicator } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import AppUserName from '../components/texts/AppUserName'
import Date from '../components/Date'
import AppHeadline from '../components/texts/AppHeadline'
import StatsCard from '../components/cards/StatsCard'
import colors from '../config/colors'
import DashboardComponents from './ScreenComponents/DashboardComponents'

export default DashboardScreen = () => {

    const {setUser, state: {user}} = useContext(AuthContext)


    useEffect(() => {
        setUser()
    }, [])

    if (!user) {
        return <ActivityIndicator />
    } else {
        return (
            <ScrollView contentContainerStyle={styles.container}>

              <DashboardComponents name={user.firstName} />
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        paddingTop: "12%"
    }
})

DashboardScreen.navigationOptions = {
    tabBarIcon: <FontAwesome name='home' size={25} />
}

