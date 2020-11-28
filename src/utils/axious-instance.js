import axios from 'axios';

export const apiKey = 'apikey=aLaVstXS3Ae7xiWbAB6twj0rQFXQL8U0';
const instance =  axios.create({
    baseURL: 'http://dataservice.accuweather.com/',
});

export default instance;