import React, { Component } from 'react';
class TodoTable extends Component {
render(){
    const {items}=this.props;



    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Deadline</th>
                    <th>Status</th>
                    <th>Operations</th>
                    <th><input type='checkbox' /></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item , index) => (
                        <li key={index}>{item.title}</li>
                    ))}
                    </tbody>
        </table>




    )
}





}

export default TodoTable;
