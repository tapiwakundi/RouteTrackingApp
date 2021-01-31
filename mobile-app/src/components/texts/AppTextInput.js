import React from 'react';
import { View, TextInput, StyleSheet, } from 'react-native';


import colors from '../../config/colors';

export default function AppTextInput({ otherStyles = null, ...otherProps }) {
    return (
        <View style={[styles.container, otherStyles]}>
            <TextInput style={styles.textInput} {...otherProps} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomColor: colors.lightgray,
        borderBottomWidth: 2,
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 5,
        paddingTop: 12,
        paddingBottom: 3,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    textInput: {
        color: colors.gray,
        height: 25,
        width: '100%',
        fontSize: 15,
    }
})