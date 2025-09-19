import {
  FETCH_PROPERTIES_START,
  FETCH_PROPERTIES_SUCCESS,
  FETCH_PROPERTIES_ERROR,
  FETCH_PROPERTY_START,
  FETCH_PROPERTY_SUCCESS,
  FETCH_PROPERTY_ERROR,
  CREATE_PROPERTY_START,
  CREATE_PROPERTY_SUCCESS,
  CREATE_PROPERTY_ERROR,
} from '../actions/propertyActions';

const initialState = {
  properties: [],
  currentProperty: null,
  loading: false,
  error: null,
  totalCount: 0,
  currentPage: 1,
  totalPages: 1,
};

const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROPERTIES_START:
    case FETCH_PROPERTY_START:
    case CREATE_PROPERTY_START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_PROPERTIES_SUCCESS:
      return {
        ...state,
        loading: false,
        properties: action.payload.properties || action.payload,
        totalCount: action.payload.totalCount || action.payload.length,
        currentPage: action.payload.currentPage || 1,
        totalPages: action.payload.totalPages || 1,
        error: null,
      };

    case FETCH_PROPERTY_SUCCESS:
      return {
        ...state,
        loading: false,
        currentProperty: action.payload,
        error: null,
      };

    case CREATE_PROPERTY_SUCCESS:
      return {
        ...state,
        loading: false,
        properties: [action.payload, ...state.properties],
        error: null,
      };

    case FETCH_PROPERTIES_ERROR:
    case FETCH_PROPERTY_ERROR:
    case CREATE_PROPERTY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default propertyReducer;