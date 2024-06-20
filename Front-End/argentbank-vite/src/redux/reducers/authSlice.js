import { createSlice } from '@reduxjs/toolkit';

// État initial

const initialState = {
  accessToken: null, // Stocke le jeton d'accès
  userProfile: null, // Stocke les informations de l'utilisateur
};

// Slice pour gérer l'authentification de l'utilisateur
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    // Action pour définir le token lors de la connexion

    loginUser: (state, action) => {
      state.accessToken = action.payload.token; // Mise à jour du token
    },

    // Action pour stocker les informations de l'utilisateur dans le state

    UserInfo: (state, action) => {
      state.userProfile = action.payload;
    },

    // Action pour réinitialiser l'état lors de la déconnexion
    
    logoutUser: (state) => {
      state.accessToken = null; // Réinitialisation du token
      state.userProfile = null; // Réinitialisation des informations de l'utilisateur
    },

    // Action pour mettre à jour le nom d'utilisateur

        updateUsername: (state, action) => {
      state.userProfile = {
        ...state.userProfile,
        body: {
          ...state.userProfile.body,
          userName: action.payload.userName,
        },
      };
    },
  },
});

export const { loginUser, UserInfo, logoutUser, updateUsername } = authSlice.actions;

// Pour vérifier que l'utilisateur est connecté
export const IsConnected = (state) => state.auth.accessToken !== null;

export default authSlice.reducer;