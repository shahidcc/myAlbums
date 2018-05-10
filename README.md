# myAlbums
React Native app that displays a catalog of music albums on an Android device.

### Main features:
- Card design, flexbox layout, image display, text styling, action button, url launch etc. 
- Network calls to retrieve content
- Communication with native Java using Callback as well as Promises
- Silent app upgrade using Codepush 

### Download APK file
 - [Download link](https://drive.google.com/file/d/19MiAENXKF6DbE8j4BiTLcO836k8IINLf/)

### What's included
| Name             | Description   |
| :-------------:|--------------|
| [React Native](http://facebook.github.io/react-native/releases/0.32/) |  Build Native Mobile Apps using JavaScript and React. |
| [Codepush](https://nodejs.org/) | Over The Air (OTA) app upgrade |
| [Axios](https://nodejs.org/) | Network library for HTTP/HTTPS calls |
| [Redux](https://nodejs.org/) | Predictable state container for JavaScript apps.  |
| [Redux Thunk](https://github.com/gaearon/redux-thunk) | Thunk middleware for Redux | 
| [ESLint](http://eslint.org/) | The pluggable linting utility for JavaScript and JSX |

### Requirements
- [Node](https://nodejs.org/) >= 5.0.0
- [npm](https://npmjs.com) >= 3

### Installation
#### Tools required:
1. Java JDK
2. Python 2
3. Node JS (includes npm)
4. Android SDK
5. Android Studio (includes ADB Manager for creating device emualtors) 
6. Visual Source Code or Atom IDE

#### To run debug build on simulator:
1. From app folder, run:  npm install
   It will download and install all dependencies including 3rd-party libraries and tools. 
2. Run:  react-native run-android

### Installation
1. Server URL for contents may change anytime. You may need to host your content on some server and use that URL in AlbumList file. 
