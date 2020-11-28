import React from 'react';
import {useSelector} from 'react-redux';
import SnackBar from '../components/UI/SnackBar/SnackBar';
import useHttpErrorHandler from '../hooks/http-error-handler';
import Aux from '../hoc/Auxilirate';

const withErrorHandler = (WrappedComponent, axiosInstance) => {
    return props => {
        const error = useSelector(state => state.core.error);
        const [errorHandler] = useHttpErrorHandler(axiosInstance);

        return (
            <Aux>
                {error ? <SnackBar error={error} closeError={errorHandler}/> : null}
                <WrappedComponent {...props}/>
            </Aux>
        );
    }
};

export default withErrorHandler;