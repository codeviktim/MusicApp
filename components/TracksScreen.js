import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

//It will recieve props of _getMusic files to render the filename path.
const TrackScreen = ({tracks}) => {
  return tracks && Array.isArray(tracks).length !== 0 ? (
    <ScrollView>
      {tracks.map((t, i) => {
        return (
          <View key={i}>
            <Text style={styles.track}>{t.fileName}</Text>
            <View style={styles.lineStyle} />
          </View>
        );
      })}
    </ScrollView>
  ) : (
    <Text>Tracks List Empty</Text>
  );
};
export default TrackScreen;
const styles = StyleSheet.create({
  tracksContainer: {
    backgroundColor: '#fff',
  },
  track: {
    color: 'black',
    fontSize: 20,
  },
  lineStyle: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
