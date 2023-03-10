import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import { fetchCategoriesList } from "../../asyncActions/categoriesFetch"
import { baseUrl } from '../..'
import { Link } from 'react-router-dom'
import './CategoriesList.css'

function CategoriesList() {
    const categories = useSelector(store => store.categoriesList.categoriesList)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategoriesList())
    }, [dispatch])


    return(
        <div>
            <h2 className='categories-subtitle'>Categories</h2>
            <div className='categories_wrapper'>
                {categories.map(elem =>
                <Link className='categories_link-style' key={elem.id} to={`/categories/${elem.id}`}>
                    <div className='categories_wrapper-pics'>
                        <img width={318} height={350} alt={''} src={baseUrl + elem.image}/>    
                        <p className='categories_link'>{elem.title}</p>
                    </div>
                </Link>
                )}
            </div>
        </div>
    )
}

export default CategoriesList