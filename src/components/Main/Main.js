import './Main.css'
import { Link, useNavigate } from 'react-router-dom'


function Main() {

    let navigate = useNavigate()
    let forwardsite = () => navigate(1)

    return(
        <main>
            <div className="banner">
                <h1>New season sales</h1>
                <button type="button" className="banner_button1">All promo actions</button>
                <button type="button" className="banner_button2">Details</button>
            </div>
            <div className='subtitle_categories'>
            <h2>Categories</h2>
            <button type="button" className="subtitle_button" onClick={()=> forwardsite()}>All categories</button>
            <div>
                <Link to={`categories`}>
                    Categories
                </Link>
            </div>
            </div>
            <div className='categories-fotos'>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>
            <div className='discount'>
                <h2>5 % discount for first order</h2>
                <input type='number'></input>
                <button type='button' className='discount_button'>Get discount</button>
            </div>
            <h2>Promo actions</h2>
            <div className='promo_actions-fotos'>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>

        </main>
    )
}

export default Main