export default function Contacts(){

    return(
        <div>
            <form 
            className="my-24"
            action='mailto:taylortread91@gmail.com'

            method="POST"

            encType="text/plain"

            name="contactForm"
            >
            <div className="flex-col items-center text-center">
            <label for='name' >Name:</label>
            <input type='text' id='name' name='name'/><br/>
            
            <label for='message'/> <br/>
            <textarea id='message' rows='6'cols='20'/>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div>
            
           </form>
        </div>
    )
}