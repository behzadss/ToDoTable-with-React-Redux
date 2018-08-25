import React, { Component } from 'react';
import format from 'date-fns/format';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox'

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
            <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Deadline</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Operations</TableCell>
                        <TableCell><input type='checkbox' checked={allChecked} onChange={this.handleAllCheck} /></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map(({ title, deadline, checked, done, up, down }, index) => (
                        <tr key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{title}</TableCell>
                            <TableCell>{format(deadline, 'DD/MM/YY')}</TableCell>
                            <TableCell>{done ? 'Done' : 'Pending'}</TableCell>
                            <TableCell>
                                <button disabled={index === 0} onClick={this.createHandleTodoItemMoveUp(index)}>^</button>
                                <button disabled={index === items.length - 1} onClick={this.createHandleTodoItemMoveDown(index)}>v</button>
                            </TableCell>
                            <TableCell><input type='checkbox' checked={checked} onChange={this.checkChange(index)} /></TableCell>
                        </tr>

                    ))}
                </TableBody>
            </Table>
            </Paper>
        )
    }
}

export default TodoTable;
