import './Discount.css'
import gnome from '../../Images/svg/gnome.svg'

function Discount() {
    return(
        <div className='discount_wrapper'>
            <img src={gnome} alt='gnome' className='gnome_pic'/>
            <div className='discount_input_wrapper'>
                <h2 className='discount_title'>5 % Discount</h2>
                <h2 className='discount_title2'>for first order</h2>
                <input type='phone' placeholder='+49' className='input_phone'></input>
                <button type='button' className='discount_button'>Get discount</button>
            </div>
        </div>
    )
}

export default Discount