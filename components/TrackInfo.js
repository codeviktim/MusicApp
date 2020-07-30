const Sound  = require('react-native-sound') 

const TrackInfo = class {
  id: String;
  artist: String;
  title: String;
  fileName: String;
  genre: String;
  duration: Number;
  path: String;

  constructor(trackInfo) {
    if (trackInfo) {
      if (trackInfo['id']) {
        this.id = Number(trackInfo['id']);
      }
      if (trackInfo['title']) {
        this.title = trackInfo['title'];
      }
      if (trackInfo['artist']) {
        this.artist = trackInfo['artist'];
      }
      if (trackInfo['genre']) {
        this.genre = trackInfo['genre'];
      }
      if (trackInfo['duration']) {
        this.duration = Number(trackInfo['duration']);
      }
      if (trackInfo['fileName']) {
        this.fileName = trackInfo['fileName'];
      }
      if (trackInfo['path']) {
        this.path = trackInfo['path'];
      }
    }
  }


  //iplement music play methods here







};

export default TrackInfo;
