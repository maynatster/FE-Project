import Goods from "../Goods/Goods"
import Header from "../Header/Header"
import NotFound from "../NotFound/NotFound"
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Main from "../Main/Main"
import Footer from "../Footer/Footer"
import Categories from "../Categories/Categories"
import Home from "../Home/Home"


function App() {
    return(
        <div>
            <Header/>
            <Router>
                <Routes>
                    <Route path="/main" element = {<Main/>}/>
                    <Route path="*" element = {<NotFound/>}/>
                </Routes>
            </Router>
            {/* <Main/> */}
            <Footer/>
        </div>
    )
}

export default App