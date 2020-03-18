import React, { Component } from 'react';

class Tabledatarow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.stt}</td>
                    <td>{this.props.username}</td>
                        <td>{this.props.tel}</td>
                            <td>{ this.props.per}</td>
                            <td>
                          
                </td>
            </tr>
        );
    }
}

export default Tabledatarow;