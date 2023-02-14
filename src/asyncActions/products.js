import { baseUrl } from ".."
import { getProductsAction } from "../store/productsListReducer"

export const fetchProductsList = (id) => {
    return function (dispatch){
        fetch(baseUrl + ((id !== 'all') ? `/categories/${id}` : `/products/all`))
            .then(res => res.json())
            .then(data => dispatch(getProductsAction(data)))
    }
}