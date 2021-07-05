import React from 'react'

function Greeting(props) {
    console.log(props)
    const {name,skill}=props
    return (
        <div>
            <h1>Welcome {name} with skill : {skill}</h1>
        </div>
    )
}

export default Greeting
