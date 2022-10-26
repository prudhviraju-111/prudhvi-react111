import React from "react"

// Nested component
import WebApplicationService from './IT-SERVICES/WebApplicationService';
import MoblieApplicationService from "./IT-SERVICES/MoblieApplicationService";


//import External local JSON data into component
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'


function ItServices()
{
    return (<>
         
<BrowserRouter>
    <div class="container-fluid">
               <h2>IT SERVICES</h2>
               <p>IT services refers to the application of business and technical expertise to enable organizations in the creation, management and optimization of or access

                </p>
       <div>
        <div class="coontainer my-5">
           <div class="row">
            
              <div class="col-lg-3">
              <ul class="list-group ">
                 <li class="list-group-item">
                    <Link to="/itservices/webApp">WebApplicationService</Link>
                 </li>
                 <li class="list-group-item">
                    <Link to="/itservices/mobileApp">moblieApplicationService</Link>
                 </li>
                 <li class="list-group-item">
                    <Link to="/itservices/uxuiApp">UX-UIDesignService</Link>
                 </li>
                 <li class="list-group-item">
                    <Link to="/itservices/support">ProjectSupportService</Link>
                 </li>
            </ul>
            
               {/* LEFT_COLUMN*/}
              </div>

              <div class="col-lg-9">
               {/* NESTED ROUTER*/}

                
                <Switch>
                  <Route exact path="/itservices" component={WebApplicationService} />
                  <Route path="/itservices/webApp" component={WebApplicationService} />
                  <Route path="/itservices/mobileApp" component={MoblieApplicationService} />
                  <Route path="/itservices/uxuiApp" render={()=>"UXUIDesignService"}/>

                  <Route path="/itservices/support"  render={()=>"This is ProjectSupportService"} />
                  
                </Switch>


                {/* NESTED ROUTER*/}
              </div>
          </div> 
      </div>    
      </div>
    </div>
    
</BrowserRouter>
    </>)}
export default ItServices;
