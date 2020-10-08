import React from 'react'

export const ItemGrillaGif = ({ title, url }) => {
    return (
        <div className="card animate__animated animate__pulse">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
