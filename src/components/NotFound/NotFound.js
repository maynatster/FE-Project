import './NotFound.css'
import not_found from '../Images/png/not_found.png'

function NotFound () {
    return(
        <div className='not_found-page'> 
            <img src={not_found} alt='not_found' className='not_found-pic'/>
        </div>
    )
}

export default NotFound