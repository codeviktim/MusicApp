/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import MusicFiles from 'react-native-get-music-files';
import MusicFolderScreen from './components/MusicFolderScreen';
import TracksScreen from './components/TracksScreen';
import PlayListsScreen from './components/PlayListsScreen';
import MusicAlbumScreen from './components/MusicAlbumScreen';
import TrackInfo from './components/TrackInfo';
import {Alert} from 'react-native';

const Tab = createMaterialTopTabNavigator();

// function myTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Folders" component={MusicFolderScreen } />
//       <Tab.Screen name="Playlists" component={PlayListsScreen} />
//       <Tab.Screen name="Tracks" component={TracksScreen data = {this.state.tracks}} />
//       <Tab.Screen name="Albums" component={MusicAlbumScreen} />
//     </Tab.Navigator>
//   );
// }
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      StoragePermission: '',
      tracks: [],
    };
  }

  makeRequest = () => {
    request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then(result => {
      if (RESULTS.GRANTED) {
        this.setState({storagePermission: result});
        Alert.alert('loading');
      }
    });
  };

  componentDidMount() {
    this.makeRequest();
    MusicFiles.getAll({
      id: true,
      artist: true,
      title: true,
      fileName: true,
      duration: true,
      genre: true,
      path: true,
      //minimumSongDuration: 1000,
    })
      .then(data => {
        let tracks = [];
        let trackInfo;
        data.forEach(function(x) {
          trackInfo = new TrackInfo(x);
          tracks.push(trackInfo);
        });
        this.setState({tracks});
        console.log(tracks);
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Folders"
            component={() => <MusicFolderScreen tracks={this.state.tracks} />}
          />
          <Tab.Screen name="Playlists" component={PlayListsScreen} />
          <Tab.Screen
            name="Tracks"
            component={() => <TracksScreen tracks={this.state.tracks} />}
          />
          <Tab.Screen
            name="Albums"
            component={() => <MusicAlbumScreen tracks={this.state.tracks} />}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
