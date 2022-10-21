import { React, useState } from 'react'



export default (props) => {

     // State Object Implementation
     var [stateEmail,setStateEmail] = useState("prudhvi@gmail.com")


      // State Object Changes
    let handleStateEmail = () => 
    {
       setStateEmail("prudhviraju@gmail.com");
    }

    return(<>
             
     <div class="container p-5">
     <h1>React Hooks UseState</h1>
      {stateEmail} <br/><br/>
     

      <button onClick={handleStateEmail}>Updata Email</button>


     </div>


    </>)
 
}
