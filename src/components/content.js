import React from 'react';

export class Content extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <h2>It is now {new Date().toLocaleDateString()}</h2>
            </div>
        );
    }
}