// Index.js - place code in here for Android!!!!
// Import a library to help create a component
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './App';

// Render it to the device
export default class myAlbums extends Component {
    render() {
        return (
            <App/>
        );
    }
}
AppRegistry.registerComponent('myAlbums', () => App);
