import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import { fetchCategoriesList } from "../../asyncActions/categoriesFetch"
import { baseUrl } from '../..'
import { Link } from 'react-router-dom'

function CategoriesList() {
    const categories = useSelector(store => store.categoriesList.categoriesList)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategoriesList())
    }, [])


    return(
        <div>
            {categories.map(elem =>
            <Link key={elem.id} to={`/categories/${elem.id}`}>
                <div >
                    <img width={150} height={150} alt={''}src={baseUrl + elem.image}/>    
                    <p>{elem.title}</p>
                </div>
            </Link>
            )}
        </div>
    )
}

export default CategoriesList