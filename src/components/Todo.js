import React from "react";

export default class Todo extends React.Component {

    constructor() {
        super();
    }

    render() {
        const { onClick, completed, text } = this.props;
        return (
            <li
                onClick={onClick}
                style={{
                    textDecoration: completed ?
                        'line-through' : 'none'
                }}>
                {text}
            </li>
        );
    }
}
