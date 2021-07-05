import React from 'react'

// function Greeting({name, skill, children}) {

//     return (
//         <div>
//             <h1>Develope name : {name} and Skill : {skill}</h1>
//             <p>{children}</p>
//         </div>
//     )
// }

function Greeting(props) {
    console.log(props)
    const {name, skill, children} = props;

    return (
        <div>    
            <h2>Developer name : {name} and Skill : {skill}</h2>
            <p>{children}</p>
        </div>
    )
}



export default Greeting
