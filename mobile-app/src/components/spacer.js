import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const spacer = ({children}) => {
    return (
        <View style={styles.spacer}>
            {children}
        </View>
    )
}

export default spacer

const styles = StyleSheet.create({
    spacer: {
        margin: 15
    }
})
