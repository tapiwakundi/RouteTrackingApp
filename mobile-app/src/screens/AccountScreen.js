import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppBtn from '../components/AppButton'
import { Context as AuthContext } from '../context/authContext'

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

export default AccountScreen
