 //Services.js-Module
import React from 'react'

//profile photo 

import Profile from './../../assets/images/1.jpg'

//background wallpapers

import wallpaper from './../../assets/images/2.jpg'

var styles={
  backgroundImage: `url(${wallpaper})`,
  backgroundRepeat: 'no-repeat',
  backgroundSiz: 'cover',


}


//Create Services Component

function Home()
{

 
  return(
    <>
  <div className="jumbotron text-white" style={styles}>
    <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <h1 className="h1 pt-5 mt-5">MS Dhoni Indian cricketer</h1>

        <h5 className="bg-success p-2 mt-3 w-75 text-center">Mahendra Singh Dhoni is an Indian former professional cricketer </h5>
      </div>

       <div className="col-lg-6">
           <img src ={ Profile } className="w-30 mx auto img-thumbnail" alt="images" />
       </div>
    </div>


    </div>
  </div>
</>
  )
    // return("This is Functional Component")
}

export default Home;