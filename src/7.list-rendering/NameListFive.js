import React from 'react'
import Person from './Person'

function NameListFive() {
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

    const personList = persons.map(person => <Person key={person.name} person={person} />)

    return (
        <div>
            {personList}
        </div>
    )
}

export default NameListFive
