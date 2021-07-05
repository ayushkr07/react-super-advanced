import React from 'react'

function Greeting(props) {
    const {name,skill,children}=props
    return (
        <div>
            <h1>Welcome {name} with skill : {skill}</h1>
            <p>{children}</p>
        </div>
    )
}

export default Greeting
