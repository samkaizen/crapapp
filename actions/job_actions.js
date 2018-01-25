import axios from 'axios';
import reverseGeocode from 'latlng-to-zip' ;
//import qs from 'qs' ;
import { FETCH_JOBS, ERROR ,FETCH_NO_JOBS } from './types';

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
//const key = 'AIzaSyCi3TDoEyUuf8hLRw2at-n9XZb3GwAxQIc' ;
const JOB_QUERY_PARAMS = {

  publisher : '4201738803816157',
  format : 'json',
  v : '2',
  latlong: 1,
  radius : 25 ,
  q : 'javascript',
  //key : 'AIzaSyAryHgUaG95uuDW4IYyr8j0-qJJKvnBmug',

};

const buildJobsUrl = (zip, query) => {
  const queryString = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip , q : query,key:'AIzaSyCsa7JXkq18w1PS5ZuaN48BFEkEzqu_ZEQ'

  });
  return `${JOB_ROOT_URL}${queryString}`;
};

//export const fetchjobs =  (region, callback, query) => {
export const fetchjobs =  (region , query , callback) => {

  return  async (dispatch) =>{

      try{
          let zip = await reverseGeocode(region);
          // making the actual request
          //const url = buildJobsUrl(zip,query);
          const API_KEY ='AIzaSyCsa7JXkq18w1PS5ZuaN48BFEkEzqu_ZEQ';
          const url = `http://api.indeed.com/ads/apisearch?publisher=4201738803816157&q=${query}&l=${zip}&latlong=1&radius=%2025&v=2&format=json&key=AIzaSyCsa7JXkq18w1PS5ZuaN48BFEkEzqu_ZEQ` ;
          /*
          `http://api.indeed.com/ads/apisearch?publisher=4201738803816157&q=${query}&l=${zip}&latlong=1&radius=%2025&v=2&format=json&key=${API_KEY}`
          */
          let { data } = await axios.get(url);
          //console.log('data iside action creator');
          //console.log(data)
          console.log('results inside action creator----')
          console.log(data);

          if( typeof data.results[0] === 'object'){

             dispatch({
               type : FETCH_JOBS,
               payload : data
             });




             callback();

           }
           else if(typeof data.results[0] !== 'object'){

             dispatch({
               type : FETCH_NO_JOBS,
               payload : data
             });
          // callback();

           }


      }catch(error){

        dispatch({
          type : ERROR,
          payload : error
        });
        console.log(' ERRRRRROR DISPATCHED FROM ACTION CREATOR: ');
        console.log(error);

      }

  }
}
