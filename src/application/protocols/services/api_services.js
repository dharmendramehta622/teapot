import { ApiBaseModel } from './api_base_services'
import {axios } from '../guard/guard'

var base_url = 'http://localhost:8080';

class AxiosServices extends ApiBaseModel {
    
    static instance = new ApiBaseModel(axios);
    axios = axios.create({
        baseURL: base_url,
        timeout: 1000,
    });
    constructor() { 
        super(axios);
        if (ApiBaseModel.instance) {
            return ApiBaseModel.instance;
        }
        ApiBaseModel.instance = this;
      
    }
}
 

export { AxiosServices    }  