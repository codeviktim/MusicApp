import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { View, StyleSheet } from 'react-native';

const FolderIcon = () => (
    <View styles={styles.folder}>
        <Icon name='folder' size={10} color='#900' light/>
    </View>
)
export default FolderIcon;

const styles = StyleSheet.create({
    folder: {
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderRadius: 4,
        borderColor: '#000',
        padding:10

   } 
})