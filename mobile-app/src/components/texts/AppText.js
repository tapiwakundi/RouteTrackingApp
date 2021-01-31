import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
export default function AppText({ children, otherStyles = null }) {
    return (
        <Text style={[styles.text, otherStyles]} > {children}</Text >
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    }
})
