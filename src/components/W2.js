import treb from '../images/treb.png'
import { Link } from 'react-router-dom'
export default function W2(){

    return(
    <div className='shadow-2xl shadow-pink-600 border-2	pb-6 rounded-xl'>
        <div className='max-w-xs font-bold text-xl mb-2 mx-auto '>
        How far can you fling the turtle? Fly through the air and use obstacles to get more air time!
        </div>
        <Link to='https://gd.games/t4yl0rt0t/trebuchet-turtle' target='blank'>
        <img src={treb} alt='trebuchet turtle'className='w-64 h-64 max-w-sm overflow-hidden mx-auto rounded-xl'/>
        </Link>
    </div>
    )
}