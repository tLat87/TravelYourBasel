import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Cube = ({ delay, color }) => {
    const scaleAnim = useRef(new Animated.Value(0.2)).current;

    useEffect(() => {
        Animated.sequence([
            Animated.delay(delay),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 1500,
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
                toValue: 0.2,
                duration: 1500,
                useNativeDriver: true,
            })
        ]).start();
    }, [scaleAnim]);

    return (
        <Animated.View style={[styles.cube, { backgroundColor: color, transform: [{ scale: scaleAnim }] }]} />
    );
};

const Loader = () => {
    const navigation = useNavigation();
    const colors = ['#fe1e52', '#fe4252', '#fe6553', '#fe8953', '#feac54', '#fed054'];

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Welcome');
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            {colors.map((color, index) => (
                <Cube key={index} color={color} delay={index * 500} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#360013',
    },
    cube: {
        width: 50,
        height: 50,
        marginVertical: 5,
    },
});

export default Loader;
