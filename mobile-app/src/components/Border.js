import React from 'react';
import { View } from 'react-native';
import { Text, StyleSheet, Platform } from 'react-native';
import colors from '../config/colors'

export default function Border() {
    return (
        <View style={styles.border}/>
    )
}

const styles = StyleSheet.create({
    border: {
      borderBottomColor: colors.gray,
      borderBottomWidth: 1,
      marginVertical: 5
    }
})
