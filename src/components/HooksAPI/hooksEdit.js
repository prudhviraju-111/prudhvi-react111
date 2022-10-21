import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link , useParams } from 'react-router-dom';


let url =`http://localhost:3003/user/`

export default () => {

  var [userData, setStateUserData] = useState({
            uname: '',
            email: '',
            phone: '',
            txtConformation: ''
        });


  //get
  let idno = useParams();



  
 useEffect (()=>
         {
             axios.get(`${url}/${idno}`).then( (result)=> setStateUserData(result.data));
         },);

//Destructuring....
       var {name,email,phone,txtConformation} = userData

let fromDataHanding = (e) =>{
         
          setStateUserData({...userData, [e.target.uname]: e.target.value });
               
        }

let  submitHandler = (e) => 
      {
  
  e.preventDefault();

     var FormData=
     {
      uname: `${userData.uname}`,
      email: `${userData.email}`,
      phone: `${userData.phone}`
     }
     
   
     axios.put(`{url}/${idno}`,FormData)
     .then(() => {
      // window.alert("....CREATED....");
       this.props.history.push('/restapi') 
       });


      }

        return (<>

            <div className="container p-5">
                <h2>EDIT COMPONENT PAGE</h2>

                <form onSubmit={submitHandler.bind(this)}>

                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" 
                        value={name} uname="uname"
                        onChange={fromDataHanding .bind(this)}/>

                    </div>


                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control" 
                        value={email} uname="email"
                        onChange={fromDataHanding .bind(this)} />

                    </div>


                    <div className="mb-3">
                        <label className="form-label">Mobile No</label>
                        <input type="number" className="form-control"
                         value={phone} uname="phone"
                         onChange={fromDataHanding .bind(this)}/>

                    </div>
                    <div>
                        <Link className="btn btn-success mx-2" to="/hooksUser">GOTO BACK</Link>
                        <button type="submit" className="btn btn-warning text-white" value="update">Update</button>
                    </div>
                    
                    <p className="text-primary">{txtConformation}</p>

                </form>


            </div>

        </>)

    }
    
    


