import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const pokemon = createApi({
  reducerPath: "pokemon",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  refetchOnMountOrArgChange: true,
  keepUnusedDataFor: 0,
  endpoints: (builder) => ({
    getAllPokes: builder.query({
      queryFn: async () => {
        try {
          const data = await fetch("https://pokeapi.co/api/v2/pokemon/", {
            method: "GET",
          }).then((res) => res.json());
          console.log({ data });
        } catch (error) {
          return error;
        }
      },
    }),
    getPokemones: builder.query({
      query: () => ({
        url: "pokemon/",
        method: "POST",
      }),
    }),
  }),
});

export const { useGetAllPokesQuery, useGetPokemonesQuery } = pokemon;
export default pokemon;
