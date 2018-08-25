import React, { Component } from 'react';
import { Field } from 'redux-form'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import LabelField from '../components/form/LabelField';
import TextField from '../components/form/TextField';
import CheckboxField from '../components/form/CheckboxField';


class TodoTable extends Component {

    createHandleTodoItemMoveUp = index => event => {
        const { array } = this.props;

        array.swap('items', index, index - 1);
    }
    createHandleTodoItemMoveDown = index => event => {
        const { array } = this.props;

        array.swap('items', index, index + 1);
    }
    handleAllCheck = event => {
        const { fields, change } = this.props;

        for (let i = 0; i < fields.length; i++) {
            change(`items[${i}].checked`, event.target.checked);
        }
    }

render() {
    const { fields, disabled } = this.props;
    const items = fields.getAll() || [];

    const allChecked  = items.every(item =>  item.checked);
    const nonechecked = items.every(item => !item.checked);
    const someChecked = items.some(item  =>  item.checked);

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Deadline</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Operations</TableCell>
                    <TableCell>
                        <Checkbox
                            disabled={disabled}
                            checked={!nonechecked && allChecked}
                            onChange={this.handleAllCheck}
                            indeterminate={someChecked && !allChecked} />
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {fields.map((name, index) => (
                    <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell><Field component={TextField} disabled={disabled} name={`${name}.title`} /></TableCell>
                        <TableCell><Field component={LabelField} name={`${name}.deadline`} type="date" /></TableCell>
                        <TableCell><Field component={LabelField} name={`${name}.done`} type="status" /></TableCell>
                        <TableCell >
                            <div style={{ display: 'flex' }}>
                                <Tooltip title="Move Down">
                                    <div style={{ flex: 1 }}>
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
                                    <div style={{ flex: 1 }}>
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
                            </div>
                        </TableCell>
                        <TableCell>
                            <Field name={`${name}.checked`} disabled={disabled} component={CheckboxField} />
                        </TableCell>
                    </TableRow>

                ))}
            </TableBody>
        </Table>
    )
}
}

export default TodoTable;
