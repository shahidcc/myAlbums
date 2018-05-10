//Import
import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

console.debug('.. AlbumList: started.');

//Component 
//const contentUrl = 'http://nostalgic-shoes.surge.sh/music-albums-ts3.json';
//const contentUrl = 'http://nostalgic-shoes.surge.sh/music-albums-ts2.json';
const contentUrl = 'http://nostalgic-shoes.surge.sh/music-albums-ts.json';

class AlbumList extends Component {
  state = { albums: []};
  componentWillMount(){
    axios.get(contentUrl)
      .then(response => this.setState({ albums: response.data }));
    console.debug('.. AlbumList.componentWillMount: axios call completed.');
  }

  renderAlbums(){
    console.debug('..renderAlbums.');
    return this.state.albums.map( album =>
      <AlbumDetail key={album.title} data={album}/>
    );
  }

  render(){
    console.debug(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

// Render to the device
export default AlbumList;
