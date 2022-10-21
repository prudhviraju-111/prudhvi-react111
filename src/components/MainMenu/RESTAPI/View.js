import React, { Component } from "react"
import axios from 'axios';
import { Link } from 'react-router-dom';
var idno;


export default class View extends Component
{
    constructor(props)
    {
        super(props)
        this.state ={
               // viewdata: {}
        }
    }
    render()
    {
        idno=this.props.match.params.idno
        console.log(idno)
        var { id, name, email, phone } =this.state
        return (<>
            
            <div className="container  p-5 ">
                <h2>VIEW COMPONENT PAGE</h2>
                <p className="fs-5">
                    {idno}
               
                </p>
                <ul className="fs-4">
                    <li>{id}</li>
                    <li>{name}</li>
                    <li>{email}</li>
                    <li>{phone}</li>
                </ul>
                <Link className="btn btn-dark" to="/restapi">GO BACK</Link>
             </div> 
            </>)
    }
    componentDidMount()
    {
        const url=`http://localhost:3003/user/${idno}`
        axios.get(url).then( (result)=> this.setState(result.data));
    }
}