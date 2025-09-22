import { configureStore } from '@reduxjs/toolkit';
import propertyReducer from './reducers/propertyReducer';
import authReducer from './reducers/authReducer';

const store = configureStore({
  reducer: {
    properties: propertyReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;