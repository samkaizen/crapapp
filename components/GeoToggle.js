import React, {Component} from 'react';
import { View, Text, ActivityIndicator , Platform, TextInput,Dimensions, Button, ScrollView
} from 'react-native';
import MapView from 'react-native-maps';

const HEIGHT_INPUT = Dimensions.get('window').height /10;
const WIDTH_DEVICE = Dimensions.get('window').width;
const HEIGHT_DEVICE = Dimensions.get('window').height;

class GeoToggle extends Component {
  state = {
    loading : false,
    location : {
      latitude: 37.7900352,
      longitude: -122.4013726,
      latitudeDelta: 0.04,
      longitudeDelta: 0.09
    },
    locationChoosen : false,
    geolocation : this.props.geolocation,
    query : 'java'
  };
  onPickLocation = (event )=>{

    const coords = event.nativeEvent.coordinate;
    this.map.animateToRegion({
      latitude : coords.latitude,
      longitude : coords.longitude,
      latitudeDelta: 0.04,
      longitudeDelta: 0.09
    });
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
  setLocation = () =>{
    navigator.geolocation.getCurrentPosition(pos =>{
      //console.log(pos);

      const coordsEvent = {
        nativeEvent : {
          coordinate : {
            latitude : pos.coords.latitude,
            longitude : pos.coords.longitude
          }
        }
      };
      this.onPickLocation(coordsEvent);
      this.setState({ geolocation : true})

    },
    err => {
      console.log(err);
      alert('Fetching the position Failed, Please Pick one Manually!')
    }
  )
  }
  setlocation2 = ()=>{


    const coordsEvent = {
      nativeEvent : {
        coordinate : {
          latitude: 37.7900352,
          longitude: -122.4013726
        }
      }
    };
    this.onPickLocation(coordsEvent);
    this.setState({ geolocation : false})

  }

onButtonSearch = ()=>{
  alert('Go fetch some Jobs For YA!!')
  //this.setState({loading : true});

  // Fetch some jobs

  //DON'T Forget to  : this.setState({loading : false}) in the body of the asunc action

}

  onGeoOff = ()=>{
    let marker  = null;
    if (this.state.locationChoosen){
      marker = <MapView.Marker coordinate = {this.state.location}
       />
    }
    return(

      <ScrollView style={{ flex : 1, }}  >
        <View style={ styles.buttonInputWrapper}>
          <View style= {{ borderWidth : 0.5, flex : 2, margin : 5, marginBottom : 10, borderRadius : 5}}>
              <TextInput
                placeholder = 'Enter Your Search Term'
                value = { this.state.query}
                onChangeText={(query) => this.setState({query : query})}
                style= {styles.inputStyles}
                underlineColorAndroid ='transparent'
               />
           </View>
           <View style = {styles.inputButtonStyles}>
             { this.state.loading  ? <ActivityIndicator size ='large'/> :
             <Button
               //title=' Geo OFF'
               title='Search'
               color='red'
               onPress={this.onButtonSearch}
               //icon={{ name: 'search' }}
              // borderRadius = {5}
             />
           }
           </View>
      </View>
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
          onPress = {this.setLocation}
          color="rgba(255, 0, 0, 0.5)"
          />
        </View>
      </ScrollView>

    )
  }
  onGeoOn = ()=>{
    let marker  = null;
    if (this.state.locationChoosen){
      marker = <MapView.Marker coordinate = {this.state.location}
       />
    }
    return(

      <ScrollView style={{ flex : 1, }}  >
        <View style={ styles.buttonInputWrapper}>
          <View style= {{ borderWidth : 0.5, flex : 2, margin : 5, marginBottom : 10, borderRadius : 5}}>
              <TextInput
                placeholder = 'Enter Your Search Term'
                value = { this.state.query}
                onChangeText={(query) => this.setState({query : query})}
                style= {styles.inputStyles}
                underlineColorAndroid ='transparent'
               />
           </View>
           <View style = {styles.inputButtonStyles}>
             { this.state.loading  ? <ActivityIndicator size ='large'/> :
             <Button
               //title=' Geo OFF'
               title='Search'
               color='red'
               onPress={this.onButtonSearch}
               //icon={{ name: 'search' }}
              // borderRadius = {5}
             />
           }
           </View>
      </View>
        <MapView
          initialRegion = {this.state.location}
          style = {styles.mapStyles}
          onPress = { this.onPickLocation}
          ref = {ref => this.map = ref}
        >
          {marker}
        </MapView>
        <View style= {styles.buttonStyles}>
          <Button title ='Turn Geolocation Off '
          onPress = {this.setlocation2}
          color="green"
          />
        </View>
      </ScrollView>

    )
  }

  render(){

  console.log('Geolocation',this.state.geolocation);
  if (this.state.geolocation){
    return(
      <View style= {{flex : 1}}>
            {this.onGeoOn()}
      </View>
    );
  }

    return (
       <View style= {{flex : 1}}>
         {this.onGeoOff()}
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
  inputButtonStyles : {flex : 1,
                 justifyContent : 'center'
              },
  buttonStyles : {
    borderRadius : 20,
    alignSelf : "center",
    position: 'absolute',
    bottom: 100,
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

export default GeoToggle;
