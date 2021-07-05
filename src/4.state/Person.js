import React, { Component } from 'react'

export class Person extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name : 'Uma',
            city : 'Hyderabad',
            isActive : false
             
        }
    }
    
    render() {
        const {name,city,isActive}=this.state
        return (
            <div>
                <h1>Name is {name}</h1>
                <h1>Name is {city}</h1>
                <h1>active : {isActive ? "True":"False"}</h1>
            </div>
        )
    }
}

export default Person
