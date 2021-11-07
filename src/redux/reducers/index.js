import { combineReducers } from 'redux'
import filters from './filter'
import pizzas from './pizzas'
import cart from './cart'
const rootReducer = combineReducers({
    //позволяє скомбінувати редюсири шо б не один передавати
    filters,
    pizzas,
    cart,
})
export default rootReducer
