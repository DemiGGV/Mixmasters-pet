import { createSlice } from '@reduxjs/toolkit';
import {
  fetchMyDrinks,
  deleteMyDrink,
  fetchFavoriteDrinks,
  deleteFavoriteDrink,
  fetchMainpage,
} from './drinksOperations';
import { toast } from 'react-hot-toast';

const handlePending = (state, action) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  toast.error('Something went wrong please try later.', {
    position: 'top-center',
  });
};
const handleFetchMyDrinks = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};
const handleDeleteMyDrink = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(drink => drink.id === action.meta.arg.id);
  state.items.splice(index, 1);
  toast.success('Drink deleted successfully.', { position: 'top-center' });
};
const handleFetchFavoriteDrinks = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};
const handleDeleteFavoriteDrink = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(
    drink => drink._id === action.meta.arg.id
  );
  state.items.splice(index, 1);
  toast.success('Drink deleted successfully.');
};
const handleFetchMainpage = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const drinksSlice = createSlice({
  name: 'drinks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      // Register user
      .addCase(fetchMyDrinks.pending, handlePending)
      .addCase(fetchMyDrinks.fulfilled, handleFetchMyDrinks)
      .addCase(fetchMyDrinks.rejected, handleRejected)
      // Login user
      .addCase(deleteMyDrink.pending, handlePending)
      .addCase(deleteMyDrink.fulfilled, handleDeleteMyDrink)
      .addCase(deleteMyDrink.rejected, handleRejected)
      // Logout user
      .addCase(fetchFavoriteDrinks.pending, handlePending)
      .addCase(fetchFavoriteDrinks.fulfilled, handleFetchFavoriteDrinks)
      .addCase(fetchFavoriteDrinks.rejected, handleRejected)
      // Update user
      .addCase(deleteFavoriteDrink.pending, handlePending)
      .addCase(deleteFavoriteDrink.fulfilled, handleDeleteFavoriteDrink)
      .addCase(deleteFavoriteDrink.rejected, handleRejected)
      // Refresh user
      .addCase(fetchMainpage.pending, handlePending)
      .addCase(fetchMainpage.fulfilled, handleFetchMainpage)
      .addCase(fetchMainpage.rejected, handleRejected);
  },
});

export const drinksReducer = drinksSlice.reducer;
