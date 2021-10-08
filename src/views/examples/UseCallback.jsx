import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseCallback = (props) => {
    const [count, setcount] = useState(0)
    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <div className="center">
                <span className="text">{count}</span>
            </div>
            <div className="center">
                <div className="text">{count}</div>
            </div>
        </div>
    )
}


export default UseCallback
