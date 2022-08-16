const initialState = {
  isLoading: false,
  pokemon: [],
};

const pokemon = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POKEMON_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_POKEMON_SUCCESS":
      return {
        ...state,
        pokemon: action.payload.listPokemon.data,
      };
    default:
      return state;
  }
};

export default pokemon
