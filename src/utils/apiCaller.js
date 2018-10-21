import axios from 'axios';
import * as Config from './../constants/Configs';

export default function callApi(endpoint,method='GET',body){
    return axios({
        method:method,
        url:`${Config.API_URL}/${endpoint}`,
        // url:'http://5bc860828bfe5a00131b6edb.mockapi.io/vanhoancnt/api/v1/products',
        data:body
    }).catch(err=>{
        console.log(err);
    })
};