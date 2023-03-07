import './Banner.css'
import banner_pic from '../../Images/svg/banner_pic.svg'

function Banner() {
    return(
        <div className="banner">
            <h1 className='banner_title'>New season</h1>
            <h1 className='banner_title2'>sales</h1>
            <button type="submit" className="banner_button1">All promo actions</button>
            <button type="submit" className="banner_button2">Details</button>
            <img src={banner_pic} alt='banner' className='banner_pic'/>
        </div>
    )
}

export default Banner