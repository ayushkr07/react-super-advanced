import React, { Component } from 'react'

class Message extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Ayush',
             message : 'Welcome Ayush'
        }
    }

    subscribe(){
        this.setState({
            message : 'Thankyou for subscribing....'
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button className="btn btn-primary"
                 onClick={()=>this.subscribe()}>Subscribe
                 </button>
            </div>
        )
    }
}

export default Message
