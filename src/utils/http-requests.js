import axiosInstance, {apiKey} from './axious-instance';

export const fetchWeatherByKey = async (key, placeName) => {
    const url = `currentconditions/v1/${key}?${apiKey}`;
    const res = await axiosInstance.get(url);
    if (res) {
        return {...res.data[0], LocalizedName: placeName, Key: key};
    }
};

export const fetch5DaysWeather = async (key, isMetric) => {
    const url = `forecasts/v1/daily/5day/${key}?${apiKey}&metric=${isMetric}`;
    const res = await axiosInstance.get(url);
    if (res) return res;
};

export const fetchGeoLocation = async (lat, lon) => {
    const url = `locations/v1/cities/geoposition/search?${apiKey}&q=${lat},${lon}&toplevel=true`;
    const res = await axiosInstance.get(url);
    if(res) return res.data;
};

export const fetchAutoComplete = async (value) => {
    const url = `locations/v1/cities/autocomplete?${apiKey}&q=${value}&language=en-us`;
    const res = await axiosInstance.get(url);
    if (res) return res.data;
};