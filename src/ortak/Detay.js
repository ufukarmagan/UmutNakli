import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Button from './Button';


const Detay = ({ data }) => {
  const { containerStyle, subContainerStyle, ImageStyle, titleStyle } = styles;
  console.log("DETAY içi");
  console.log(data);
  return (
    <View style={containerStyle}>
        <Text style={subContainerStyle}> ACUKLAMA </Text>
        <Image style={styles.ImageStyle} source={{ uri: data.url}} />
    </View>
    );
};

const styles = {

  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,

  },
  subContainerStyle: {
  borderBottomWidth: 1,
  padding: 5,
  backgroundColor: '#fff',
  justifyContent: 'flex-start',
  flexDirection: 'row',
  borderColor: '#ddd',
  position: 'relative'
},
ImageStyle: {
  height: 300,
  //width: 50,
  flex: 1

},
titleStyle: {
  fontSize: 18
}

};

export { Detay };
