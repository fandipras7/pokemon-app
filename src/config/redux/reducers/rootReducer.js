import {combineReducers} from 'redux'
import pokemonReducer from './pokemonReducer'

const rootReducer = combineReducers({
    listPokemon: pokemonReducer
})

export default rootReducer