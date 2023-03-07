import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { baseUrl } from "../.."
import { fetchCategoriesList } from "../../asyncActions/categoriesFetch"
import { fetchProductsList } from "../../asyncActions/products"
import { Link } from 'react-router-dom'
import './Category.css'

function Category() {
    const {id} = useParams()
    const products = useSelector(store => store.productsList.productsList)
    const category = useSelector(store => store.categoriesList.categoriesList).find(elem => elem.id === id)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProductsList(id))
        dispatch(fetchCategoriesList())

    }, [dispatch, id])
    return(
        <div>
            <h1>{(id !== 'all') ? category?.title : 'All products'} Category title</h1>
            <div className="price_sorting"></div>
            <div className="category_wrapper">
                {products.map(elem =>
                    <div key={elem.id}>
                        <img width={318} height={276} alt={''} src={baseUrl + elem.image}/> 
                        <p>{elem.price}</p>
                        <p>{elem.discont_price}</p>
                        <Link to={`/products/${elem.id}`}>
                        <p>{elem.title}</p>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Category