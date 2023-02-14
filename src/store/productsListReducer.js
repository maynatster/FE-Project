const defaultState = {
    productsList: []
}

const GET_PRODUCTS = 'GET_PRODUCTS'

export const productsListReducer = (state = defaultState, action) => {
    switch (action.type){
        case GET_PRODUCTS:
            return {...state, productsList: action.payload}
        default:
            return state
    }
}

export const getProductsAction = (payload) => ({type: GET_PRODUCTS, payload})