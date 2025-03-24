import React, { useState } from 'react';
import {Share, Text, TouchableOpacity, View} from 'react-native';
import FullMarkSvg from '../assets/svg/FullMarkSvg';
import EmptyMarkScvg from '../assets/svg/EmptyMarkScvg';

const historyData = [
    {
        "id": 1,
        "title": "The Founding of Basel",
        "story": "Basel was founded in Roman times as a fortress on the Rhine River. Its strategic location made the city an important commercial and cultural center on the edge of the empire."
    },
    {
        "id": 2,
        "title": "The World's First Pharmaceutical Company",
        "story": "In the 19th century, one of the world's first pharmaceutical companies, Roche, was founded in Basel, which later became a world leader in pharmaceuticals."
    },
    {
        "id": 3,
        "title": "The Thirty Years' War and Basel",
        "story": "During the Thirty Years' War, Basel became an important place for diplomatic negotiations and even became a temporary refuge for many refugees, including Protestants."
    },
    {
        "id": 4,
        "title": "The City of Peace",
        "story": "In 1815, after the Napoleonic Wars, an important conference was held in Basel, at which a peace treaty was signed that restored peace to the European continent."
    },
    {
        "id": 5,
        "title": "Fasnacht Festival",
        "story": "Every year, Basel becomes the center of carnival celebrations, when the city fills with musicians, artists and street theater during the Fasnacht festival, one of the largest carnival celebrations in Switzerland."
    },
    {
        "id": 6,
        "title": "The city where medicines were born",
        "story": "The first pharmaceutical company was founded in Basel, which released the smallpox vaccine. This was a major breakthrough in medicine and saved countless lives around the world."
    },
    {
        "id": 7,
        "title": "Basel Town Hall",
        "story": "The majestic town hall, built in the 16th century, became not only a symbol of the city, but also an important political and cultural center. It is still used to hold government meetings."
    },
    {
        "id": 8,
        "title": "A city that changed due to the Rhine",
        "story": "Basel has survived several major floods of the Rhine during its existence, but each time the city has become more resilient to natural disasters, adapting its infrastructure to new conditions."
    },
    {
        "id": 9,
        "title": "The painting 'Expulsion from Paradise'",
        "story": "Basel is home to one of the most famous paintings of the Renaissance, 'Expulsion from Paradise' by Hans Holbein. This painting inspired reflections on the moral foundations and religious beliefs of the time."
    },
    {
        "id": 10,
        "title": "The rise of Basel as a banking center",
        "story": "In the 19th century, with the development of industrialization, Basel became an important financial center. Basel's banks played a key role in the development of the European economy."
    },
    {
        "id": 11,
        "title": "City of doctors",
        "story": "The prominent physician Paracelsus studied and worked in Basel, who became famous for his innovative views on medicine and pharmacy."
    },
    {
        "id": 12,
        "title": "First meeting with the Nazis",
        "story": "During World War II, Basel remained a neutral city, but witnessed the first meeting between high-ranking officials of the Third Reich and the Allies to negotiate an armistice."
    },
    {
        "id": 13,
        "title": "The University of Basel is founded",
        "story": "The University of Basel was founded in 1460 and is one of the oldest educational institutions in Europe. It has produced such prominent scholars as Erasmus of Rotterdam and Carl Gustav Jung."
    },
    {
        "id": 14,
        "title": "Tinguely and his mechanical sculptures",
        "story": "The artist Jean Tinguely became famous for his moving mechanical sculptures, many of which can be seen in the Tinguely Museum in Basel."
    },
    {
        "id": 15,
        "title": "The City of Chocolate",
        "story": "Basel became home to one of the largest chocolate manufacturers, Lindt, which gave the world one of the most delicious chocolates."
    },
    {
        "id": 16,
        "title": "Opening of the first art exhibition",
        "story": "In 1875, the first international art exhibition was held in Basel, which became an important milestone in the development of modern art in Europe."
    },
    {
        "id": 17,
        "title": "The city of the painting 'The Storm'",
        "story": "The painting 'The Storm' by the artist Albrecht Dürer, which was painted in Basel, became a symbol of a new view of nature and changed the artistic canons of the time."
    },
    {
        "id": 18,
        "title": "The Swiss Congress",
        "story": "Basel was the venue for many important congresses, where issues that had an impact on the whole of Europe were discussed. Diplomatic meetings were held here, important for the development of peace in Europe."
    },
    {
        "id": 19,
        "title": "The city of theater",
        "story": "Basel is also a famous theater center, where numerous performances and festivals are held, in particular the International Theater in Basel."
    },
    {
        "id": 20,
        "title": "The city with two cultural influences",
        "story": "Basel is located on the border between France, Germany and Switzerland, so the city combines different cultural traditions and influences, creating a unique atmosphere."
    },
    {
        "id": 21,
        "title": "A city of peace and tradition",
        "story": "Basel has many quiet streets and traditional cafes where locals like to relax and enjoy a cup of tea, write poetry or talk about life."
    },
    {
        "id": 22,
        "title": "Basel in cinema",
        "story": "Basel has been the setting for many famous films and documentaries. The city has become famous for its medieval architecture, which is ideal for historical films."
    },
    {
        "id": 23,
        "title": "A city of human rights",
        "story": "In 1863, an agreement was signed in Basel that led to the creation of the International Committee of the Red Cross, making the city important in the field of human rights."
    },
    {
        "id": 24,
        "title": "The first internet technologies",
        "story": "Basel has become home to many cutting-edge technology startups. In particular, it was here that the first elements of the modern internet were developed."
    },
    {
        "id": 25,
        "title": "New Architecture in Basel",
        "story": "In recent decades, Basel has become known for its unique architecture, combining medieval buildings with modern designs by renowned architects such as Jean Nouvel and Herzog & de Meuron."
    }
];


const StoriesDetails = ({ navigation }) => {
    // Состояние для текущего факта
    const [currentFactIndex, setCurrentFactIndex] = useState(0);

    // Получаем текущий факт из массива
    const currentFact = historyData[currentFactIndex];

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
        if (currentFactIndex < historyData.length - 1) {
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
                    Stories about the city
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
                    {currentFact.title}
                </Text>

                <View style={{ width: '100%', height: 2, backgroundColor: '#ffff', marginVertical: 20 }} />

                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, alignSelf: 'flex-start', marginTop: 0 }}>
                    {currentFact.story}
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
                            Next story
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default StoriesDetails;
