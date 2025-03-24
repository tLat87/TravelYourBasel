import {Image, Share, Text, TouchableOpacity, View} from 'react-native';
import SmallArrowSvg from '../assets/svg/SmallArrowSvg';
import EmptyMarkScvg from '../assets/svg/EmptyMarkScvg';
import MapPointSvg from '../assets/svg/MapPointSvg';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addPlace, removePlace, selectSavedPlaces } from '../redux/slices/savedPlacesSlice';
import FullMarkSvg from '../assets/svg/FullMarkSvg';

const AboutHistoricalPlacesScreen = ({ route }) => {
    const navigation = useNavigation();
    const { item } = route.params;

    const dispatch = useDispatch();
    const savedPlaces = useSelector(selectSavedPlaces);
    console.log(savedPlaces);
    // Проверка — сохранено ли место
    const isSaved = savedPlaces.some(place => place.id === item.id);

    const handleToggleSave = () => {
        if (isSaved) {
            dispatch(removePlace(item.id));
        } else {
            dispatch(addPlace(item));
        }
    };

    const handleShare = async () => {
        try {
            await Share.share({
                message: `Check out this place: ${item.title}\n\nCoordinates: ${item.cord}\n\nDescription: ${item.description}`,
            });
        } catch (error) {
            console.log('Error sharing:', error);
        }
    };


    return (
        <View style={{ backgroundColor: '#360013', flex: 1, paddingTop: 10, paddingHorizontal: 16 }}>
            <View style={{
                width: '100%',
                padding: 20,
                marginBottom: 8,
                backgroundColor: '#470119',
                borderColor: '#B80041',
                borderWidth: 2,
                borderRadius: 16,
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Image
                    source={item.image}
                    style={{ width: '100%', height: 226, borderRadius: 16 }}
                    resizeMode={'cover'}
                />

                <Text style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 20,
                    marginBottom: 20,
                    marginTop: 15,
                    alignSelf: 'flex-start',
                }}>
                    {item.title}
                </Text>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 20,
                    alignSelf: 'flex-start',
                }}>
                    <MapPointSvg />
                    <Text style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 16,
                        marginTop: 4,
                        alignSelf: 'flex-start',
                    }}>
                        Coordinates: {item.cord}
                    </Text>
                </View>

                <Text style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginBottom: 20,
                    marginTop: 15,
                    alignSelf: 'flex-start',
                }}>
                    Description: {item.description}
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
                        onPress={handleShare} style={{
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
                        onPress={handleToggleSave}
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
                        {isSaved ? <FullMarkSvg /> : <EmptyMarkScvg />}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default AboutHistoricalPlacesScreen;
