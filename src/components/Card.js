//import
import React from 'react';
import { View } from 'react-native';

//component
const Card = (props) => (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );

const styles = {
    containerStyle: {
      borderWidth: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      borderRadius: 2,
      shadowColor: '#000',
      shadowOffset: { Width: 0, Height: 2 },
      //shadowOpacity: 0.1;
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10

    }
};

//export
export default Card;
