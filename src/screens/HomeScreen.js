import {Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import SmallArrowSvg from '../assets/svg/SmallArrowSvg';

const cities1 = [
    {
        id: 1,
        title: 'Basler Münster',
        description: 'Basel Cathedral, built in the 12th century, is an important symbol of the city. The architectural style is Gothic and Romanesque, and the cathedral grounds offer a magnificent view of the Rhine and the old town.',
        image: require('../assets/img/1/image4.png'),
        cord: '47.5580° N, 7.5886° E'
    },
    {
        id: 2,
        title: 'Basel Town Hall',
        description: 'The Rathaus is an important historical center of Basel with a bright red facade. The building dates back to the 16th century and is an example of excellent Renaissance architecture.',
        image: require('../assets/img/1/image.png'),
        cord: '47.5590° N, 7.5894° E'
    },
    {
        id: 3,
        title: 'Altes Rathaus',
        description: 'The Old Town of Basel is a wonderful part of the city where you can enjoy medieval architecture, narrow streets and ancient buildings. This place preserves the spirit of the past and is a major tourist attraction.',
        image: require('../assets/img/1/imag212.png'),
        cord: '47.5593° N, 7.5889° E'
    },
    {
        id: 4,
        title: 'Fountain on Freedom Square (Freiheitsbrunnen)',
        description: 'This historic fountain symbolizes Basel\'s struggle for independence and is an important cultural landmark in the city. The square around the fountain is a popular place for strolling.',
        image: require('../assets/img/1/imagfqwfqw.png'),
        cord: '47.5601° N, 7.5902° E'
    },
    {
        id: 5,
        title: 'St. Martin\'s Cemetery',
        description: 'St. Martin\'s Cemetery is one of the oldest cemeteries in Basel. Famous figures of the city are buried here, and the area itself is famous for its peaceful atmosphere and architectural monuments.',
        image: require('../assets/img/1/image3.png'),
        cord: '47.5582° N, 7.5891° E'
    }
];

const cities2 = [
    {
        id: 6,
        title: 'Basel Art Museum (Kunstmuseum Basel)',
        description: 'The Basel Art Museum is the oldest art museum in Switzerland. It houses works by masters such as Picasso, van Gogh, Matisse and many others.',
        image: require('../assets/img/2/image3.png'),
        cord: '47.5595° N, 7.5884° E'
    },
    {
        id: 7,
        title: 'Tinguely Museum',
        description: 'A museum dedicated to the works of Swiss artist Jean Tinguely, who is known for his mechanical sculptures, this place impresses with its innovative approach to art.',
        image: require('../assets/img/2/image.png'),
        cord: '47.5693° N, 7.6051° E'
    },
    {
        id: 8,
        title: 'Historisches Museum Basel',
        description: 'The Basel Historical Museum is one of the largest museums in the city, housing a wealth of archaeological, historical, and cultural artifacts that tell the story of the city\'s rich development.',
        image: require('../assets/img/2/imagfhqwfy.png'),
        cord: '47.5583° N, 7.5881° E'
    },
    {
        id: 9,
        title: 'Museum of Architecture',
        description: 'The Architecture Museum in Basel is dedicated to various aspects of architecture, construction and design. It showcases the best examples of architectural designs and techniques used in urban buildings.',
        image: require('../assets/img/2/imageqwfqwf2.png'),
        cord: '47.5500° N, 7.6002° E'
    },
    {
        id: 10,
        title: 'Fondation Beyeler',
        description: 'This museum houses a collection of modern art, including works by Kandinsky, Matisse, Picasso, and others. The museum is also famous for its magnificent garden and architectural design.',
        image: require('../assets/img/2/image4.png'),
        cord: '47.5671° N, 7.6039° E'
    }
];

const cities3 = [
    {
        id: 11,
        title: 'Peterzell Park',
        description: 'The park south of the old town is a perfect place for walks and outdoor recreation. Here you will find green lawns, benches to sit on, and beautiful views of the city.',
        image: require('../assets/img/3/image.png'),
        cord: '47.5595° N, 7.5884° E'
    },
    {
        id: 12,
        title: 'Botmingen Botanical Garden',
        description: 'The Basel Botanical Garden is one of the largest botanical gardens in Switzerland and has an impressive collection of rare plants. It is an ideal destination for nature and photography lovers.',
        image: require('../assets/img/3/image218f.png'),
        cord: '47.5439° N, 7.5902° E'
    },
    {
        id: 13,
        title: 'Rhine Park (Rheinpark)',
        description: 'The park along the Rhine River is a great place for picnics, walks, or just to enjoy the view of the river. It is a popular spot among locals.',
        image: require('../assets/img/3/imagefwqf2.png'),
        cord: '47.5555° N, 7.6011° E'
    },
    {
        id: 14,
        title: 'St. George\'s Park',
        description: 'This park in Basel is famous for its green areas and shady trees, ideal for summer relaxation. It is also a venue for various cultural events.',
        image: require('../assets/img/3/image3.png'),
        cord: '47.5614° N, 7.5955° E'
    },
    {
        id: 15,
        title: 'Nebula Park',
        description: 'This modern park is a place for relaxation and entertainment with elements of outdoor art. It features water installations, sculptures and interactive exhibitions.',
        image: require('../assets/img/3/imagefqwf4.png'),
        cord: '47.5608° N, 7.6024° E'
    }
];

const cities4 = [
    {
        id: 16,
        title: 'Basel Financial Tower',
        description: 'The tower is a modern symbol of Basel\'s economic development, located in the heart of the financial district. Its modern architecture impresses with its elegance.',
        image: require('../assets/img/4/image.png'),
        cord: '47.5599° N, 7.6018° E'
    },
    {
        id: 17,
        title: 'Basel Convention Center',
        description: 'The center is an important venue for international conferences and business meetings. Its innovative design reflects a modern approach to architecture and functionality.',
        image: require('../assets/img/4/imag.png'),
        cord: '47.5597° N, 7.5893° E'
    },
    {
        id: 18,
        title: 'Künstlerhaus Basel',
        description: 'This modern art space has brought together the best examples of contemporary art and architecture in the heart of the city',
        image: require('../assets/img/4/imageff2.png'),
        cord: '47.5590° N, 7.6030° E'
    },
    {
        id: 19,
        title: 'Innovation Technology Center',
        description: 'This innovation hub is home to startups and technology companies. Its modern architecture and technology make it an important location for the development of science and business in Basel.',
        image: require('../assets/img/4/imagefjjk3.png'),
        cord: '47.5613° N, 7.5968° E'
    },
    {
        id: 20,
        title: 'Design Museum Basel',
        description: 'The Design Museum in Basel is an important center for those interested in industrial and graphic design, offering fascinating exhibitions and programs for visitors.',
        image: require('../assets/img/4/imagefj4.png'),
        cord: '47.5588° N, 7.6010° E'
    }
];


const HomeScreen = ({navigation}) => {
    const getRandomCity = () => {
        const allCities = [cities1, cities2, cities3, cities4]; // Все массивы
        const randomCategory = allCities[Math.floor(Math.random() * allCities.length)]; // Случайный массив
        const randomCity = randomCategory[Math.floor(Math.random() * randomCategory.length)]; // Случайный элемент
        return randomCity.cord;
    };

    return (
        <ScrollView style={{backgroundColor: '#360013', flex: 1, paddingTop: 100, paddingHorizontal: 16}}>
            <Image source={require('../assets/img/Group2.png')} resizeMode={'contain'} style={{width:'100%', marginBottom:24}} />

            <TouchableOpacity onPress={()=>{navigation.navigate('HistoricalPlaces', {cities: cities1})}} style={{width:'100%', padding: 20,marginBottom: 8, backgroundColor: '#470119',borderColor: '#B80041', borderWidth: 2, borderRadius: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Text style={{color:'white', fontWeight: 'bold', fontSize: 16}}>
                    Historical places
                </Text>
                <SmallArrowSvg/>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{navigation.navigate('HistoricalPlaces', {cities: cities2})}} style={{width:'100%', padding: 20,marginBottom: 8, backgroundColor: '#470119',borderColor: '#B80041', borderWidth: 2, borderRadius: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Text style={{color:'white', fontWeight: 'bold', fontSize: 16}}>
                    Museums and galleries
                </Text>
                <SmallArrowSvg/>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{navigation.navigate('HistoricalPlaces', {cities: cities3})}} style={{width:'100%', padding: 20,marginBottom: 8, backgroundColor: '#470119',borderColor: '#B80041', borderWidth: 2, borderRadius: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Text style={{color:'white', fontWeight: 'bold', fontSize: 16}}>
                    Parks and nature
                </Text>
                <SmallArrowSvg/>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{navigation.navigate('HistoricalPlaces', {cities: cities4})}} style={{width:'100%', padding: 20,marginBottom: 8, backgroundColor: '#470119',borderColor: '#B80041', borderWidth: 2, borderRadius: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Text style={{color:'white', fontWeight: 'bold', fontSize: 16}}>
                    Modern architecture
                </Text>
                <SmallArrowSvg/>
            </TouchableOpacity>


            <ImageBackground source={{uri: 'https://s3-alpha-sig.figma.com/img/7cf5/47cf/4d2f6702ba593c2cae4ce702089b2308?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=t2Tx4t8B6hj6h9pgMDTg~Ztmas6kD92bBNxK0271geRpSxjbylrkT8-xqrDz22has1NJqZPJo~t6~G4XeFe-TtM3-6Yku4lLSyebzlsJd~j6IvGJnP~znmttLXpEfBvKcB668F2Hyqg0Qqq57irVlnkBGcS4-X7nxzpBSpC26~U6ag6ptvp-YzCBq26z33BRNepwZt2R8H55HRQCQsdn-wDkmDp8e6Yb1qXGsChlpe2N0-J5G-h1QzomneMMcBSqatMlw9O0SH13phm5Lt4u4p-LL8afeRZynG7WG4D4aDID9~dhPfIUUSk4H~6s9XngtvlI~LjQuzFbTb4z1r3Oig__'}}  style={{width:'100%', height:130, marginBottom: 8, backgroundColor: '#470119',borderColor: '#B80041', borderWidth: 2,overflow: 'hidden', borderRadius: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                <Text style={{color:'white', fontWeight: 'bold', fontSize: 26, alignSelf: 'flex-end', marginBottom: 20, marginLeft: 20}}>
                    Interactive Map
                </Text>
                <TouchableOpacity
                    onPress={()=>{navigation.navigate('Map', {coords: getRandomCity()})}} style={{
                    backgroundColor: '#360013',
                    padding: 15,
                    paddingHorizontal: 24,
                    borderColor: '#B80041',
                    borderWidth: 2,
                    borderRadius: 16,
                    alignSelf: 'flex-end',
                    marginBottom: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                        Open
                    </Text>
                </TouchableOpacity>
            </ImageBackground>
            <View style={{marginBottom: 150}}/>
        </ScrollView>
    )
}

export default HomeScreen;
