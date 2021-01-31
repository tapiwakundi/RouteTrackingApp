import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

export default function AppUserName({ children, otherStyles = null }) {
    return (
        <Text style={[styles.text, otherStyles]} > {children}</Text >
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 46,
        fontWeight: '700',
        textTransform: "capitalize"
    }
})
