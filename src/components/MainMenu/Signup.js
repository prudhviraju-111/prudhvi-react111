import React, { Component } from "react";

import axios from 'axios';
const url=`http://localhost:3003/user`

export default class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = 
        {
            uname:'',
            email:'',
            phone:'',
            txtConformation:''

        }
    }

    unameHandling = (e) =>
    {
        this.setState({uname:e.target.value })
    }

    emailHandling = (e) =>
    {
        this.setState({email:e.target.value })
    }
    phoneHandling = (e) =>
    {
        this.setState({phone:e.target.value })
    }

    submitHandler = (e) =>
    {
        e.preventDefault();
        var FormData=
        {
            'name':this.state.uname,
            'email':this.state.email,
            'phone':this.state.phone
        }
        alert( JSON.stringify(FormData));
        /**
        axios.post(url, FormData)
        .then(()=>window.alert("...Created..."))
        .catch(()=> window.alert("...Error..."));
         */
        /**
        axios.post(url, FormData)
        .then(()=>this.setState({ txtConformation:'Account Created' }))
        .catch(()=> this.setState({ txtConformation:'Account Failed' }));
         */
        
        axios.post(url, FormData)
        .then(()=> {
            //window.alert("...Created...")
            this.props.history.push('/restapi')
        });
       
    }

    render() 
    {
        console.log(this.props)
        var {uname,email,phone,txtConformation }=this.state

        return (<>

            <div className="container p-5">
                <h3 className="py-3 text-center">User Registration Form</h3>
                <div className="container w-50">
                    <form onSubmit={this.submitHandler.bind(this)}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" 
                            value={uname}
                            onChange={  this.unameHandling.bind(this) } />
                            
                        </div>
                       
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" 
                            value={email}
                            onChange={  this.emailHandling.bind(this) }/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input type="number" className="form-control"
                            value={phone}
                            onChange={  this.phoneHandling.bind(this) }/> 
                        </div>
                        
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">Create Account</button>
                            
                        </div>
                        <p className="text-primary">{txtConformation}</p>
                    </form>
                </div>
            </div>

        </>)

    }

}