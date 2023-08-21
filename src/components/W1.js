import space from '../images/space.png'
import { Link } from 'react-router-dom'
export default function W1(){

    return(
        <div className='shadow-2xl shadow-pink-600 border-2	pb-6 rounded-xl'  >
            <div className='max-w-sm font-bold text-xl mb-2 pb-2 content-center'>
            <p>Earth needs your help! Click here to fight the alien invaders!</p>
            </div> 
            <Link to = 'https://tayl0rt0t.github.io/MOD1_SpaceInvaders/' target='blank' >
            <img src={space} alt='play space invaders' className='w-64 h-64 max-w-sm overflow-hidden rounded-xl mx-auto'/>
            
            </Link>

        </div>
    )
}
