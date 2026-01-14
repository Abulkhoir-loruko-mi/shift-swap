
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


const BASE_URL = 'https://shiftswap-backend-4w40.onrender.com/api';



const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 30 seconds timeout (good for Render free tier)
});

// 3. Request Interceptor: Automatically adds the Token
api.interceptors.request.use(
  async (config) => {
    try {
      // Retrieve token from storage
      const token = await AsyncStorage.getItem('userToken');
      
      console.log('Token found in storage :', token ? 'Yes' : 'No')
      
      // If token exists, add it to the Authorization header
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }else{
        console.warn('Warning ,no token found will likely fail')
      }
    } catch (error) {
      console.error('Error fetching token from storage:', error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 4. Response Interceptor: centralized error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token expired or invalid
      //Maybe i will Navigate user back to Login screen if needed
      console.log('Session expired. Please login again.');
    }
    return Promise.reject(error);
  }
);


export const authServices = {
  login: async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data; // Returns { user, token }
  },
  register: async (userData) => {
    // userData = { name, email, password, role: 'staff', department:'department' }
    const response = await api.post('/auth/register', userData);
    return response.data;
  },
  getProfile: async () => {
    const response = await api.get('/');
    return response.data;
  },
};

export const profileService = {
  // GET /profile - Fetch full profile details (for pre-filling forms)
  getProfile: async () => {
    const response = await api.get('/auth/me');
    console.log('API RESPONSE', response.data)
    // Returns { success: true, data: { ...userProfile } }
    if (response.data?.data?.user) {
      return response.data.data.user;
    }
    return response.data.data || {};
     
  },

  
  updateProfile: async (updateData) => {
    try {
      console.log('sending update to /profile:' ,updateData)
       const response = await api.put('/profile', updateData);
       console.log('update response', response.data)
    return response.data?.data?.user || response.data.data;
      
    } catch (error) {
      console.log('update failed', error.response?.data)
      throw error;
      
    }

   
  },

  getFacilities: async () => {
    try {
      const response = await api.get('/facilities');
      
      console.log('FACILITIES RAW:', response.data); 

      // FIX: The array is inside the "facilities" key
      if (response.data && Array.isArray(response.data)) {
        return response.data;
      }
      
      return []; // Return empty array if structure is wrong
    } catch (error) {
      console.error('Error fetching facilities:', error);
      return [];
    }
  }
  
  // GET /facilities - Helper to populate Facility Dropdown in Step 1
 
};


export const shiftService = {
  // Get "My Schedule" (Upcoming or Past)
 

  // In src/services/api.js inside shiftService object:

getMyAssignedShifts: async (viewType = 'upcoming') => {
  try {
    // viewType should be 'upcoming' or 'past'
    const response = await api.get(`/shifts/my-assigned?view=${viewType}`);
    
    console.log(`MY SHIFTS (${viewType}):`, response.data); // Debug log

    // Handle different response structures safely
    if (Array.isArray(response.data)) return response.data;
    if (Array.isArray(response.data?.data)) return response.data.data;
    
    return [];
  } catch (error) {
    console.error('Fetch My Shifts Error:', error);
    return [];
  }
},

  // Get "Available Shifts" for the Feed
  getAvailableShifts: async (filters = {}) => {
    // filters example: { department: 'Emergency' }
    const params = new URLSearchParams(filters).toString();
    const response = await api.get(`/shifts/available?${params}`);
    return response.data.data;
  },

  // Request to Swap (Pick Up)
  requestSwap: async (shiftId) => {
    const response = await api.post('/swap-requests', { shiftId });
    return response.data;
  },
  
  // Get history of my requests
  getMySwapRequests: async () => {
    const response = await api.get('/swap-requests/my-requests');
    return response.data.data;
  }
};

export default api;


