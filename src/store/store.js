import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

// Reducer par défaut
const initialState = {
  properties: [],
  loading: false,
  error: null
};

const propertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PROPERTIES_START':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'FETCH_PROPERTIES_SUCCESS':
      return {
        ...state,
        loading: false,
        properties: action.payload
      };
    case 'FETCH_PROPERTIES_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  properties: propertiesReducer
});

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;