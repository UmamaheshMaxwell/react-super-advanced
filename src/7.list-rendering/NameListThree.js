import React from 'react'

function NameListThree() {
    const names =["Paul", "Jim", "Ryan"]
    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>)
    return (
            <div>
                <h2>Display List of Names using Index ouside JSX</h2>
                {nameList}
            </div>
    )
}

export default NameListThree
