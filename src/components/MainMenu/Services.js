import React from "react"

// icons


//import External local JSON data into component

import ServiceData from './../../assets/json/Services.json'


function Services()
{
    return (
        <>
         <div className="container-fluid" style={{backgroundColor:'#12151c'}}>
           <div className="container p-5 text-center">
            <h1 className="pt-2 pb-5 text-center text-white"> SERVICES</h1>
            <div className="row">

              
                {
                    ServiceData.map((data,i)=>{
                       return(
                        <div className="col-lg-4" key={i}>
                    <div className="card text-center text-white p-3" style={{backgroundColor:'#12151c'}}>
                        <div className="card-body">
                            <p className="text-center">
                            </p>
                        </div>
                        <div className="card-body">
                          <h3 className="py-3">{data.title}</h3>
                          <p className="text-justify">{data.description}</p>

                        </div>
                    </div>
                </div>
                       ) 
                    })
                }

              {/*
                <div className="col-lg-4">
                    <div className="card text-center text-white p-3" style={{backgroundColor:'#12151c'}}>
                        <i className="fab fa-abode text-weight-bold text-success"></i>
                        <div className="card-body">
                            <h3 className="py-3">HISTORY ENTRIES</h3>
                            <p className="text-justify">
                            The committed headed by former lawmaker Baijayant Panda includes Col. (Retd) Rajyavardhan Singh Rathore, 
                            Rajya Sabha member Vinay Sahasrabuddhe, 
                            Principal Economic Advisor in the Finance Ministry Sanjeev Sanyal and Jamia Millia Islamia Vice Chancellor Najma Akhtar. 
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card text-center text-white p-3" style={{backgroundColor:'#12151c'}}>
                        <i className="fab fa-abode text-weight-bold text-success"></i>
                        <div className="card-body">
                            <h3 className="py-3">CAREER</h3>
                            <p className="text-justify">
                            Dhoni’s inclusion in the high-level panel came days after he was appointed mentor for India’s T20 World Cup team. 
                            The former India captain is a Lieutenant Colonel (Honorary) in the Indian Army. The defence 
                            ministry said the committee has been constituted for a comprehensive review of the NCC in order to make it more relevant in changing times.
                            </p>
                        </div>
                    </div>
                </div>
                */}
            </div>
            </div>
            </div>

    </>
    )
}
export default Services;
