import axios from 'axios';

// Configuration de base pour l'API
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Fonction pour vérifier si le backend est disponible
const isBackendAvailable = async () => {
  try {
    await api.get('/health', { timeout: 2000 });
    return true;
  } catch (error) {
    console.warn('Backend non disponible, utilisation du mode mock');
    return false;
  }
};

// Données mock pour le développement
const mockData = {
  houses: [
    { id: 1, title: 'Maison moderne', price: 250000, location: 'Paris', type: 'Maison' },
    { id: 2, title: 'Appartement centre-ville', price: 180000, location: 'Lyon', type: 'Appartement' },
  ],
  user: { id: 1, name: 'Utilisateur Test', email: 'test@example.com' }
};

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
    if (error.code === 'ECONNREFUSED' || error.message === 'Network Error') {
      console.error('Erreur de connexion au backend:', error.message);
      console.log('Vérifiez que le serveur backend est démarré sur', API_BASE_URL);
    } else {
      console.error('API Response Error:', error.response?.status, error.response?.data || error.message);
    }
    
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
  getAll: async (params = {}) => {
    try {
      return await api.get('/houses', { params });
    } catch (error) {
      if (error.code === 'ECONNREFUSED' || error.message === 'Network Error') {
        console.log('Utilisation des données mock pour les propriétés');
        return { data: mockData.houses };
      }
      throw error;
    }
  },
  getById: async (id) => {
    try {
      return await api.get(`/houses/${id}`);
    } catch (error) {
      if (error.code === 'ECONNREFUSED' || error.message === 'Network Error') {
        const house = mockData.houses.find(h => h.id === parseInt(id));
        return { data: house || null };
      }
      throw error;
    }
  },
  create: (data) => api.post('/houses', data),
  update: (id, data) => api.put(`/houses/${id}`, data),
  delete: (id) => api.delete(`/houses/${id}`),
  search: (searchParams) => api.get('/houses/search', { params: searchParams }),
  getByLocation: (location) => api.get(`/houses/location/${location}`),
};

// Services API pour l'authentification
export const authService = {
  login: async (email, password) => {
    try {
      return await api.post('/auth/signin', { email, password });
    } catch (error) {
      if (error.code === 'ECONNREFUSED' || error.message === 'Network Error') {
        console.log('Mode mock: connexion simulée');
        // Simulation d'une connexion réussie
        if (email === 'test@example.com' && password === 'password') {
          return { 
            data: { 
              token: 'mock-token-123', 
              user: mockData.user 
            } 
          };
        } else {
          throw new Error('Email ou mot de passe incorrect');
        }
      }
      throw error;
    }
  },
  register: async (userData) => {
    try {
      return await api.post('/auth/signup', userData);
    } catch (error) {
      if (error.code === 'ECONNREFUSED' || error.message === 'Network Error') {
        console.log('Mode mock: inscription simulée');
        return { 
          data: { 
            token: 'mock-token-123', 
            user: { ...userData, id: Date.now() } 
          } 
        };
      }
      throw error;
    }
  },
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