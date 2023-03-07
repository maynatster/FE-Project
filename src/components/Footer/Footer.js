import './Footer.css'
import insta from '../Images/svg/insta-icon.svg'
import whatsapp from '../Images/svg/whatsapp-icon.svg'

function Footer() {
    return(
        <footer>
            <div className='footer_wrapper'>
                <div className='contacts'>
                    <h2 className='contacts_title'>Contacts</h2>
                    <h2 className='phone_number'>+ 49 40 209494790</h2>
                    <div className='social_media'>
                        <a href="/" className="insta_icon">
                            <img src={insta} alt="insta" className="insta-icon-pic"/>
                            <p className='instagram'>instagram</p>
                        </a>
                        <a href="/" className="whatsapp_icon">
                            <img src={whatsapp} alt="whatsapp" className="whatsapp-icon-pic"/>
                            <p className='whatsapp'>WhatsApp</p>
                        </a>
                    </div>
                </div>
                <div className='address'>
                    <h2 className='address_title'>Address</h2>
                    <h2 className='address_details'>Maldfeldstraße 2A 21077 Hamburg</h2>
                    <h3 className='opening_hours'>Opening hours</h3>
                    <h3 className='opening_hours2'>24 Hours</h3>
                </div>
            </div>
        </footer>
    )
}

export default Footer