import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const FactsScreen = ({ navigation }) => {
    // Состояние для выбранной опции
    const [selectedOption, setSelectedOption] = useState(null);

    // Функция для обработки нажатия на кнопку "Continue"
    const handleContinue = () => {
        if (selectedOption === 'facts') {
            navigation.navigate('FactsDetails');  // Замените на имя экрана для фактов
        } else if (selectedOption === 'stories') {
            navigation.navigate('StoriesDetails');  // Замените на имя экрана для историй
        }
    };

    return (
        <View style={{ backgroundColor: '#360013', flex: 1, paddingHorizontal: 16 }}>
            <View
                style={{
                    width: '100%',
                    padding: 20,
                    marginBottom: 8,
                    backgroundColor: '#470119',
                    borderColor: '#B80041',
                    borderWidth: 2,
                    borderRadius: 16,
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 24 }}>
                    Choose one option:
                </Text>

                {/* Опция "Facts about Basel" */}
                <TouchableOpacity
                    onPress={() => setSelectedOption('facts')}
                    style={{
                        width: '100%',
                        padding: 40,
                        marginBottom: 16,
                        marginTop: 30,
                        backgroundColor: selectedOption === 'facts' ? '#B80041' : '#470119',
                        borderColor: '#B80041',
                        borderWidth: 2,
                        borderRadius: 16,
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>
                        Facts about Basel
                    </Text>
                </TouchableOpacity>

                {/* Опция "Stories about the city" */}
                <TouchableOpacity
                    onPress={() => setSelectedOption('stories')}
                    style={{
                        width: '100%',
                        padding: 40,
                        marginBottom: 16,
                        backgroundColor: selectedOption === 'stories' ? '#B80041' : '#470119',
                        borderColor: '#B80041',
                        borderWidth: 2,
                        borderRadius: 16,
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>
                        Stories about
                        the city
                    </Text>
                </TouchableOpacity>

                {/* Кнопка "Continue" */}
                <TouchableOpacity
                    onPress={handleContinue}
                    disabled={!selectedOption}  // Кнопка активна только при выборе опции
                    style={{
                        width: '100%',
                        padding: 40,
                        marginBottom: 16,
                        backgroundColor: selectedOption ? '#fff' : '#aaa',
                        borderColor: '#B80041',
                        borderWidth: 2,
                        borderRadius: 16,
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ color: selectedOption ? '#000' : 'gray', fontWeight: 'bold', fontSize: 20 }}>
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default FactsScreen;
