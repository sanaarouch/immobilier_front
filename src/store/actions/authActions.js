import { 
  authStart,
  authSuccess,
  authError,
  logout as logoutAction,
  clearError,
} from '../reducers/authReducer';
import { authService } from '../../services/api';

// Action pour la connexion
export const login = (credentials) => {
  return async (dispatch) => {
    dispatch(authStart());
    
    try {
      const response = await authService.login(credentials.email, credentials.password);
      const { token, user } = response.data;
      
      localStorage.setItem('authToken', token);
      dispatch(authSuccess({ token, user }));
      
      return response.data;
    } catch (error) {
      dispatch(authError(
        error.response?.data?.message || 'Erreur lors de la connexion'
      ));
      throw error;
    }
  };
};

// Action pour l'inscription
export const register = (userData) => {
  return async (dispatch) => {
    dispatch(authStart());
    
    try {
      const response = await authService.register(userData);
      const { token, user } = response.data;
      
      localStorage.setItem('authToken', token);
      dispatch(authSuccess({ token, user }));
      
      return response.data;
    } catch (error) {
      dispatch(authError(
        error.response?.data?.message || 'Erreur lors de l\'inscription'
      ));
      throw error;
    }
  };
};

// Action pour la déconnexion
export const logout = () => {
  return async (dispatch) => {
    try {
      await authService.logout();
    } catch (error) {
      console.warn('Erreur lors de la déconnexion côté serveur');
    } finally {
      localStorage.removeItem('authToken');
      dispatch(logoutAction());
    }
  };
};

// Action pour récupérer le profil utilisateur
export const getProfile = () => {
  return async (dispatch) => {
    dispatch(authStart());
    
    try {
      const response = await authService.getProfile();
      dispatch(authSuccess({ 
        token: localStorage.getItem('authToken'), 
        user: response.data 
      }));
    } catch (error) {
      dispatch(authError(
        error.response?.data?.message || 'Erreur lors du chargement du profil'
      ));
    }
  };
};

// Action pour effacer les erreurs
export const clearAuthError = () => {
  return (dispatch) => {
    dispatch(clearError());
  };
};