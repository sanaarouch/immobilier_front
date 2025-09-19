import { propertyService } from '../services/api';

// Types d'actions
export const FETCH_PROPERTIES_START = 'FETCH_PROPERTIES_START';
export const FETCH_PROPERTIES_SUCCESS = 'FETCH_PROPERTIES_SUCCESS';
export const FETCH_PROPERTIES_ERROR = 'FETCH_PROPERTIES_ERROR';

export const FETCH_PROPERTY_START = 'FETCH_PROPERTY_START';
export const FETCH_PROPERTY_SUCCESS = 'FETCH_PROPERTY_SUCCESS';
export const FETCH_PROPERTY_ERROR = 'FETCH_PROPERTY_ERROR';

export const CREATE_PROPERTY_START = 'CREATE_PROPERTY_START';
export const CREATE_PROPERTY_SUCCESS = 'CREATE_PROPERTY_SUCCESS';
export const CREATE_PROPERTY_ERROR = 'CREATE_PROPERTY_ERROR';

// Actions pour récupérer toutes les propriétés
export const fetchProperties = (params = {}) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PROPERTIES_START });
    
    try {
      const response = await propertyService.getAll(params);
      dispatch({
        type: FETCH_PROPERTIES_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: FETCH_PROPERTIES_ERROR,
        payload: error.response?.data?.message || 'Erreur lors du chargement des propriétés'
      });
    }
  };
};

// Action pour récupérer une propriété par ID
export const fetchPropertyById = (id) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PROPERTY_START });
    
    try {
      const response = await propertyService.getById(id);
      dispatch({
        type: FETCH_PROPERTY_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: FETCH_PROPERTY_ERROR,
        payload: error.response?.data?.message || 'Erreur lors du chargement de la propriété'
      });
    }
  };
};

// Action pour créer une nouvelle propriété
export const createProperty = (propertyData) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_PROPERTY_START });
    
    try {
      const response = await propertyService.create(propertyData);
      dispatch({
        type: CREATE_PROPERTY_SUCCESS,
        payload: response.data
      });
      return response.data;
    } catch (error) {
      dispatch({
        type: CREATE_PROPERTY_ERROR,
        payload: error.response?.data?.message || 'Erreur lors de la création de la propriété'
      });
      throw error;
    }
  };
};

// Action pour rechercher des propriétés
export const searchProperties = (searchParams) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PROPERTIES_START });
    
    try {
      const response = await propertyService.search(searchParams);
      dispatch({
        type: FETCH_PROPERTIES_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: FETCH_PROPERTIES_ERROR,
        payload: error.response?.data?.message || 'Erreur lors de la recherche'
      });
    }
  };
};