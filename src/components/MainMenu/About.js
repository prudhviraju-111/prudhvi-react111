// About.js-module

import React from "react"

import thapapic from "../../assets/images/4.jpg"



//Create Home Component

function About()
{
  
  return(

    <>
    <div className="container-fluid" style={{ backgroundcolor: '#AAE714'}}>
    <div className="container emp-profile "style={{ backgroundcolor: '#AAE714'}} >
      <form method="">
        <div className="row">
          <div className="col-md-4">
            <img src={thapapic} alt="thapa" srcset=""/>

          </div>

          <div className="col-md-6">
            
            <div className="profile-head">

              <h5>MS Dhoni </h5>
              <h6>Indian cricketer</h6>
              <p classNameName="profile-rating mt-3 mb-5">RANKINGS: <span></span>1/10</p>
              
                <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                          <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">Active</a>
                      </li>

                      <li className="nav-item">
                          <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Timeline</a>
                      </li>
                </ul>

            </div>
            
          </div>

          <div className="col-md-2">
                
            <input type="submit" className="profile-edit-bth"  name="bthAddMore" value="Edit profile" />

          </div>

          <div className="row">
                {/*left side url*/}
                <div className="col-md-4">
                  <div className="profile-work">
                  <p>Mahendra Singh Dhoni </p>
                  <p>Indian former professional cricketer</p>
                  <p>Born: 7 July 1981 (age 41)</p>
                  <p>Nickname: Mahi, Captain Cool, Thala</p>
                  <p>Relations: Sakshi Dhoni ​(m. 2010)​</p>
                  <p>Wife	:Sakshi Dhoni</p>
                  </div>
                    
                </div>


                {/*right side data toogle*/}

                <div className="col-md-8 pl-5 about-info">
                  <div className= "tab-content profile-tab" id="myTabContent">

                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                      <div className="row mt-9">
                        <div className="col-md-6">
                          <label htmlFor="User Id">
                          India also won ICC Test Championship Mace two times in 2010,
                           2011 and ICC ODI Shield for one time in 2013 under his 
                           leadership. He is considered as one of the greatest Captains and Wicket Keeper Batsman of all time. Throughout his 15 year long international career, Dhoni has won several awards and accolades.
                          </label>
                        </div>
                       </div>
                    </div>

                    
                     
                  </div>

                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                      <div className="row ">
                        <div className="col-md-6">
                          <label>
                          <p>Dhoni is the only captain who wins all ICC trophies. 
                          India won 2007 ICC World Twenty 20, Asia cup in 2010 and 2016, 
                          2011 ICC Cricket World Cup and 2013 ICC Champions Trophy under his captaincy.
                          He is a right-handed middle-order batsman and wicket-kipper.</p>
                          </label>
                        </div>
                       </div>
                    </div>
                     
                  

                </div>

          </div>
        </div>
      </form>
  </div>        
     
</div>
</>)
  

}

export default About;