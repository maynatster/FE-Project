import './Header.css'

function Header() {
    return(
        <header className='header_wrapper'>
            <div className="header_logo">
                <a href="/" className="header_logo-link">
                    <img src="./img/svg/header_logo.svg" alt="Logo" className="header_logo-pic"/>
                </a>
            </div>
            <button type="submit" className="header_button">Catalogue</button>
            <nav className="header_nav">
                <ul className='header_list'>
                    <li className="header_list_item">
                        <a href='/categories' className='header_link'>Categories</a>
                    </li>
                    <li className="header_list_item">
                        <a href='/coupon' className='header_link'>Coupon</a>
                    </li>
                    <li className="header_list_item">
                        <a href='/promo'className='header_link'>Promo</a>
                    </li>
                    <li className="header_list_item">
                        <a href='/contacts'className='header_link'>Contacts</a>
                    </li>
                    <li className="header_list_item">
                        <a href='/bag_icon'>
                            <img src="./img/svg/icon-shopping_bag.svg" alt="Icon" className="header_shopping-bag"/>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header