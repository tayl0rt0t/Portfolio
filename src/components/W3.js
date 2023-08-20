import ecard from '../images/ecard.png'
import { Link } from 'react-router-dom'
export default function W3(){

    return(
    <div>
        Here is a sample of a product landing page for Ecards!
        <Link to='https://codesandbox.io/s/cold-cache-xmmsrf' target='blank'>
        <img src={ecard} alt='trebuchet turtle' className='w-64 h-64'/>
        </Link>
    </div>
    )
}