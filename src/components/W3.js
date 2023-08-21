import ecard from '../images/ecard.png'
import { Link } from 'react-router-dom'
export default function W3(){

    return(
    <div className='shadow-2xl shadow-pink-600 border-2	pb-6 rounded-xl text-center'>
        <div className='font-bold text-xl mb-2 max-w-xs text-center mx-auto'>
        <p className='flex justify-center mx-auto'>Here is a sample of a product landing page for Ecards!</p>
        </div>
        <Link to='https://codesandbox.io/s/cold-cache-xmmsrf' target='blank'>
        <img src={ecard} alt='trebuchet turtle' className='w-64 h-64 mx-auto rounded-xl
         '/>
        </Link>
    </div>
    )
}