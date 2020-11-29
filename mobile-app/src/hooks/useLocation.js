import '../_mockLocation'
import React, { useEffect, useState, useContext } from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Map from '../components/Map'
import { requestPermissionsAsync, watchHeadingAsync, Accuracy, watchPositionAsync } from 'expo-location'


export default (shouldTrack,cb) => {
    const [err, setErr ] = useState(null)

    
    useEffect(() => {

        let subscriber;
        const startWatching = async () => {
            try {
                const { granted } = await requestPermissionsAsync();
                if (granted) {
                    subscriber = await watchPositionAsync({
                        accuracy: Accuracy.BestForNavigation,
                        timeInterval: 1000,
                        distanceInterval: 10
                    },  
                    cb
                    )
                } else {
                throw new Error('Location permission not granted');
                }
            } catch (e) {
                setErr(e);
            }
        };
        if (shouldTrack) {startWatching()}
        if (!shouldTrack) {
            if (subscriber) {subscriber.remove()}
            subscriber = null
        }

        return () => {
            if (subscriber) {subscriber.remove()}
        }

    }, [shouldTrack, cb])

    return [err]

}