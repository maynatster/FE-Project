import './Categories.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchCategoriesList } from '../../../asyncActions/categoriesFetch'
import { baseUrl } from '../../..'

function Categories() {
    const categories = useSelector(store => store.categoriesList.categoriesList)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategoriesList())
    }, [dispatch])

    let navigate = useNavigate()

    return(
        <div>
            <div className='subtitle_categories'>
                <h2 className='subtitle_categories-black'>Categories</h2>
                <button type="button" className="subtitle_button" onClick={()=> navigate('categories')}>All categories</button>
            </div>
            
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

export default Categories