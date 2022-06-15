import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import styles from './styles';
import watchs from './watchs';
import WatchItem from '../WatchItem';

const window = Dimensions.get('window');

const WatchList = (props) => {
    return (

        <View style={styles.container}>
            <FlatList
                data={watchs}
                renderItem={({item}) => <WatchItem watch={item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={window.height}
            />
        </View>
    );
        
    
};

export default WatchList;