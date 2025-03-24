import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

const ButtonGold = ({text, onPress, addStyle = {}}) => {
    return (
        <TouchableOpacity style={[{paddingVertical: 18, backgroundColor: '#CCA65A', width: '80%', borderRadius: 12}, addStyle]} onPress={onPress}>
            <Text style={{color: '#000', textAlign: 'center', fontSize: 20,marginTop: 0, fontFamily: 'Iceland-Regular'}}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default ButtonGold;
