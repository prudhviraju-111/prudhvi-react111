import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

var idno

export default class Edit extends Component {

    constructor(props) {
        super(props)
        this.state = 
        {
            name: '',
            email: '',
            phone: '',
            txtConformation: ''
        }
    }
     //name-input-text-box
     unameHandling = (e) =>
     {
       this.setState({ name: e.target.value })
     }
  
   //Email-input-text-box
    emailHandling = (e) =>
     {
       this.setState({ email: e.target.value })
     }
  
    //Phone-input-text-box
    phoneHandling = (e) =>
     {
       this.setState({ phone: e.target.value })
     }
    

     submitHandler = (e) => 
      {

     e.preventDefault();

     var FormData=
     {
        'name':this.state.name,
        'email':this.state.email,
        'phone':this.state.phone
     }
     
   
     axios.put(`http://localhost:3003/user/${idno}`,FormData)
     .then(() => {
      // window.alert("....CREATED....");
       this.props.history.push('/restapi') 
       });


    }


    render() {

        idno = this.props.match.params.idno

        //this.props->history, location, match
        console.log(idno)

       //Destructuring....
       var {name,email,phone,txtConformation}=this.state

        return (<>

            <div className="container p-5">
                <h2>EDIT COMPONENT PAGE</h2>

                <form onSubmit={this.submitHandler.bind(this)}>

                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" 
                        value={name} 
                        onChange={this.unameHandling.bind(this)}/>

                    </div>


                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control" 
                        value={email}
                        onChange={this.emailHandling.bind(this)} />

                    </div>


                    <div className="mb-3">
                        <label className="form-label">Mobile No</label>
                        <input type="number" className="form-control"
                         value={phone} 
                         onChange={this.phoneHandling.bind(this)}/>

                    </div>
                    <div>
                        <Link className="btn btn-success mx-2" to="/restapi">GOTO BACK</Link>
                        <button type="submit" className="btn btn-warning text-white" value="update">Update</button>
                    </div>
                    
                    <p className="text-primary">{txtConformation}</p>

                </form>


            </div>

        </>)

    }
    
    componentDidMount()
    {
        const url=`http://localhost:3003/user/${idno}`
        axios.get(url).then((result) => this.setState(result.data));
    } 
    


}