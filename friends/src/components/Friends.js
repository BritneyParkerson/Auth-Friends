import React from 'react';

const Friends = (props) => {
    return (
        <div>
            {props.friends.map(friend => {
                return (
                    <div>
                    <h1>{friend.name}</h1>
                    <h2>{friend.age}</h2>
                    <h3>{friend.email}</h3>
                    </div>
                );
            })};
        </div> 
             );
};
export default Friends