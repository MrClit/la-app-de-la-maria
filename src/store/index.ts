import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./slices/appSlice";

// 5. Configurar store
export const store = configureStore({
	reducer: {
		app: appReducer,
	},
});

// 6. Tipos globales
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
