// Routing.js-module

import React from "react"
//router_package
 import { BrowserRouter,Route,Switch,Redirect } from "react-router-dom"


 // component_nesting_into_routings

//functional_components
import Header from './MainMenu/Header';
import Footer from './MainMenu/Footer';
import Home from './MainMenu/Home';
import About from './MainMenu/About';
import Services from './MainMenu/Services';
import Contact from './MainMenu/Contact';
import Pagenotfound from "./Pagenotfound";
import ItServices from "./MainMenu/itServices";
import ReactReduxConnection from './MainMenu/ReactReduxConnection'


//class-components

import Myclass from "./Myclass";
import Lifecycle from "./Lifecycle";
import Restapi from "./MainMenu/Restapi";
import View from "./MainMenu/RESTAPI/View";
import Edit from "./MainMenu/RESTAPI/Edit";
import ReactBootstrap from "./MainMenu/ReactBootstrap";
import Signup from "./MainMenu/Signup";


//React Hook
import Hooksuser from "./HooksAPI/hooksUser";
import ReactHooks from './MainMenu/useStateHooks'
import ReactEffect from './MainMenu/useEffectHooks'
import pagination from './MainMenu/pagination'

import HooksView from "./HooksAPI/hooksView";

import HooksEdit from "./HooksAPI/hooksEdit"
import hooksSigup from "./HooksAPI/hooksSigup"
import HooksRedux from "./HooksRedux/HooksRedux"
//Create Home ComponentshooskRedux
function Routings()
{
  
  return  (<BrowserRouter>

          {/*Navber links*/}     {/*import empReducer from '../reducers/EmpReducer'*/}

             <Header />

         {/*Navber links*/}

      <Switch>
 

        {/*<load home component as Default  page  of the project/>*/} 

        <Route exact path="/" component={Home} />
        
        {/*<Home />*/}
        <Route path="/home" component={Home} />
        
         {/*<About />*/}
        <Route path="/about" component={About} />
         
         {/*<Services/>*/}
         <Route path="/services" component={Services} />

        {/*<Contact />*/}
        <Route exact path="/Contact" component={ Contact } />

         {/*<Services/>*/}
         <Route path="/Pagenotfound" component={Pagenotfound} />
         
         {/*<ItServices />*/}
        <Route path="/ItServices" component={ItServices} />

         {/*<Myclass />*/}
         <Route path="/myclass" component={Myclass} />
        
         {/*<Lifecycle />*/}
        <Route path="/lifecycle" component={Lifecycle} />
      
          {/*<Restapi />*/}
          <Route exact path="/restapi" component={Restapi} />

           {/*<Signup />*/}

          <Route path="/Signup" component={Signup} />

           {/*<view /> with router parameter*/}
           <Route exact path="/restapi/View/:idno" component={View} />

           {/*<>Edit*/}
          <Route exact path="/restapi/Edit/:idno" component={Edit} />
           
        

           {/*<hooks />*/}
           <Route exact path="/ReactHooks" component={ReactHooks} />

          {/*<ReactEffect />*/}
          <Route exact path="/ReactEffect" component={ReactEffect} />

         

         {/*<ReactReduxConnection/>*/}

         <Route path="/rcc" component={ReactReduxConnection}/>

         {/*< pagination/>*/}

         <Route path="/pagination" component={pagination}/>


          {/*< pagination/>*/}

         <Route exact path="/hooksUser" component={ Hooksuser }/>
         <Route path="/hooksUser/View/:idno" component={ HooksView }/>
         <Route path="/hooksUser/Edit/:idno" component={ HooksEdit }/>
         
         {/*hooksSigup */}
         <Route path="/hooksSigup" component={ hooksSigup }/>

         {/*hooskRedux */}
         <Route path="/HooksRedux" component={ HooksRedux }/>

        

         



          {/*<ReactBootstrap />*/}
          <Route exact path="/ReactBootstrap" component={ReactBootstrap} />
       
         {/*< auto Reditect to home component if invalid path from url adders />*/}
          <Redirect to="home"/>

        {/*<Pagenotfound />*/}
        <Route component={Pagenotfound} />

        </Switch>

   {/*Footer section*/}

      <Footer />

   {/*Footer section*/}
  
  </BrowserRouter>)
  
}

export default Routings;