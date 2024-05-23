import { createSlice } from "@reduxjs/toolkit";

export const pokeSlice = createSlice({
  name: "poke",
  initialState: {
    pokemons: [],
    ids: [],
  },
  reducers: {
    addPokemon: (state, action) => {
      state.pokemons = [...state.pokemons, action.payload];
    },
    removePokemon: (state, action) => {
      state.pokemons = state.pokemons.filter(
        (pokemon) => pokemon.id !== action.payload
      );
    },
    // removePokemon: (state) => {
    //   state.count += 1;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { addPokemon, removePokemon } = pokeSlice.actions;
