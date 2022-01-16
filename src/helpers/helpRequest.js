import axios from 'axios';

export const helpRequest = () =>{
    const request = (endpoint, options) => {
        const defaultHeader = {
            accept:"application/json",
        };

        const controller = new AbortController();
        options.signal = controller.signal;
        options.method = "post";
        options.headers = defaultHeader;

        //options.data = JSON.stringify(options.data);
        //if(!options.body)delete options.body;

        console.log(options);
        setTimeout(() => controller.abort(),5000);

        return axios(endpoint,options)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    };

    return{
        request
    };
}