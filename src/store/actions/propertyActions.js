import { 
  fetchPropertiesStart,
  fetchPropertiesSuccess,
  fetchPropertiesError,
  fetchPropertyStart,
  fetchPropertySuccess,
  fetchPropertyError,
  createPropertyStart,
  createPropertySuccess,
  createPropertyError,
} from '../reducers/propertyReducer';
import { propertyService } from '../../services/api';

// Actions pour récupérer toutes les propriétés
export const fetchProperties = (params = {}) => {
  return async (dispatch) => {
    dispatch(fetchPropertiesStart());
    
    try {
      const response = await propertyService.getAll(params);
      dispatch(fetchPropertiesSuccess(response.data));
    } catch (error) {
      console.warn('API non disponible, utilisation des données de démonstration', error.message);
      // En cas d'erreur API, utiliser les données par défaut du reducer
      dispatch(fetchPropertiesError(`API non disponible: ${error.message}`));
    }
  };
};

// Action pour récupérer une propriété par ID
export const fetchPropertyById = (id) => {
  return async (dispatch) => {
    dispatch(fetchPropertyStart());
    
    try {
      const response = await propertyService.getById(id);
      dispatch(fetchPropertySuccess(response.data));
    } catch (error) {
      dispatch(fetchPropertyError(
        error.response?.data?.message || 'Erreur lors du chargement de la propriété'
      ));
    }
  };
};

// Action pour créer une nouvelle propriété
export const createProperty = (propertyData) => {
  return async (dispatch) => {
    dispatch(createPropertyStart());
    
    try {
      const response = await propertyService.create(propertyData);
      dispatch(createPropertySuccess(response.data));
      return response.data;
    } catch (error) {
      dispatch(createPropertyError(
        error.response?.data?.message || 'Erreur lors de la création de la propriété'
      ));
      throw error;
    }
  };
};

// Action pour rechercher des propriétés
export const searchProperties = (searchParams) => {
  return async (dispatch) => {
    dispatch(fetchPropertiesStart());
    
    try {
      const response = await propertyService.search(searchParams);
      dispatch(fetchPropertiesSuccess(response.data));
    } catch (error) {
      dispatch(fetchPropertiesError(
        error.response?.data?.message || 'Erreur lors de la recherche'
      ));
    }
  };
};