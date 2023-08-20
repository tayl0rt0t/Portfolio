import treb from '../images/treb.png'
import { Link } from 'react-router-dom'
export default function W2(){

    return(
    <div>
        How far can you fling the turtle? Turtle loves to fly through the air and use obstacles to get more air time!
        <Link to='https://gd.games/t4yl0rt0t/trebuchet-turtle' target='blank'>
        <img src={treb} alt='trebuchet turtle'className='w-64 h-64'/>
        </Link>
    </div>
    )
}