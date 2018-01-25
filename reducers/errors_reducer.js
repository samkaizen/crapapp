import { ERROR } from '../actions/types' ;

const INITIAL_STATE = null ;

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case ERROR:
    console.log(action.payload) ;

     return action.payload ;

    default:
     return state;


  }

}
