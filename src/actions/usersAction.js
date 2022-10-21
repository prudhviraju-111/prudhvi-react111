import axios from "axios";


const url="http://localhost:3003/user";
export default function usersAction() 
{

    return({

        type: 'UsersAction',

        payload: axios.get(url).then( (result)=> result.data )
    })
}