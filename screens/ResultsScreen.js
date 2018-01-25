import React, { Component } from 'react';
import { View, Text, Platform, ScrollView, Linking, Alert} from 'react-native';
import { Button, Card } from '../components/common';
import { connect } from 'react-redux';

import  MapView from 'react-native-maps';
import * as actions from '../actions' ;
class ResultsScreen extends Component {

  render(){
    return(
      <View style={{flex: 1}}>

          <Text> Results Screen</Text>

      </View>
    )
  }
}

/*
function mapStateToProps(state) {
  return { jobs: state.jobs.results,
          error : state.error,
          nojobs: state.nojobs
   };
}
*/
export default connect(null, actions)(ResultsScreen);
