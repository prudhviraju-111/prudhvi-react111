import React, { useState, useEffect } from "react"
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

//go
var idno;


export default (props) =>
{
    var [userData,setStateuserData]=useState({
        id:'',
        name:'',
        email:'',
        phone:''

    });
    let {idno }=useParams();
    let { id, name, email, phone }= userData

    useEffect(()=>
    {    
        const url =`http://localhost:3003/user/${idno}`
        axios.get( url ).then( (result) => setStateuserData (result.data))
    },[])
    

        return (<>
            
            <div className="container-fluid  p-5 bg-success">
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
                <Link className="btn btn-dark" to="/hooksUser">GO BACK</Link>
             </div> 
            </>)
   
}