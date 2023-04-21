import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface Category {
  id: string;
  name: string;
  description: null | string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: null | string;
};

const category: Category = {
  'id': '05ee689a-78e1-4475-8ac1-238c70ae377a',
  'name': 'Azure',
  'description': 'Ut quos dolore quod.',
  'is_active': true,
  'deleted_at': null,
  'created_at': '2023-04-18T16:39:25+0000',
  'updated_at': '2023-04-18T16:39:25+0000'
};

export const initialState = [
  category,
  { ...category, id: '33dffa97-6e91-45f1-86c1-8dfe5ce2c494', 'name': 'MediumBlue' },
  { ...category, id: '9b763906-c746-4935-bd5c-35b64465fd5a', 'name': 'SlateGray', 'is_active': false },
  { ...category, id: '1b763906-c746-4935-bd5c-35544465fd5a', 'name': 'Banana', 'is_active': false },
];

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    createCategory(state, action) { },
    updateCategory(state, action) { },
    deleteCategory(state, action) { },
  },
});

export const selectCategories = (state: RootState) => state.categories;
export const selectCategoryById = (state: RootState, id: string) => {
  const category = state.categories.find(category => category.id === id);

  return (
    category || {
      id: '',
      name: '',
      description: '',
      is_active: false,
      created_at: '',
      updated_at: '',
      deleted_at: null,
    }
  );
};

export const { createCategory, updateCategory, deleteCategory } = categorySlice.actions;

export default categorySlice.reducer;