import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
export default function AppHeadline({ children, otherStyles = null }) {
    return (
        <Text style={[styles.text, otherStyles]} > {children}</Text >
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: "600",
        marginTop: 20,
        marginBottom: 10
    }
})
