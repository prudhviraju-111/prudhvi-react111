import { React, useState, useEffect } from 'react';
import axios from 'axios'

const apiurl = `https://fakestoreapi.com/products`


export default(props) => {

     // State Object Implementation
     var [products,setStateProducts] = useState([]);

     //APi calls by hooks
    useEffect(()=>
    {

      axios.get(apiurl).then( (result)=> setStateProducts(result.data))

    },[])
  
    return(<>
             
     <div className="container p-5">
     <h1 className="text-center h4">Use Effect Hooks for API Calls</h1>
     
        <div className="row">

           {

                products.map((res,i) => 
                {
                 
                  return(<div className="col-lg-3" key={i}>
                    <div className="card" >
                        <img src={res.image} className="card-img-top w-50 mx-auto my-2" style={{ height: '200px' }} alt=" "/>
                           <div className="card-body text-center">
                              <h6 className="card-title">{res.title}</h6>
                              <h5 className="card-title">${res.price}</h5>

                    
                              <p className="card-text">
                                 {res.description.slice(0,30)}
                              </p>
                              <a href="#" className="btn btn-primary">Go somewhere</a>
                           </div>
                    </div>
                  </div>)

               })

           }

        </div>


     </div>


    </>)
 
}
