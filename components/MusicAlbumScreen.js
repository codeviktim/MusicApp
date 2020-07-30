import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
//import Icon from 'react-native-vector-icons/Feather';

//It will recieve props of _getMusic files to render the filename path.
const MusicAlbumScreen = ({tracks}) => {
  return tracks && Array.isArray(tracks).length !== 0 ? (
    <ScrollView>
      {tracks.map((t, i) => {
        return (
          <View key={i}>
            <Text style={styles.track}>{t.fileName}</Text>
          </View>
        );
      })}
    </ScrollView>
  ) : (
    <Text>Tracks List Empty</Text>
  );
};
export default MusicAlbumScreen;
const styles = StyleSheet.create({
  tracksContainer: {
    backgroundColor: '#fff',
  },
  track: {
    color: 'black',
    fontSize: 20,
  },
});
