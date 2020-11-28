import React, { useState, useContext } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Spacer from '../components/spacer'
import AppBtn from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import { Context as authContext } from '../context/authContext'
import AppLink from '../components/AppLink'
import { NavigationEvents } from 'react-navigation'


const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(authContext)


    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
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
                    placeholder='First name'
                    style={styles.input}
                    onChangeText={(e) => setFirstName(e)}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={firstName}
                />
                <AppTextInput
                    placeholder='Last name'
                    onChangeText={(e) => setLastName(e)}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={lastName} />

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
                <AppBtn title='Submit' onPress={() => signup({ firstName, lastName, email, password })} />
                <View style={styles.noAccount}>
                    <Text>Dont have an account?</Text>
                    <AppLink text='Signin here' onPress={() => navigation.navigate('Signin')} />
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

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
}

export default SignupScreen


