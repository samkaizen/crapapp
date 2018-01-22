
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
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
    this.map.animateToRegion({
      latitude : coords.latitude,
      longitude : coords.longitude,
      latitudeDelta: 0.04,
      longitudeDelta: 0.09
    })
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
  getLocationHandler = () =>{
    navigator.geolocation.getCurrentPosition(pos =>{
      console.log(pos);

      const coordsEvent = {
        nativeEvent : {
          coordinate : {
            latitude : pos.coords.latitude,
            longitude : pos.coords.longitude
          }
        }
      };
      this.onPickLocation(coordsEvent);

    },
    err => {
      console.log(err);
      alert('Fetching the position Failed, Please Pick one Manually!')
    }
  )
  }

  render(){
     let marker  = null;
     if (this.state.locationChoosen){
       marker = <MapView.Marker coordinate = {this.state.location}
        />
     }
    return (
      <View style={{flex : 1}}>
        <MapView
          initialRegion = {this.state.location}
          style = {styles.mapStyles}
          onPress = { this.onPickLocation}
          ref = {ref => this.map = ref}
        >
          {marker}
        </MapView>
        <View style= {styles.buttonStyles}>
          <Button title ='Turn Geolocation On '
          onPress = {this.getLocationHandler} 
          color="rgba(255, 0, 0, 0.5)"
          />
        </View>
      </View>
    )
  }
}

const styles = {
  buttonStyles : {
    borderRadius : 20,
    alignSelf : "center",
    position: 'absolute',
    bottom: 20,
    left: 10,
    right: 10, 
    
  },
  mapStyles : {
    width : "100%",
    height : "90%",
    flex : 1,
  }
};

export default Map;
