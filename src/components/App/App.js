import Product from "../Product/Product"
import Header from "../Header/Header"
import NotFound from "../NotFound/NotFound"
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Main from "../Main/Main"
import Footer from "../Footer/Footer"
import CategoriesList from "../CategoriesList/CategoriesList"
import Category from "../Category/Category"

function App() {

    return(
        <div>
            <Header/>
                <Routes>
                    <Route path="/" element = {<Main/>}/>
                    <Route path="/categories" element = {<CategoriesList/>}/>             
                    <Route path="/categories/:id" element = {<Category/>}/>
                    <Route path="/products/:id" element = {<div>Product profile</div>}/>
                </Routes>
            <Footer/>
        </div>
    )
}

export default App