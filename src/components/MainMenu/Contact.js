import React, {Component} from "react"
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import EmpAction from './../../actions/EmpAction'

class Contact extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {}
    }

    componentDidMount()
    {
        this.props.EmpAction();
    }

    render()
    {
        return(<>
        <div>
        <h1>Contact Component</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <br /><br />
        {
                    this.props.empinfo.map((result,i) =>
                    {
                        return(<ul key={i}>
                            <li>{result.id}</li>
                            <li>{result.name}</li>
                            <li>{result.email}</li>
                        </ul>)
                    })
                }
        </div>
        
        
        </>)

    }
}
function mapStateToProps(state)
{
    return({
        empinfo:state.empReducer
    })
}
function mapDispatchToProps(dispatch)
{
    return bindActionCreators({ EmpAction }, dispatch) 
}
export default connect(mapStateToProps,mapDispatchToProps)(Contact);