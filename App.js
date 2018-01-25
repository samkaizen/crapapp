import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux' ;
import store from './store' ;
import AppNavigation from './navigation/AppNavigation';

import Map from './Map';



export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store} >
         <View style= {styles.container} >

            <AppNavigation />


         </View>
       </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container : {
      flex: 1,
      //marginTop : Platform.OS === 'android' ? 24 : 0,
      backgroundColor : '#eed'
    },

});
