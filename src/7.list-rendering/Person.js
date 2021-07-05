import React from 'react'

function Person(props) {
    // {id, name, age, skill, key} Never use key as part of prop values, it would throw errors
    const {id, name, age, skill} = props.person;
    return (
        <React.Fragment>
            <h2>
                I am {name} and I am {age} years old and I know {skill}
            </h2>
        </React.Fragment>
    )
}

export default Person
