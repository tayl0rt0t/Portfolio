import W1 from "../components/W1"
import W2 from "../components/W2"
import W3 from "../components/W3"
export default function Work(){

    return(
        <div className="text-center">
        <h1  className="mx-auto text-xl font-semibold my-8">Here is a small sample of things I've built!</h1>
        <div className=" container  mx-auto w-2/3 flex justify-center mt-52 md:justify-end ">
        <div className="grid grid-cols-3  text-center mt-8 gap-12">
        <div ><W1/></div>
        <div ><W2/></div>
        <div ><W3/></div>
        </div>
        </div>
        </div>
    )
}