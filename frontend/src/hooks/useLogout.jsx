import { useAuthContext } from './useAuthContext';
import { useExitPointsContext } from './useExitPointsContext';

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const { dispatch: exitDispatch } = useExitPointsContext();

    const logout = async () => {
        // remove user from local storage
        localStorage.removeItem('user');

        // dispatch logout action
        dispatch({ type: 'LOGOUT' });
        exitDispatch({ type: 'SET_EXITPOINTS', payload: null })
    };

  return {logout}
}

