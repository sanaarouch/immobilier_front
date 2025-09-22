import axios from 'axios';

// Configuration de base pour l'API
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:2200';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: parseInt(process.env.REACT_APP_API_TIMEOUT) || 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Intercepteur pour les requêtes
api.interceptors.request.use(
  (config) => {
    // Ajouter le token d'authentification si disponible
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercepteur pour les réponses
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Rediriger vers la page de connexion si non autorisé
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Services API pour les propriétés
export const propertyService = {
  getAll: (params = {}) => api.get('/house', { params }),
  getById: (id) => api.get(`/house/${id}`),
  create: (data) => api.post('/house', data),
  update: (id, data) => api.put(`/house/${id}`, data),
  delete: (id) => api.delete(`/house/${id}`),
  search: (searchParams) => api.get('/house/search', { params: searchParams }),
  getByLocation: (location) => api.get(`/house/location/${location}`),
};

// Services API pour l'authentification
export const authService = {
  login: (email, password) => api.post('/security/signin', { email, password }),
  register: (userData) => api.post('/security/signup', userData),
  logout: () => api.post('/security/logout'),
  getProfile: () => api.get('/security/profile'),
  refreshToken: () => api.post('/security/refresh'),
  forgotPassword: (email) => api.post('/security/forgot-password', { email }),
  resetPassword: (token, password) => api.post('/security/reset-password', { token, password }),
};

// Service pour les utilisateurs
export const userService = {
  getProfile: () => api.get('/user/profile'),
  updateProfile: (data) => api.put('/user/profile', data),
  getFavorites: () => api.get('/user/favorites'),
  addFavorite: (propertyId) => api.post('/user/favorites', { propertyId }),
  removeFavorite: (propertyId) => api.delete(`/user/favorites/${propertyId}`),
  getAll: () => api.get('/user'),
  getById: (id) => api.get(`/user/${id}`),
  create: (userData) => api.post('/user', userData),
  update: (id, userData) => api.put(`/user/${id}`, userData),
  delete: (id) => api.delete(`/user/${id}`),
};

// Service pour les commandes
export const orderService = {
  getAll: () => api.get('/order'),
  getById: (id) => api.get(`/order/${id}`),
  create: (orderData) => api.post('/order', orderData),
  update: (id, orderData) => api.put(`/order/${id}`, orderData),
  delete: (id) => api.delete(`/order/${id}`),
  getByUser: (userId) => api.get(`/order/user/${userId}`),
};

export default api;