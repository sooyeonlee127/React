import React from 'react';


function MyComponent(props) {
    return (
        <div>
            <h1>컴포넌트</h1>
            <p>{props.content}</p>
        </div>
    )
};


export default MyComponent;