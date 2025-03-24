import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const imageSize = width * 0.9;

const slides = [
    {
        image: require('../assets/img/image3.png'),
        title: 'Welcome to Travel Your Basel!',
        description: 'Explore one of the most interesting cities in Switzerland. Basel is a city that combines modern culture and a rich historical heritage.',
    },
    {
        image: require('../assets/img/image.png'),
        title: 'Choose by categories',
        description: 'Every place in Basel has its own category. \n' +
            'Choose interesting locations: museums, parks, restaurants, galleries and much more. \n' +
            'Find the best places that suit you!',
    },
    {
        image: require('../assets/img/imagefqwf2.png'),
        title: 'Learn more about each location',
        description: 'Each location has detailed information. \n' +
            'You will also find directions to get to that place.',
    },
    {
        image: require('../assets/img/imagefqwfqwf.png'),
        title: 'Start your journey through Basel!',
        description: 'Now you have everything you need to start your adventure! Choose a location on the map and head out to new discoveries!',
    },
];

const WelcomeScreen = ({ navigation }) => {
    const [step, setStep] = useState(0);

    const handleNext = () => {
        if (step < slides.length - 1) {
            setStep(step + 1);
        } else {
            navigation.navigate('MainTab');
        }
    };

    return (
        <View style={styles.container}>
            <Image
                source={slides[step].image}
                style={[styles.image, { width: imageSize, height: imageSize, borderRadius: 24 }]}
                resizeMode='cover'
            />

            <View style={styles.indicatorRow}>
                {slides.map((_, index) => (
                    <View
                        key={index}
                        style={index === step ? styles.indicatorActive : styles.indicatorInactive}
                    />
                ))}
            </View>

            <View>
                <Text style={styles.title}>{slides[step].title}</Text>
                <Text style={styles.description}>{slides[step].description}</Text>
            </View>

            <TouchableOpacity onPress={handleNext} style={styles.button}>
                <Text style={styles.buttonText}>
                    {step < slides.length - 1 ? 'Next' : 'Start the journey'}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#360013',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 40,
    },
    image: {},
    indicatorRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    indicatorActive: {
        width: 60,
        height: 18,
        backgroundColor: '#B80041',
        borderRadius: 5,
    },
    indicatorInactive: {
        width: 60,
        height: 18,
        backgroundColor: '#80334a',
        borderRadius: 5,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 16,
        paddingHorizontal: 20,
    },
    description: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 6,
    },
    buttonText: {
        fontSize: 20,
        color: '#000',
    },
});

export default WelcomeScreen;
