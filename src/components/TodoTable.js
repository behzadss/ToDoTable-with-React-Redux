import React, { Component } from 'react';

class TodoTable extends Component {
    checkChange = index => event => {
        const { onItemCheckChange } = this.props;
    
        onItemCheckChange(event, index);
      }
render(){
    const {items}=this.props;

    const allChecked= items.every(item => item.checked)

    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Deadline</th>
                    <th>Status</th>
                    <th>Operations</th>
                    <th><input type='checkbox' checked={allChecked}/></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({ title, deadline, checked, done, up , down } , index) => (
                        <tr key={index}>
                        <td>{index+1}</td>
                        <td>{title}</td>
                        <td>{deadline}</td>
                        <td>{done ? 'Done' : 'Pending'}</td>
                        <td><button disabled={index===0}>v</button>
                        <button disabled={index===items.length-1}>^</button></td>
                        <td><input type='checkbox' checked={checked} onChange={this.checkChange(index)}/></td>
                        </tr>

                    ))}
                    </tbody>
        </table>
    )
}
}

export default TodoTable;
