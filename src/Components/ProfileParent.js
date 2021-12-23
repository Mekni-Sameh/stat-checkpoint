import React, { Component } from 'react'
import Profile from './Profile';
export default class ProfileParent extends Component
 {
constructor(props) {
    super(props)
    this.state ={
        show: false,
        Fullname: "Sameh",
        image: "https://cdn4.vectorstock.com/i/1000x1000/32/23/user-sign-icon-person-symbol-human-avatar-vector-12693223.jpg",
        profession: "developers"
    }
}
toggle() {
    this.setState({show: !this.state.show})
}


    render() {
        return (
            <div>
                <button onClick={() => this.toggle()}> {this.state.show ? "hide" : "show"} </button>
                {this.state.show ? <Profile 
                Fullname={this.state.Fullname}  
                image={this.state.image}
                profession={this.state.profession}
                /> : null}
            </div>
        )
    }
}
