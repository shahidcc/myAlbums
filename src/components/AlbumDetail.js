//import
import React, {Component, Promise, Callback, WritableMap } from 'react';
import { Text, View, Image, Linking, NativeModules } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

//component
const MyAlbumsBizLogic = NativeModules.MyAlbumsBizLogic;

// for PROMISE only 
var errMsg = '';
var valReceived = '';

async function getPromise(albumTitle) {
    console.debug('.... getPromise ' + albumTitle + ' - START.');
    try {         
      var valReturned = await MyAlbumsBizLogic.isAvailable(albumTitle);
      console.debug('.... getPromise ' + albumTitle + ' - ' + String(valReturned));
      valReceived = String(valReturned); 
    } catch (e){
      console.debug(e);
    }    
};

//CLASS
class AlbumDetail extends Component {
  //componentWillMount(){
  //  this.setState({
  //    availability: undefined
  //  })    
  //}
 
  render(){
    const MyAlbumsBizLogic = NativeModules.MyAlbumsBizLogic;    
    const {data} = this.props;
    const { title, artist, thumbnailImage, image, url, year } = data;    
    const { thumbnailStyle, thumbnailContainerStyle, headerTextStyle, imageStyle, headerContentStyle } = styles;

    getPromise(data.title);
    // for CALLBACK only <<<<<
    /*
    var errMsg = '';
    var valReceived = '';
    MyAlbumsBizLogic.isAvailable(data.title, 
      (errMsg) => {
        console.log(msg);
      }, 
      (successmsg) => {
        receiveData(successmsg);    
      }
    );

    receiveData = (result) => {
      valReceived = String(result);
      console.debug('.... AlbumDetail: in. receiveData='+valReceived);  
    }
    */
    // >>>>> for CALLBACK only

    //var buttonText = (valReceived === 'no')? 'Sold Out' : 'Buy Now';
    var buttonText = (data.title === 'Fearless' || data.title === 'Red')? 'Sold Out' : 'Buy Now';
    console.debug('.... AlbumDetail: in. Album='+data.title+'-'+valReceived);

    return (
      <Card>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image
              style={thumbnailStyle}
              source={{ uri: thumbnailImage }}
            />
          </View>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text>{artist} {year}</Text>
          </View>
        </CardSection>

        <CardSection>
          <Image
            style={imageStyle}
            source={{ uri: image }}
          />
        </CardSection>

        <CardSection>
          <Button onPress={() => Linking.openURL(url)}>
              {buttonText}
          </Button>
        </CardSection>
      </Card>
    );
  }
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
    thumbnailStyle: {
    height: 50,
    width: 50
  },
    thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
    imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

//export component
export default AlbumDetail;
