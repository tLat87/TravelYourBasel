import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity, Share} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addPlace, removePlace, selectSavedPlaces} from '../redux/slices/savedPlacesSlice';
import { useNavigation } from '@react-navigation/native';
import FullMarkSvg from '../assets/svg/FullMarkSvg';
import EmptyMarkScvg from '../assets/svg/EmptyMarkScvg';

const SavedPlacesScreen = () => {
    const savedPlaces = useSelector(selectSavedPlaces);
    const navigation = useNavigation();

    const handleShare = async (item) => {
        try {
            await Share.share({
                message: `Check out this place: ${item.title}\n\nCoordinates: ${item.cord}\n\nDescription: ${item.description}`,
            });
        } catch (error) {
            console.log('Error sharing:', error);
        }
    };

    const dispatch = useDispatch();


    const handleToggleSave = (item) => {
        const isSaved = savedPlaces.some(place => place.id === item.id);
        if (isSaved) {
            dispatch(removePlace(item.id));
        } else {
            dispatch(addPlace(item));
        }
    };

    const renderPlace = ({ item }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate('AboutHistoricalPlaces', { item })}
            style={{
                padding: 20,
                marginBottom: 8,
                backgroundColor: '#470119',
                borderColor: '#B80041',
                borderWidth: 2,
                borderRadius: 16,
            }}
        >
            <Image
                source={item.image}
                style={{ width: '100%', height: 126, borderRadius: 16 }}
                resizeMode="cover"
            />
            <Text
                style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 20,
                    marginTop: 20,
                    marginBottom:15
                }}
            >
                {item.title}
            </Text>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
            }}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Map', { coords: item.cord }) }}
                    style={{
                        backgroundColor: '#360013',
                        padding: 15,
                        paddingHorizontal: 24,
                        borderColor: '#B80041',
                        borderWidth: 2,
                        borderRadius: 16,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                        Map
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=>{handleShare(item)}} style={{
                    backgroundColor: '#360013',
                    padding: 15,
                    paddingHorizontal: 24,
                    borderColor: '#B80041',
                    borderWidth: 2,
                    borderRadius: 16,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                        Share
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=>{handleToggleSave(item)}}
                    style={{
                        backgroundColor: '#360013',
                        padding: 8,
                        paddingHorizontal: 24,
                        borderColor: '#B80041',
                        borderWidth: 2,
                        borderRadius: 16,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                    {savedPlaces.some(place => place.id === item.id) ? <FullMarkSvg /> : <EmptyMarkScvg />}
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1, backgroundColor: '#360013', padding: 16, paddingTop: 10 }}>
            {savedPlaces.length === 0 ? (
                <>
                    <Text style={{ color: 'gray', fontSize: 18, textAlign: 'center', marginTop: 50 }}>
                        You don't have any favorite places
                    </Text>
                    <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center', marginTop: 10 }}>
                        Browse through the place categories and find what you want to visit.
                    </Text>
                </>
            ) : (
                <FlatList
                    data={savedPlaces}
                    renderItem={renderPlace}
                    keyExtractor={(item, index) => item.name + index}
                />
            )}
        </View>
    );
};

export default SavedPlacesScreen;
