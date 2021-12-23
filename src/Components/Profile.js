import React, { Component } from 'react'
import { Card } from "react-bootstrap";
export default class Profile extends Component {
    constructor(props) {
        console.log("construction");
        super(props);
        this.state = {count:0};
    }

    componentDidMount() {
        this.timer = setInterval(() => {this.setState({count: this.state.count+1})} , 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        console.log("Rendering");
        return (
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={this.props.image}/>
                <Card.Body>
                    <Card.Title>{this.props.Fullname}</Card.Title>
                    <Card.Text>
                        {this.props.profession}
                    </Card.Text>
                    <Card.Text>
                        Hani Houni : {this.state.count}
                    </Card.Text>
                </Card.Body>
            </Card>
        
            </div>
             ); 
        
    }
}