import { React, Component } from 'react';

import { connect} from 'react-redux';

import EmpAction from './../../actions/EmpAction'

import UsersAction from './../../actions/usersAction'

import StudentsAction from './../../actions/studentsAction'

import { bindActionCreators } from 'redux';


class ReactReduxConnection extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {}
    }

    componentDidMount()
    {
        this.props.EmpAction();
        this.props.UsersAction();
        this.props.StudentsAction();
    }

    render()
    {

        return(<>
                <div className="container p-5">
                <h2>React Redux Connection</h2>'
                
                
                <h3>synchronous Data from redux-actions</h3>
                
                {
                    this.props.empdata.map((res,i) =>
                    {
                        return(<ul key={i}>
                            <li>{res.id}</li>
                            <li>{res.name}</li>
                            <li>{res.email}</li>
                        </ul>)
                    })
                }

                 
                  <h3>synchronous Data from  [globrestapi] redux-actions</h3>
                
                {
                    this.props.usersdata.map((res,i) =>
                    {
                        return(<ul key={i}>
                            <li>{res.id}</li>
                            <li>{res.name}</li>
                            <li>{res.email}</li>
                        </ul>)
                    })
                }
                
                <h3>synchronous Data from [local-restapi]redux-actions</h3>
                
                {
                    this.props.studentsdata.map((res,i) =>
                    {
                        return(<ul key={i}>
                            <li>{res.id}</li>
                            <li>{res.name}</li>
                            <li>{res.email}</li>
                        </ul>)
                    })
                }
               
                </div>
                
        
        
           </>)
    }

}
const mapStateToProps  =(state) =>
{
    console.log(state)
// get data from redux store by using reducer
    return ({
         empdata:state.empReducer,
         usersdata: state.usersReducer,
         studentsdata: state.studentsReducer
        })
}

const mapDispatchToProps = (dispatch) =>
{
// calling redux action
   return bindActionCreators({ EmpAction, UsersAction, StudentsAction}, dispatch) 

}
//export default ReactReduxConnection;

export default connect(mapStateToProps,mapDispatchToProps)(ReactReduxConnection)