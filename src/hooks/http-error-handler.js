import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import * as actions from '../store/actions/coreActions';

export default httpClient => {
    const dispatch = useDispatch();

    const requestInterceptor = httpClient.interceptors.request.use(request => {
        return request
    });

    const responseInterceptor = httpClient.interceptors.response
        .use(res => {
            if (res) dispatch(actions.toggleLoading(false));
            return res
            },  err => {
            dispatch(actions.setError(err.message));
            dispatch(actions.toggleLoading(false));
            }
    );

    useEffect(() => {
        return () => {
            httpClient.interceptors.request.eject(requestInterceptor);
            httpClient.interceptors.response.eject(responseInterceptor);
        }
    }, [requestInterceptor, responseInterceptor]);

    const errorHandler = () => {
        dispatch(actions.setError(null));
    };

    return [errorHandler];
}