
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
    }, 
    locationChoosen : false,
  };
  onPickLocation = event =>{
    
    const coords = event.nativeEvent.coordinate;
    this.setState(
      {
        location: {
          longitude: coords.longitude,
          latitude: coords.latitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.09
        },
        locationChoosen: true,
      }
      
        
    );
  }
  render(){
     let marker  = null;
     if (this.state.locationChoosen){
       marker = <MapView.Marker coordinate = {this.state.location}
        />
     }
    return (
      <MapView
        initialRegion = {this.state.location}
        style = {styles.mapStyles}
        region  = { this.state.location}
        onPress = { this.onPickLocation}
      >
         {marker}
      </MapView>
    )
  }
}

const styles = {
  mapStyles : {
    width : "100%",
    height : "100%",
    flex : 1,
  }
};

export default Map;
