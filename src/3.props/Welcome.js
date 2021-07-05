import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <div>
                <h2>name : {this.props.name} and skill : {this.props.skill}</h2>
                <p>this is children</p>
            </div>
        )
    }
}

export default Welcome
