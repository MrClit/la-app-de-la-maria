import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 1. Definir tipos
export type Option = '' | 'like' | 'hate';

type StoreState = {
  option: Option;
  photoSelected: string | null;
  animalSelected: string | null;
}

// 2. Estado inicial
const initialState: StoreState = {
  option: '',
  photoSelected: null,
  animalSelected: null,
};

// 3. Crear slice
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setOption: (state, action: PayloadAction<Option>) => {
      state.option = action.payload;
    },
    setPhotoSelected: (state, action: PayloadAction<string | null>) => {
      state.photoSelected = action.payload;
    },
    setAnimalSelected: (state, action: PayloadAction<string | null>) => {
      state.animalSelected = action.payload;
    },
    resetState: () => initialState
  }
});

// 4. Exportar acciones
export const {setOption, setPhotoSelected, setAnimalSelected, resetState} = appSlice.actions;
export default appSlice.reducer;