import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  imageUrl: '',
  accessToken: '',
  email: '',
  isVerified: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.imageUrl = action.payload.imageUrl;
      state.accessToken = action.payload.accessToken;
      state.email = action.payload.email;
    }
  }
});

export const { setUser, setMusicPlayerRef } = userSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
});

export default store;
