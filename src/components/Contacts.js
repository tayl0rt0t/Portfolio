export default function Contacts(){

    return(
        <div className="border-2 border-pink-600 w-1/3 mx-auto rounded-xl shadow-2xl shadow-pink-600">
            <form 
            className="my-24"
            action='mailto:taylortread91@gmail.com'

            method="POST"

            encType="text/plain"

            name="contactForm"
            
            >
            <div className="flex-col items-center text-center">
            
            <label for='name' >Name:</label>
            <input type='text' id='name' name='name' className="border border-pink-600  mx-auto mr-20  ml-8 w-44 bg-transparent"/><br/>
            
            <label for='message'/>  <br/>
            <div className="">
            <p className="mx-auto">Message:</p>
            <textarea id='message'  className=" w-44 border border-pink-600 mx-auto inline bg-transparent"/>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">Submit</button>
            </div>
            
           </form>
        </div>
    )
}