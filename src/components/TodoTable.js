import React, { Component } from 'react';
import format from 'date-fns/format'

class TodoTable extends Component {
    checkChange = index => event => {
        const { onItemCheckChange } = this.props;

        onItemCheckChange(event, index);
    }
    handleAllCheck = event => {
        const { selectAll } = this.props;
        selectAll(event.target.checked);

    }
    createHandleTodoItemMoveUp = index => event => {
        const { moveup } = this.props;

        moveup(index);
    }
    createHandleTodoItemMoveDown = index => event => {
        const { movedown } = this.props;

        movedown(index);
    }
    render() {
        const { items } = this.props;

        const allChecked = items.every(item => item.checked)

        return (
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Deadline</th>
                        <th>Status</th>
                        <th>Operations</th>
                        <th><input type='checkbox' checked={allChecked} onChange={this.handleAllCheck} /></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({ title, deadline, checked, done, up, down }, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{title}</td>
                            <td>{format(deadline, 'DD/MM/YY')}</td>
                            <td>{done ? 'Done' : 'Pending'}</td>
                            <td>
                                <button disabled={index === 0} onClick={this.createHandleTodoItemMoveUp(index)}>^</button>
                                <button disabled={index === items.length - 1} onClick={this.createHandleTodoItemMoveDown(index)}>v</button>
                            </td>
                            <td><input type='checkbox' checked={checked} onChange={this.checkChange(index)} /></td>
                        </tr>

                    ))}
                </tbody>
            </table>
        )
    }
}

export default TodoTable;
