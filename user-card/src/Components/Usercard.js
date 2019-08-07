import React from 'react'

export default function Usercard(props) {
    return (
        <div>
            <h2>{props.user.login}</h2>
            <p>{props.user.location}</p>
            <div>
                {props.followers.map(follower => (
                <div key={follower.id}>{followers.login}</div>
                ))}
            </div>
        </div>
    )
}
