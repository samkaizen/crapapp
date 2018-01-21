import React, {Component} from 'react';
import {View, Text} from 'react-native';
import MapView from 'react-native-maps';

class Map extends Component {
  state = {
    location : {
      latitude: 37.7900352,
      longitude: -122.4013726,
      latitudeDelta: 0.04,
      longitudeDelta: 0.09
    }
  };

  render(){
    return (
      <MapView
        initialRegion = {this.state.location}
        style = {styles.mapStyles}
      />
    )
  }
}

const styles = {
  mapStyles : {
    width : "100%",
    height : "100%"
  }
};

export default Map;
