import React from 'react'

//global varibales



class Myclass extends React.Component {


    
    //class properties
     id=1001;
     email="abhi@gmail.com"



    //constructor

    constructor(props)
    {
       super(props);

       //step-1 state Object Initialization

       this.state=
       {
          email: 'abhi@gmail.com',
          phone: 9453116565
       }
    }

    stateChanges=() =>
    {
        this.setState({ 

            email:'prudhvi@gmail.com',
            phone: 9473892098 
        })
    }

     // prepare the component input
    render()
    {

           return(<>
        
          <div className="container p-5">

          <h1>REACT CLASS COMPONENT& STATE & EVENTS</h1>
              
              {/* step-2 Access state object peoperties from jsx*/}
            <p>Email is: {this.state.email} </p>
             <br /> 
            
             <p>Phone is: {this.state.phone}</p>
             
             {/* step:3 change state object Data by setstate() */}
            
            <button onClick={ ()=>this.setState({email:'prudhvi@gmail.com' }) }>Change My Email</button>
             <br />
              {/* step:3 change state object Data by setstate() */}
              <br /><br />
            <button onClick={ ()=>this.setState({ phone: 9841654689 }) }>Change My Phone No</button>
            <br />
            <br />
            <button onClick={ ()=>this.stateChanges()}>update all state properties</button>




          </div>

           </>);

    }
}

export default Myclass