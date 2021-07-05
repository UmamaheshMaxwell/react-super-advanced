import React from 'react'

function NameListOne() {
    const names =["Scott", "Adam", "Tuan"]
    return (
        <div>
            <h2>Display List of Names using Index</h2>
            <ul>
                <li>{names[0]}</li>
                <li>{names[1]}</li>
                <li>{names[2]}</li>
            </ul>
        </div>
    )
}

export default NameListOne
