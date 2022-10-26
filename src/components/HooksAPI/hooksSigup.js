import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom'
const url = `http://localhost:3003/user`

export default (props) => {
   
  
  var [userData, setStateUserData] = useState({
       name: '',
       email: '',
       phone: '',
       txtConformation: ''
    })
   
      //Destructuring....
      var { name,email,phone,txtConformation} = userData;
   /*
   //name-input-text-box
     unameHandling = (e) =>
      {
        this.setState({ uname: e.target.value })
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
     */

   let fromDataHanding = (e) =>{
         
    setStateUserData({...userData, [e.target.name]: e.target.value });
   }


   let submitHandler = (e) => 
   {

    e.preventDefault();

      var FormData=
      {
         name: `${userData.name}`,
         email: `${userData.email}`,
         phone: `${userData.phone}`
      }
      

 

      axios.post(url,FormData)
      .then(() => {
       // window.alert("....CREATED....");
        props.history.push('/hooksuser') 
    });



   }
   
   
        return (<>
            <div className="container p-3">

              <h4 className='py-3 text-center'>Registration Form</h4>
             
             <div className="container w-50">

             <form onSubmit={submitHandler.bind(this)}>

                <div className="mb-3">
                  <label className="form-label">Name</label>
                   <input type="text" className="form-control" 
                   value={name}  name="name"
                   onChange={fromDataHanding.bind(this)}/>
                
                </div>

               
                <div className="mb-3">
                  <label className="form-label">Email</label>
                   <input type="email" className="form-control"
                   value={email} name="email"
                   onChange={fromDataHanding.bind(this)}/>
                </div>



                <div className="mb-3">
                  <label class="form-label">Phone</label>
                   <input type="number" className="form-control"
                    value={phone} name="phone"
                    onChange={ fromDataHanding.bind(this)}/>
                </div>

                <div className="mb-3">
                  
                   <button type="submit" className="btn btn-primary">CREATE ACCONT</button>
                </div>
                   
                <p className="text-primary">{txtConformation}</p>

             </form>

             </div>

            </div>
            </>)
    }
