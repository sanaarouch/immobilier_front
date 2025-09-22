import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
  currentProperty: null,
  loading: false,
  error: null,
  totalCount: 6,
  currentPage: 1,
  totalPages: 1,
};

const propertySlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    fetchPropertiesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPropertiesSuccess: (state, action) => {
      state.loading = false;
      state.properties = action.payload.properties || action.payload;
      state.totalCount = action.payload.totalCount || action.payload.length;
      state.currentPage = action.payload.currentPage || 1;
      state.totalPages = action.payload.totalPages || 1;
      state.error = null;
    },
    fetchPropertiesError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchPropertyStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPropertySuccess: (state, action) => {
      state.loading = false;
      state.currentProperty = action.payload;
      state.error = null;
    },
    fetchPropertyError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createPropertyStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    createPropertySuccess: (state, action) => {
      state.loading = false;
      state.properties = [action.payload, ...state.properties];
      state.error = null;
    },
    createPropertyError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchPropertiesStart,
  fetchPropertiesSuccess,
  fetchPropertiesError,
  fetchPropertyStart,
  fetchPropertySuccess,
  fetchPropertyError,
  createPropertyStart,
  createPropertySuccess,
  createPropertyError,
} = propertySlice.actions;

export default propertySlice.reducer;