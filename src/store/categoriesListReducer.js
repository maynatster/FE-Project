const defaultState = {
    categoriesList: []
}

const GET_CATEGORIES = 'GET_CATEGORIES'

export const categoriesListReducer = (state = defaultState, action) => {
    switch (action.type){
        case GET_CATEGORIES:
            return {...state, categoriesList: [...action.payload]}
        default:
            return state
    }
}

export const getCategoriesAction = (payload) => ({type: GET_CATEGORIES, payload})