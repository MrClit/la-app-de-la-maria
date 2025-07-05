import React, { createContext, useContext, useState, ReactNode } from 'react';

// 1. Define types
export type Option = '' | 'like' | 'hate';

export type AppState = {
  option: Option;
  photoSelected: string | null;
  animalSelected: string | null;
  setOption: (option: Option) => void;
  setPhotoSelected: (photo: string | null) => void;
  setAnimalSelected: (animal: string | null) => void;
  resetState: () => void;
};

const initialState: {
  option: Option;
  photoSelected: string | null;
  animalSelected: string | null;
} = {
  option: '',
  photoSelected: null,
  animalSelected: null,
};

const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [option, setOption] = useState<Option>(initialState.option);
  const [photoSelected, setPhotoSelected] = useState<string | null>(initialState.photoSelected);
  const [animalSelected, setAnimalSelected] = useState<string | null>(initialState.animalSelected);

  const resetState = () => {
    setOption(initialState.option);
    setPhotoSelected(initialState.photoSelected);
    setAnimalSelected(initialState.animalSelected);
  };

  return (
    <AppContext.Provider
      value={{
        option,
        photoSelected,
        animalSelected,
        setOption,
        setPhotoSelected,
        setAnimalSelected,
        resetState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
