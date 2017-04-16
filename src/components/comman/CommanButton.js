import React from 'react';
import { View,Text,TextInput,TouchableOpacity } from 'react-native';
const CommonButton = ({ name,color,callBack }) => {
return (
        <TouchableOpacity onPress={ callBack }
                          style={{ alignItems : 'center',paddingTop:15,paddingBottom:15,marginLeft:10,marginRight:10,borderRadius:15 ,backgroundColor : color }}>
            <Text style={{ color : 'white' }}>
                {name}
            </Text>
        </TouchableOpacity>
    );
};
export { CommonButton };