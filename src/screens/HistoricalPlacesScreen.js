import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import SmallArrowSvg from '../assets/svg/SmallArrowSvg';
import EmptyMarkScvg from '../assets/svg/EmptyMarkScvg';


const HistoricalPlacesScreen = ({navigation, route}) => {
    const {cities} = route.params;
    return (
        <ScrollView style={{backgroundColor: '#360013', flex: 1, paddingTop: 10, paddingHorizontal: 16}}>
            {cities.map((item, index) => (
                <View key={index} style={{width:'100%', padding: 20, marginBottom: 8, backgroundColor: '#470119', borderColor: '#B80041', borderWidth: 2, borderRadius: 16, flexDirection: 'column', alignItems: 'center'}}>
                    <Image source={item.image} style={{width:'100%', height: 126, borderRadius: 16}} resizeMode='cover' />

                    <Text style={{color:'white', fontWeight: 'bold', fontSize: 20, marginBottom: 20, marginTop: 15, alignSelf: 'flex-start'}}>
                        {item.title}
                    </Text>

                    <Text style={{color:'white', fontSize: 14, marginBottom: 20, alignSelf: 'flex-start'}}>
                        {item.description}
                    </Text>

                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width:'100%'}}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('AboutHistoricalPlaces', {item})}} style={{backgroundColor: '#360013', padding: 15, paddingHorizontal: 24, borderColor: '#B80041',width: '100%', justifyContent: 'center', borderWidth: 2, borderRadius: 16, flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{color:'white', fontWeight: 'bold', fontSize: 16}}>
                                Open
                            </Text>
                        </TouchableOpacity>

                        {/*<View style={{backgroundColor: '#360013', padding: 15, paddingHorizontal: 24, borderColor: '#B80041', borderWidth: 2, borderRadius: 16, flexDirection: 'row', alignItems: 'center'}}>*/}
                        {/*    <Text style={{color:'white', fontWeight: 'bold', fontSize: 16}}>*/}
                        {/*        Share*/}
                        {/*    </Text>*/}
                        {/*</View>*/}

                        {/*<View style={{backgroundColor: '#360013', padding: 8, paddingHorizontal: 24, borderColor: '#B80041', borderWidth: 2, borderRadius: 16, flexDirection: 'row', alignItems: 'center'}}>*/}
                        {/*    <EmptyMarkScvg/>*/}
                        {/*</View>*/}
                    </View>
                </View>
            ))}
            <View style={{marginBottom: 50}}/>
        </ScrollView>

    )
}

export default HistoricalPlacesScreen;
