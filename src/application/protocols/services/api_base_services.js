
import { LocalStorageService, LocalStorageServiceItems } from '../../storages/storage_services';
 

function errorLogger(variables, error) {
    var _errorString = `
         Base URL: ${error}
        Variables: $variables
        Encoded Variables: ${JSON.stringify(variables)}
        Error: ${error}
        Error Message: ${error.message}
        `;
    console.error(_errorString);
}

function successLogger(variables, response) {
    var _successString = `
    Base URL: ${response.headers}
    Variables: ${variables}
    Encoded Variables: ${JSON.stringify(variables)}
    Status: ${response.status}
    Data: ${response.data}
   `;
    console.log(_successString);
}

class ApiResponse {
    status ;
    msg ;
    constructor(status, msg ) {
        this.status = status;
        this.msg = msg;
    }

    toString() {
        return `Status: ${this.status}, Msg: ${this.msg}`;
    }
}

var base_url = 'http://localhost:8080/api';

class ApiBaseModel {

    //Axios client declaration
 axios;
 static instance;

constructor(axios) { 
    this.axios = axios;
    axios.interceptors.request.use(async (config) => {
        const token = LocalStorageService.instance.get(LocalStorageServiceItems.ACCESS_TOKEN);
        if (token)
        {
          config.headers.Authorization = `Bearer ${token}`;
        } 
        return config;
      },
      (error) => {
        return Promise.reject(error);
      });
}
    
    async get(url,variables) {
    try {
        const response = this.axios({
            method: 'get',
            url: `${base_url}${url}`, 
            data: variables
        }); 
    let res = await response
        successLogger(variables, response);
        return new ApiResponse(true, res.data); 
    } catch (error) {
        errorLogger(variables, error);
        return new ApiResponse(false, error);
    }
}

    async post(url, variables) {
    try {
        const response = this.axios({
            method: 'post',
            url: `${base_url}${url}`, 
            data: variables
        });
        let res = await response
        successLogger(variables, response);
        return new ApiResponse(true, res.data); 
    } catch (error) {
        errorLogger(variables, error);
        return new ApiResponse(false, error);
    }
}

    async put(url,variables) {
    try {
        const response = this.axios({
            method: 'put',
            url: `${base_url}${url}`, 
            data: variables
        });
        let res = await response
        successLogger(variables, response);
        return new ApiResponse(true, res.data); 
    } catch (error) {
        errorLogger(variables, error);
        return new ApiResponse(false, error);
    }
}

    async patch(url,variables) {
    try {
        const response = this.axios({
            method: 'patch',
            url: `${base_url}${url}`, 
            data: variables
        });
        let res = await response
        successLogger(variables, response);
        return new ApiResponse(true, res.data); 
    } catch (error) {
        errorLogger(variables, error);
        return new ApiResponse(false, error);
    }
}

    async delete(url,variables) {
    try {
        const response = this.axios({
            method: 'delete',
            url: `${base_url}${url}`, 
            data: variables
        });
        let res = await response
        successLogger(variables, response);
        return new ApiResponse(true, res.data); 
    } catch (error) {
        errorLogger(variables, error);
        return new ApiResponse(false, error);
    }
}
}


class AxiosTokenInterceptor {
    static error()  {
        throw new Error('Method not implemented.');
    }
    static response()  {
        throw new Error('Method not implemented.');
    }
    static request(config) {
        return  (async (resolve) => {
          config.headers = { ...config.headers, ...(await _getHeaders()) };
          resolve(config);
        });
      }
    _infoLogger(options) {
        console.log(`
      URL: ${options.url}
      METHOD: ${options.method}
      VALIDATE STATUS: ${options.validateStatus}
      Headers: ${options.headers}
      Follow Redirects: ${options.followRedirects}
      Extra: ${options.extra}
      List Format: ${options.listFormat}

      Query Parameters: ${options.params}
    `);
    }

    async request(config) {
        config.headers = { ...config.headers, ...await _getHeaders() };
        this._infoLogger(config);
        return config;
    }

    response(response) {
        return response;
    }

    error(error) {
        return Promise.reject(error);
    }
}

 

 
 
async function _getHeaders() {
    const _token = LocalStorageService.instance.get(LocalStorageServiceItems.ACCESS_TOKEN);
    let _headers = {
        'Accept': 'application/json',
        "Content-Type": "application/json",
        "Connection": "keep-alive",
        // "Cookie": "csrftoken=89AOo8IBWB2UIWnxtXL7G8KMkcJxl3VvnzjFeCNxNs1KDQ4BmhzEHxzmbwtgBfFf; sessionid=ym3ta1erjkcd8nbxilt5ka2bfc958yqt",
    };
    if (_token != null) {
        _headers['Authorization'] = `Bearer ${_token} `;
    }
    return _headers;
}



export { ApiBaseModel  }
export { AxiosTokenInterceptor  }




