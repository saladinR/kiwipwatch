// @flow
import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StylesButton from "../StyleButton"
import styles from './styles';

const WatchItem=(props)=>{

        const { name, tagline, image} = props.watch;

    return (
        <View style={styles.watchContainer}>
                <ImageBackground
                source={image}
                style={styles.image}
                />
                
                <View style={styles.titles}>
                    <Text style={styles.title}> {name}</Text>
                    <Text style={styles.subtitle}> {tagline}</Text>
                </View>
                <View style={styles.buttonContainer}>

                    <StylesButton 
                        type = "primary" 
                        content={"voir plus"}
                        onPress={()=>{
                            console.warn("details was pressed");
                        }}
                    />
                    <StylesButton 
                        type = "secondary" 
                        content={"ajouter au panier"}
                        onPress={()=>{
                            console.warn("order was pressed");
                        }}
                    />

                </View>
                
        </View>
     );
    };


export default WatchItem;