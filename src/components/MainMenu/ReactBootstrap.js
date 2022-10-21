import React, { Component } from 'react'

import axios from 'axios';

import {Container,Row,Col, Card } from 'react-bootstrap';

//global_variable for RESTAPI-url

const url = `https://jsonplaceholder.typicode.com/photos?_start=1&end=10`

export default class ReactBootstrap extends Component 
{
    
           
    constructor(props)
    {
        super(props)

        this.state = {

            photos: []

        }
    }


    
    render() 
    {



        return (
            <div className="container text-center">

                <h4 className="py-3">REACTBOOTSTRAP UI PACKAGE</h4>

                <Container>

                     <Row>
                       
                    {
                        this.state.photos.map( (res,i)=>
                        {
                           return(<Col lg={4} mb={4} sm={6} xs={12} key={i} >
                            
                             <Card className="my-2" >
                             <Card.Img variant="top" className="w-50 mx-auto my-2" src={res.thumbnailUrl} />
                             <Card.Body>
                                 <Card.Title className="h6">{res.title}</Card.Title>
                                
                                <a className="btn btn-primary" href={res.url} target="_black">Visit Site</a>
                             </Card.Body>
                           </Card>

                           </Col>)
                        })
                    }

                    </Row>

                </Container>



            </div>
        )
    }

    componentDidMount()
    {
        axios.get(url).then( (result)=> this.setState({ photos:result.data }) );
    }
    

}