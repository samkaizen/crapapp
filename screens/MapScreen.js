import React, {Component} from 'react';
import { View,Dimensions} from 'react-native';
//import MapView from 'react-native-maps';
import GeoToggle from '../components/GeoToggle';


const HEIGHT_INPUT = Dimensions.get('window').height /10;
const WIDTH_DEVICE = Dimensions.get('window').width;
const HEIGHT_DEVICE = Dimensions.get('window').height;

class MapScreen extends Component {

  state = {
    geolocation : false,
  }


  render(){



    return (
       <View style= {{flex : 1}}>
             <GeoToggle geolocation={false}/>
       </View>
    )
  }
}

const styles = {
  buttonInputWrapper : {
    marginTop : 5 ,
    flexDirection : 'row',
    height : HEIGHT_INPUT,
    justifyContent : 'space-around',
    backgroundColor : '#eee'

  },
  buttonStyles : {
    borderRadius : 20,
    alignSelf : "center",
    position: 'absolute',
    bottom: 20,
    left: 10,
    right: 10,

  },
  mapStyles : {
    width : WIDTH_DEVICE,
    height : HEIGHT_DEVICE,
    flex : 1,
  },
  inputStyles : { paddingLeft : 5,
                 flex : 1,
                fontSize : 20

  }
};

export default MapScreen;
