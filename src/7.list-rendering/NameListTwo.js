import React from 'react'

function NameListTwo() {
    const names =["Uma", "Swathi", "Jagrav"]

    return (
        <div>
            <h2>Display List of Names using map inside JSX</h2>
            {
                names.map((name, index) => <h2 key={index}>{name}</h2>)
            }
        </div>
    )
}

export default NameListTwo
