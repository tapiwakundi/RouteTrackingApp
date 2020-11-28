import React, { useState, useContext } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Spacer from '../components/spacer'
import AppBtn from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import { Context as authContext } from '../context/authContext'
import AppLink from '../components/AppLink'
import { NavigationEvents } from 'react-navigation'

const SigninScreen = ({ navigation }) => {
    const { state, signin, clearErrorMessage } = useContext(authContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return (
        <View style={styles.container}>
            <NavigationEvents onWillBlur={clearErrorMessage} />


            <Spacer>
                <Text>SIGNUP</Text>
            </Spacer>
            <Spacer>
                <AppTextInput
                    placeholder='Email'
                    style={styles.input}
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(e) => setEmail(e)}
                    value={email} />

                <AppTextInput
                    placeholder='Password'
                    onChangeText={(e) => setPassword(e)}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={password} />

                {
                    state.errorMessage ? <Text style={styles.error}>{state.errorMessage}</Text> : null
                }
                <AppBtn title='Sign in' onPress={() => signin({ email, password })} />
                <View style={styles.noAccount}>
                    <Text>Already have an account?</Text>
                    <AppLink text='Signup here' onPress={() => navigation.navigate('Signup')} />
                </View>
            </Spacer>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    input: {
        width: 325
    },
    error: {
        color: 'red'
    },
    noAccount: {
        flexDirection: 'row'
    }
})

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
}

export default SigninScreen


