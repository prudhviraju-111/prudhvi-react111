import React, { Component } from 'react'

class Lifecycle extends Component {

    //constructor_is_MOUNTing_method 

    constructor(props)
    {
        super(props);
        this.state = {}
        console.log(`constructor_is_MOUNTing_method`)
    }

    
    componentWillUnmount()
    {
        console.log(`constructor_is_MOUNTing_method`)
  
    }
    //RESTAPI CALL
componentDidMount()
{
   console.log(`Render_is_Mounting_method`)
}


    
    //render_is_MOUNTing_method 

    render(){

        console.log(`Render_is_MOUNTing_method`)

        return(<>
            <div className="p-5 text-center">

                <h2>REACT CLASS COMPONENT LIFE CYCLE PROCESS </h2>

            </div>
        </>)
 

}

}



export default Lifecycle