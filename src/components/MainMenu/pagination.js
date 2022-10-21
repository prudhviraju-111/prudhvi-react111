import { React, useState, useEffect } from 'react';
import axios from 'axios'
import Pager from './Pager'


const apiurl = `https://jsonplaceholder.typicode.com/posts`

export default(props) => {

     // State Object Implementation

     var [posts,setStatePosts] = useState([]);

     //select maxposts per action

     var [DefaultmaxDisplayposts] = useState(8);

     //firstButton number

     var [DefaultButton,SetStateDefaultButton] = useState(8);

  
     //Lastindex

     var lastindex = DefaultButton * DefaultmaxDisplayposts 
     var FirstIndex = lastindex - DefaultmaxDisplayposts 

     //var DisplayDefaultButtonPosts=posts.slice(FirstIndex,lastindex)
     //APi calls by hooks

    useEffect(() =>
    {

      axios.get(apiurl).then( (result)=> setStatePosts(result.data))

    },[])

   var DisplayDefaultButtonPosts = posts.slice(FirstIndex, lastindex)

    //total-posts from api

    var totalPosts = posts.length

    let handleButtonNumberChanges = (btnNumber) => 
    {
      SetStateDefaultButton(btnNumber)    
    }
  
    return(<>
             
     <div className="container py-1">
     
     
     <br /><br />

      <Pager  
      totalpostsInAPI={totalPosts} 
      maxDisplayrecordsPerButton={DefaultmaxDisplayposts}
      getButtonNumber={ (bno) =>handleButtonNumberChanges(bno)}
      />
      
      <br /><br />
           {

        DisplayDefaultButtonPosts.map((res,i) => 
                {
                 
                  return(<ul key={i}>
                    
                     <li>

                       <h4>{res.id}.{res.title}</h4>
                        <p>{res.body}</p>
                     </li>


                  </ul>)

               })

           }

        


     </div>


    </>)
 
}
