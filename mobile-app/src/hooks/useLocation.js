import '../_mockLocation'
import React, { useEffect, useState, useContext } from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Map from '../components/Map'
import { requestPermissionsAsync, watchHeadingAsync, Accuracy, watchPositionAsync } from 'expo-location'


export default (shouldTrack,cb) => {
    const [err, setErr ] = useState(null)
    const [subscriber, setSubscriber] = useState(null)

    const startWatching = async () => {
        try {
            const { granted } = await requestPermissionsAsync();
            if (granted) {
                const subscriber = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                },  
                cb
                )
                setSubscriber(subscriber)
            } else {
            throw new Error('Location permission not granted');
            }
        } catch (e) {
            setErr(e);
        }
    };

    useEffect(() => {
        if (shouldTrack) {startWatching()}
        if (!shouldTrack) {
            subscriber.remove() 
            setSubscriber(null)
        }
    }, [shouldTrack])

    return [err]

}