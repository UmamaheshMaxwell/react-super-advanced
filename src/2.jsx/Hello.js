import React from 'react'

/*
 ? With using JSX
*/

// function Hello() {
//     return (
//         <div>
//             <h1>Hello Uma</h1>
//         </div>
//     )
// }

/*
 ? Without using JSX
*/
const Hello = () => {
    
    return React.createElement('div', 
                                {id: 'dvHeader', className:'dvClass'}, 
                                React.createElement('h1', 
                                                    {id: 'h1Header', className:'h1Class'}, 
                                                    'Without Using JSX'))
}

export default Hello
