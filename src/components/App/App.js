import Product from "../Product/Product"
import Header from "../Header/Header"
import NotFound from "../NotFound/NotFound"
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Footer from "../Footer/Footer"
import CategoriesList from "../CategoriesList/CategoriesList"
import Category from "../Category/Category"
import "@fontsource/montserrat";
import Banner from "../Home/Banner/Banner"
import Categories from "../Home/Categories/Categories"
import Discount from "../Home/Discount/Discount"
import Promo from "../Home/Promo/Promo"


function App() {

    return(
        <div>
            <Header/>
                <Routes>
                    <Route path="/" element = {<main>
                        <Banner/>
                        <Categories/>
                        <Discount/>
                        <Promo/>
                    </main>}/>
                    <Route path="/categories" element = {<CategoriesList/>}/>             
                    <Route path="/categories/:id" element = {<Category/>}/>
                    <Route path="/products/:id" element = {<Product/>}/>
                    <Route path="*" element = {<NotFound/>}/>
                </Routes>
            <Footer/>
        </div>
    )
}

export default App