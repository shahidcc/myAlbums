import React, { Component } from 'react';
import { AppRegistry,Dimensions,Image,StyleSheet,Text,TouchableOpacity,View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
import CodePush from "react-native-code-push";

class App extends Component {
  componentDidMount() {
    CodePush.sync({ installMode: CodePush.InstallMode.IMMEDIATE});
  }
  //console.debug('.. App: CodePush completed.');
  //    CodePush.sync({ updateDialog: true, installMode: CodePush.InstallMode.IMMEDIATE});

  render() {
    return (
      <View style={{ flex: 1 }}>
      <Header headerText={ 'Albums on Sale' }/>
      <AlbumList />
    </View>
    );
  }
}
export default App;
