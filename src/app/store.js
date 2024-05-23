import { configureStore } from "@reduxjs/toolkit";
import { pokeSlice } from "./pokeLocal/pokeSlice";
import pokemon from "./api/pokemon";

export const store = configureStore({
  reducer: {
    pokemonState: pokeSlice.reducer,
    [pokemon.reducerPath]: pokemon.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemon.middleware),
});

export default store;
