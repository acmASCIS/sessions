import React from 'react'

export default function Post(props) {
    return (
        <div className="post">
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            <span>Author: {props.createdBy}</span>
        </div>
    )
}
