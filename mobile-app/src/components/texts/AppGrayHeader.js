import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import colors from '../../config/colors'

export default function AppGrayHeader({ children, otherStyles = null }) {
    return (
        <Text style={[styles.text, otherStyles]} > {children}</Text >
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 28,
        color: colors.gray
    }
})
