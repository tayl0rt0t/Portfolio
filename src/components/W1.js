import space from '../images/space.png'
import { Link } from 'react-router-dom'
export default function W1(){

    return(
        <div>
            Earth needs your help! Click here to fight the alien invaders!
            <Link to = 'https://tayl0rt0t.github.io/MOD1_SpaceInvaders/' target='blank' >
            <img src={space} alt='play space invaders' className='w-64 h-64'/>
            </Link>

        </div>
    )
}
