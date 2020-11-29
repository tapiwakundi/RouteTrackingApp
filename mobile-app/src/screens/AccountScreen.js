import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppBtn from '../components/AppButton'
import { Context as AuthContext } from '../context/authContext'
import { FontAwesome } from '@expo/vector-icons'

const AccountScreen = () => {
    const { signout } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <Text>ACCOUNT</Text>
            <AppBtn title='Signout' onPress={signout}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
})

AccountScreen.navigationOptions = {
    tabBarIcon: <FontAwesome name='gear' size={25} />
}

export default AccountScreen
