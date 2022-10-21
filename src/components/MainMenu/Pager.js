import { React } from 'react'
//pager 
export default (props) => {
   
    //undefined array 
    var numbers = []

    var {totalpostsInAPI,maxDisplayrecordsPerButton,getButtonNumber }= props

     var numberofbuttons = totalpostsInAPI/maxDisplayrecordsPerButton


    for(let i=1;i <= numberofbuttons;i++)
    {
        numbers.push(i)  //defined array
    }

    return (<>
    <div className="container p-5">

    <ul className="pagination">
        {
            numbers.map((bno,i)=> <li className="page-item" key={i}>
            <a className="page-link" onClick={ ()=>getButtonNumber(bno)}>{bno}</a></li>)
        }

    </ul>

    </div>
    
    </>)
}