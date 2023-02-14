import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import { categoriesListReducer } from './categoriesListReducer'
import { productsListReducer } from './productsListReducer'

const rootReducer = combineReducers({
    categoriesList: categoriesListReducer,
    productsList: productsListReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))