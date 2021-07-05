import React from 'react'

function NameListFour() {
    const persons =[
        {
            id: 1,
            name: "Scott",
            age: 45,
            skill: 'React'
        },
        {
            id: 2,
            name: "Adam",
            age: 43,
            skill: 'Angular'
        },
        {
            id: 3,
            name: "Tuan",
            age: 41,
            skill: 'C#'
        },
        {
            id: 4,
            name: "Uma",
            age: 39,
            skill: 'JavaScript'
        }
    ]

    // const personList = persons.map(person => {
    //     return (
    //         <h2>
    //             I am {person.name} and I am {person.age} years old and I know {person.skill}
    //         </h2>
    //     )
    //  })

    const personList = persons.map(person => (
        <h2 key={person.id}>
            I am {person.name} and I am {person.age} years old and I know {person.skill}
        </h2>
    ))

    // return <div>{personList}</div>

    return (
        <div>
            {personList}
        </div>
    )
}

export default NameListFour
