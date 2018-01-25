import React  from 'react';
import { TabNavigator } from 'react-navigation' ;

import MapScreen from '../screens/MapScreen' ;
import ResultsScreen from '../screens/ResultsScreen' ;
import HomeScreen from '../screens/HomeScreen' ;

const AppNavigation =   TabNavigator({
map  : { screen : MapScreen},
results  : { screen : ResultsScreen},
about : { screen : HomeScreen},


});


export default AppNavigation ;
