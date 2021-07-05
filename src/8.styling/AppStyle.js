import React from 'react'
import Styles from './appStyles.module.css'

function AppStyle() {
    return (
        <div>
            <h1 className="error">Error</h1>
            <h1 className={Styles.success}>Success</h1>
        </div>
    )
}

export default AppStyle
