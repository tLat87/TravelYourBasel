import React, { useState } from 'react';
import {Share, Text, TouchableOpacity, View} from 'react-native';
import FullMarkSvg from '../assets/svg/FullMarkSvg';
import EmptyMarkScvg from '../assets/svg/EmptyMarkScvg';

const factsData = [
    {
        "id": 1,
        "title": "The Founding of Basel",
        "description": "Basel was founded in Roman times as a fortress on the Rhine River. Its strategic location made the city an important commercial and cultural center on the edge of the empire.",
        "cord": "47.5580° N, 7.5886° E"
    },
    {
        "id": 2,
        "title": "The World's First Pharmaceutical Company",
        "description": "In the 19th century, one of the world's first pharmaceutical companies, Roche, was founded in Basel, which later became a world leader in pharmaceuticals.",
        "cord": "47.5590° N, 7.5894° E"
    },
    {
        "id": 3,
        "title": "The Thirty Years' War and Basel",
        "description": "During the Thirty Years' War, Basel became an important place for diplomatic negotiations and even became a temporary refuge for many refugees, including Protestants.",
        "cord": "47.5593° N, 7.5889° E"
    },
    {
        "id": 4,
        "title": "The City of Peace",
        "description": "In 1815, after the Napoleonic Wars, an important conference was held in Basel, at which a peace treaty was signed that restored peace to the European continent.",
        "cord": "47.5595° N, 7.5884° E"
    },
    {
        "id": 5,
        "title": "Fasnacht Festival",
        "description": "Every year, Basel becomes the center of carnival celebrations, when the city fills with musicians, artists and street theater during the Fasnacht festival, one of the largest carnival celebrations in Switzerland.",
        "cord": "47.5585° N, 7.5893° E"
    },
    {
        "id": 6,
        "title": "The city where medicines were born",
        "description": "The first pharmaceutical company was founded in Basel, which released the smallpox vaccine. This was a major breakthrough in medicine and saved countless lives around the world.",
        "cord": "47.5598° N, 7.5882° E"
    },
    {
        "id": 7,
        "title": "Basel Town Hall",
        "description": "The majestic town hall, built in the 16th century, became not only a symbol of the city, but also an important political and cultural center. It is still used to hold government meetings.",
        "cord": "47.5582° N, 7.5891° E"
    },
    {
        "id": 8,
        "title": "A city that changed due to the Rhine",
        "description": "Basel has survived several major floods of the Rhine during its existence, but each time the city has become more resilient to natural disasters, adapting its infrastructure to new conditions.",
        "cord": "47.5597° N, 7.5890° E"
    },
    {
        "id": 9,
        "title": "The painting 'Expulsion from Paradise'",
        "description": "Basel is home to one of the most famous paintings of the Renaissance, 'Expulsion from Paradise' by Hans Holbein. This painting inspired reflections on the moral foundations and religious beliefs of the time.",
        "cord": "47.5589° N, 7.5892° E"
    },
    {
        "id": 10,
        "title": "The rise of Basel as a banking center",
        "description": "In the 19th century, with the development of industrialization, Basel became an important financial center. Basel's banks played a key role in the development of the European economy.",
        "cord": "47.5587° N, 7.5884° E"
    },
    {
        "id": 11,
        "title": "City of doctors",
        "description": "The prominent physician Paracelsus studied and worked in Basel, who became famous for his innovative views on medicine and pharmacy.",
        "cord": "47.5592° N, 7.5881° E"
    },
    {
        "id": 12,
        "title": "First meeting with the Nazis",
        "description": "During World War II, Basel remained a neutral city, but witnessed the first meeting between high-ranking officials of the Third Reich and the Allies to negotiate an armistice.",
        "cord": "47.5594° N, 7.5893° E"
    },
    {
        "id": 13,
        "title": "The University of Basel is founded",
        "description": "The University of Basel was founded in 1460 and is one of the oldest educational institutions in Europe. It has produced such prominent scholars as Erasmus of Rotterdam and Carl Gustav Jung.",
        "cord": "47.5581° N, 7.5895° E"
    },
    {
        "id": 14,
        "title": "Tinguely and his mechanical sculptures",
        "description": "The artist Jean Tinguely became famous for his moving mechanical sculptures, many of which can be seen in the Tinguely Museum in Basel.",
        "cord": "47.5590° N, 7.5887° E"
    },
    {
        "id": 15,
        "title": "The City of Chocolate",
        "description": "Basel became home to one of the largest chocolate manufacturers, Lindt, which gave the world one of the most delicious chocolates.",
        "cord": "47.5591° N, 7.5880° E"
    },
    {
        "id": 16,
        "title": "Opening of the first art exhibition",
        "description": "In 1875, the first international art exhibition was held in Basel, which became an important milestone in the development of modern art in Europe.",
        "cord": "47.5583° N, 7.5894° E"
    },
    {
        "id": 17,
        "title": "The city of the painting 'The Storm'",
        "description": "The painting 'The Storm' by the artist Albrecht Dürer, which was painted in Basel, became a symbol of a new view of nature and changed the artistic canons of the time.",
        "cord": "47.5594° N, 7.5886° E"
    },
    {
        "id": 18,
        "title": "The Swiss Congress",
        "description": "Basel was the venue for many important congresses, where issues that had an impact on the whole of Europe were discussed. Diplomatic meetings were held here, important for the development of peace in Europe.",
        "cord": "47.5596° N, 7.5885° E"
    },
    {
        "id": 19,
        "title": "The city of theater",
        "description": "Basel is also a famous theater center, where numerous performances and festivals are held, in particular the International Theater in Basel.",
        "cord": "47.5584° N, 7.5896° E"
    },
    {
        "id": 20,
        "title": "The city with two cultural influences",
        "description": "Basel is located on the border between France, Germany and Switzerland, so the city combines different cultural traditions and influences, creating a unique atmosphere.",
        "cord": "47.5588° N, 7.5888° E"
    },
    {
        "id": 21,
        "title": "A city of peace and tradition",
        "description": "Basel has many quiet streets and traditional cafes where locals like to relax and enjoy a cup of tea, write poetry or talk about life.",
        "cord": "47.5592° N, 7.5890° E"
    },
    {
        "id": 22,
        "title": "Basel in cinema",
        "description": "Basel has been the setting for many famous films and documentaries. The city has become famous for its medieval architecture, which is ideal for historical films.",
        "cord": "47.5586° N, 7.5883° E"
    },
    {
        "id": 23,
        "title": "A city of human rights",
        "description": "In 1863, an agreement was signed in Basel that led to the creation of the International Committee of the Red Cross, making the city important in the field of human rights.",
        "cord": "47.5593° N, 7.5886° E"
    },
    {
        "id": 24,
        "title": "The first internet technologies",
        "description": "Basel has become home to many cutting-edge technology startups. In particular, it was here that the first elements of the modern internet were developed.",
        "cord": "47.5590° N, 7.5881° E"
    },
    {
        "id": 25,
        "title": "New Architecture in Basel",
        "description": "In recent decades, Basel has become known for its unique architecture, combining medieval buildings with modern designs by renowned architects such as Jean Nouvel and Herzog & de Meuron.",
        "cord": "47.5587° N, 7.5892° E"
    }
];

const FactsDetails = ({ navigation }) => {
    // Состояние для текущего факта
    const [currentFactIndex, setCurrentFactIndex] = useState(0);

    // Получаем текущий факт из массива
    const currentFact = factsData[currentFactIndex];

    // Функция для обработки делания репоста
    const handleShare = async (item) => {
        try {
            await Share.share({
                message: `Check out this place: ${item.title}\n\nCoordinates: ${item.cord}\n\nDescription: ${item.description}`,
            });
        } catch (error) {
            console.log('Error sharing:', error);
        }
    };

    // Функция для переключения на следующий факт
    const handleNextFact = () => {
        if (currentFactIndex < factsData.length - 1) {
            setCurrentFactIndex(currentFactIndex + 1); // Переключаем на следующий факт
        } else {
            setCurrentFactIndex(0); // Если достигли конца, начинаем с первого
        }
    };

    return (
        <View style={{ backgroundColor: '#360013', flex: 1, paddingHorizontal: 16 }}>
            <View
                style={{
                    width: '50%',
                    backgroundColor: '#B7003F',
                    borderColor: '#B80041',
                    borderWidth: 2,
                    padding: 20,
                    borderRadius: 16,
                    position: 'absolute',
                    zIndex: 1,
                    alignSelf: 'center',
                }}
            >
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, alignSelf: 'flex-start', textAlign: 'center' }}>
                    Facts about Basel
                </Text>
            </View>
            <View
                style={{
                    width: '100%',
                    padding: 20,
                    marginTop: 50,
                    marginBottom: 8,
                    backgroundColor: '#470119',
                    borderColor: '#B80041',
                    borderWidth: 2,
                    borderRadius: 16,
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, alignSelf: 'flex-start', marginTop: 50 }}>
                    Fact #{currentFact.id}
                </Text>

                <View style={{ width: '100%', height: 2, backgroundColor: '#ffff', marginVertical: 20 }} />

                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, alignSelf: 'flex-start', marginTop: 0 }}>
                    {currentFact.description}
                </Text>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    width: '100%',
                    marginTop: 12
                }}>
                    {/* Кнопка для делания репоста */}
                    <TouchableOpacity
                        onPress={() => handleShare(currentFact)}
                        style={{
                            backgroundColor: '#360013',
                            padding: 15,
                            paddingHorizontal: 24,
                            borderColor: '#B80041',
                            borderWidth: 2,
                            borderRadius: 16,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                            Share
                        </Text>
                    </TouchableOpacity>

                    {/* Кнопка для перехода к следующему факту */}
                    <TouchableOpacity
                        onPress={handleNextFact}
                        style={{
                            backgroundColor: '#360013',
                            padding: 15,
                            paddingHorizontal: 24,
                            borderColor: '#B80041',
                            borderWidth: 2,
                            borderRadius: 16,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                            Next fact
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default FactsDetails;
