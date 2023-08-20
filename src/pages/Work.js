import W1 from "../components/W1"
import W2 from "../components/W2"
import W3 from "../components/W3"
export default function Work(){

    return(
        <div>
        <h1>Here is a small sample of things I've built!</h1>
        <div className="flex flex-wrap justify-center basis-auto">
        <div><W1/></div>
        <div><W2/></div>
        <div><W3/></div>
        </div>
        </div>
    )
}