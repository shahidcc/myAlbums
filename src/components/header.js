// Import
import React from 'react';
import { Text, View } from 'react-native';

//Make  a componenet
const Header = (props) => {
   const { textStyle, viewStyle } = styles;

   return (
   <View style={viewStyle}>
    <Text style={textStyle}> {props.headerText} </Text>
   </View>
 );
};

const styles = {
  viewStyle: {
    backgroundColor: '#C0C0C0',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    //shadowOpacity: '0.5';
    elevation: 10,
    position: 'relative'
  },
  textStyle: {
    fontSize: 25
  }
};

// Make the component available to other parts of the App
export default Header;
