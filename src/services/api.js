import axios from 'axios';

// Configuration de base pour l'API
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:2200/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Intercepteur pour les requêtes
api.interceptors.request.use(
  (config) => {
    console.log('API Request:', config.method?.toUpperCase(), config.url, config.data);
    // Ajouter le token d'authentification si disponible
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Intercepteur pour les réponses
api.interceptors.response.use(
  (response) => {
    console.log('API Response:', response.status, response.data);
    return response;
  },
  (error) => {
    console.error('API Response Error:', error.response?.status, error.response?.data || error.message);
    if (error.response?.status === 401) {
      // Rediriger vers la page de connexion si non autorisé
      localStorage.removeItem('authToken');
      // window.location.href = '/login'; // Commenté pour éviter les redirections automatiques
    }
    return Promise.reject(error);
  }
);

// Services API pour les propriétés
export const propertyService = {
  getAll: (params = {}) => api.get('/houses', { params }),
  getById: (id) => api.get(`/houses/${id}`),
  create: (data) => api.post('/houses', data),
  update: (id, data) => api.put(`/houses/${id}`, data),
  delete: (id) => api.delete(`/houses/${id}`),
  search: (searchParams) => api.get('/houses/search', { params: searchParams }),
  getByLocation: (location) => api.get(`/houses/location/${location}`),
};

// Services API pour l'authentification
export const authService = {
  login: (email, password) => api.post('/auth/signin', { email, password }),
  register: (userData) => api.post('/auth/signup', userData),
  logout: () => api.post('/auth/logout'),
  getProfile: () => api.get('/auth/profile'),
  refreshToken: () => api.post('/auth/refresh'),
  forgotPassword: (email) => api.post('/auth/forgot-password', { email }),
  resetPassword: (token, password) => api.post('/auth/reset-password', { token, password }),
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