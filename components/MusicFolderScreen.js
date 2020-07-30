import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import FolderIcon from './common/FolderIcon';

//const path = require('path');

//It will recieve props of _getMusic files to render the filename path.
export default class MusicFolderScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  folderName = path_name => {
    return path_name;
  };

  render() {
    let _tracks;
    let trackFolders = [];
    this.props.tracks && this.props.tracks.length !== 0 ? (
      (_tracks = this.props.tracks.map((t, i) => {
        //if trackpath is the same, generate a folder for them and add same other tracks in the folder until you find a different path and do the same
        let trackpath = t.path;
        if (path.dirname(t.path) === trackpath) {
        }
        return (
          <View key={i}>
            <Text style={styles.track}>{t.path}</Text>
            <Text>{t.path}</Text>
            <View style={styles.lineStyle} />
          </View>
        );
      }))
    ) : (
      <Text>Tracks List Empty</Text>
    );
    return <ScrollView>{_tracks}</ScrollView>;
  }
}

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
    borderBottomWidth: 0.5,
  },
});
