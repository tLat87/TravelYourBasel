// src/screens/MapScreen.js
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const parseCoords = (coordStr) => {
    const [latRaw, lngRaw] = coordStr.split(',');

    const parsePart = (part) => {
        const value = parseFloat(part);
        const direction = part.includes('S') || part.includes('W') ? -1 : 1;
        return value * direction;
    };

    const latitude = parsePart(latRaw);
    const longitude = parsePart(lngRaw);

    return { latitude, longitude };
};

const MapScreen = ({ route }) => {
    const { coords } = route.params;
    const { latitude, longitude } = parseCoords(coords);

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={MapView.PROVIDER_GOOGLE}
                region={{
                    latitude,
                    longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}>
                <Marker
                    coordinate={{ latitude, longitude }}
                    title="Historical Place"
                    description={`Lat: ${latitude}, Lon: ${longitude}`}
                />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
});

export default MapScreen;
