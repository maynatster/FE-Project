import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { baseUrl } from "../.."
import { fetchCategoriesList } from "../../asyncActions/categoriesFetch"
import { fetchProductsList } from "../../asyncActions/products"
import { Link } from 'react-router-dom'

function Category() {
    const {id} = useParams()
    const products = useSelector(store => store.productsList.productsList)
    const category = useSelector(store => store.categoriesList.categoriesList).find(elem => elem.id === id)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProductsList(id))
        dispatch(fetchCategoriesList())

    }, [])
    return(
        <div>
            <h1>{(id != 'all') ? category?.title : 'All products'}</h1>
            {products.map(elem =>
                <div key={elem.id}>
                    <img width={150} height={150} src={baseUrl + elem.image}/> 
                    <Link to={`/products/${elem.id}`}>
                    <p>{elem.title}</p>
                    </Link>
                    <p>{elem.price}</p>
                </div>
            )}
        </div>
    )
}

export default Category