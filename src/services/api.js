import axios from 'axios';

// Configuration de base pour l'API
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

// Mode développement sans backend
const MOCK_MODE = true;

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Données mock pour le développement
const mockData = {
  properties: [
    {
      id: 1,
      title: "Appartement moderne",
      price: 400000,
      location: "Paris 15ème",
      description: "Magnifique appartement de 95m² avec 3 pièces et 2 chambres",
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=400",
      surface: 95,
      rooms: 3,
      bedrooms: 2
    },
    {
      id: 2,
      title: "Studio lumineux",
      price: 85000,
      location: "Nice Centre",
      description: "Studio de 21m² parfaitement rénové, idéal investissement",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",
      surface: 21,
      rooms: 1,
      bedrooms: 0
    },
    {
      id: 3,
      title: "Villa avec piscine",
      price: 800000,
      location: "Cannes",
      description: "Villa de 150m² avec piscine et accès direct à la plage",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400",
      surface: 150,
      rooms: 5,
      bedrooms: 4
    },
    {
      id: 4,
      title: "Appartement avec terrasse",
      price: 520000,
      location: "Lyon 6ème",
      description: "Superbe appartement de 110m² avec grande terrasse de 30m² et vue panoramique sur la ville",
      image: "https://images.pexels.com/photos/2029541/pexels-photo-2029541.jpeg?auto=compress&cs=tinysrgb&w=400",
      surface: 110,
      rooms: 4,
      bedrooms: 3
    },
    {
      id: 5,
      title: "Loft industriel",
      price: 680000,
      location: "Marseille Vieux-Port",
      description: "Magnifique loft de 130m² dans ancien entrepôt rénové, hauteur sous plafond 4m",
      image: "https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg?auto=compress&cs=tinysrgb&w=400",
      surface: 130,
      rooms: 3,
      bedrooms: 2
    },
    {
      id: 6,
      title: "Villa contemporaine",
      price: 1200000,
      location: "Saint-Tropez",
      description: "Villa d'architecte de 200m² avec piscine infinity et vue mer exceptionnelle",
      image: "https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg?auto=compress&cs=tinysrgb&w=400",
      surface: 200,
      rooms: 6,
      bedrooms: 5
    }
  ],
  user: { id: 1, name: 'Utilisateur Test', email: 'test@example.com' }
};

// Intercepteur pour les requêtes
api.interceptors.request.use(
  (config) => {
    if (!MOCK_MODE) {
      console.log('API Request:', config.method?.toUpperCase(), config.url, config.data);
    }
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
    if (!MOCK_MODE) {
      console.log('API Response:', response.status, response.data);
    }
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
    if (MOCK_MODE) {
      console.log('Mode mock: Chargement des propriétés de démonstration');
      return { data: mockData.properties };
    }
    try {
      return await api.get('/houses', { params });
    } catch (error) {
      if (error.code === 'ECONNREFUSED' || error.message === 'Network Error') {
        console.log('Utilisation des données mock pour les propriétés');
        return { data: mockData.properties };
      }
      throw error;
    }
  },
  getById: async (id) => {
    try {
      return await api.get(`/houses/${id}`);
    } catch (error) {
      if (error.code === 'ECONNREFUSED' || error.message === 'Network Error') {
        const house = mockData.properties.find(h => h.id === parseInt(id));
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
    if (MOCK_MODE) {
      console.log('Mode mock: Tentative de connexion');
      if (email === 'test@example.com' && password === 'password') {
        return { data: { token: 'mock-token-123', user: mockData.user } };
      }
      throw new Error('Email ou mot de passe incorrect');
    }
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
    if (MOCK_MODE) {
      console.log('Mode mock: Inscription simulée');
      return { data: { token: 'mock-token-123', user: { ...userData, id: Date.now() } } };
    }
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