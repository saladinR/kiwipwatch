import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const StyleButton = (props) => {

    const {type,content,onPress} = props;
 

    // change de background color 

    const backgroundColor = type === 'primary' ? '#feca57' : '#ee5253';

    // change color text 
    const textColor = type === 'primary' ? 'white' : 'black';
    return (
        <View style={styles.container}>
            <Pressable  
                    style={[styles.button,{backgroundColor : backgroundColor}]} 
                    onPress={()=> onPress()}
            >
                <Text style={[styles.text, {color : textColor}]}>{content}</Text>
            </Pressable>
        </View>
    );
};

export default StyleButton;