import { useAuthContext } from './useAuthContext';
import { useExitPointContext } from './useExitPointsContext';

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const { dispatch: exitDispatch } = useExitPointContext();

    const logout = async () => {
        // remove user from local storage
        localStorage.removeItem('user');

        // dispatch logout action
        dispatch({ type: 'LOGOUT' });
        exitDispatch({ type: 'SET_EXITPOINTS', payload: null })
    };

  return {logout}
}

