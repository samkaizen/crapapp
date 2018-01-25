import { combineReducers }  from 'redux' ;
import jobs from './jobs_reducer' ;
import error from './errors_reducer' ;


export default combineReducers({

  jobs : jobs,
  error : error,


});
