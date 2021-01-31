import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import colors from '../config/colors';
import {getDate} from '../utils/getDate'

export default function Date() {
    return (
        <Text style={styles.text} > {getDate()}</Text >
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 22,
        color: colors.gray,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    }
})
