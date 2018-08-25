import React, { Component } from 'react';
import format from 'date-fns/format';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';

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
        const nonechecked = items.every(item => !item.checked)
        const someChecked = items.some(item => item.checked)

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
                            <TableCell>
                                <Checkbox checked={!nonechecked && allChecked} onChange={this.handleAllCheck} indeterminate={someChecked && !allChecked} />
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map(({ title, deadline, checked, done, up, down }, index) => (
                            <TableRow key={index}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{title}</TableCell>
                                <TableCell>{format(deadline, 'DD/MM/YY')}</TableCell>
                                <TableCell>{done ? 'Done' : 'Pending'}</TableCell>
                                <TableCell style={{ display: 'flex' }}>
                                    <Tooltip title="Move Down">
                                        <div>
                                            <Button
                                                variant="fab"
                                                mini={true}
                                                color="secondary"
                                                disabled={index === 0}
                                                onClick={this.createHandleTodoItemMoveDown(index)}
                                            >
                                                <ArrowDropDown />
                                            </Button>
                                        </div>
                                    </Tooltip>
                                    <Tooltip title="Move Up">
                                        <div>
                                            <Button
                                                variant="fab"
                                                mini={true}
                                                color="secondary"
                                                disabled={index === items.length - 1}
                                                onClick={this.createHandleTodoItemMoveUp(index)}
                                            >
                                                <ArrowDropUp />
                                            </Button>
                                        </div>
                                    </Tooltip>
                                </TableCell>
                                <TableCell>
                                    <Checkbox checked={checked} onChange={this.checkChange(index)} />
                                </TableCell>
                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

export default TodoTable;
