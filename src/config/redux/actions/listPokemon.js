import axios from 'axios'

export const getPokemon = () => async (dispatch) => {
    try {
        dispatch({type: 'GET_POKEMON_PENDING'})
        const result = await axios.get('https://test.dengansenangteknologi.com/api/v1/pokemons?limit=10&page=1&keyword=')
        const listPokemon = result.data
        dispatch({type: 'GET_POKEMON_SUCCESS', payload: {listPokemon}})
    } catch (error) {
        console.log(error);
    }
}