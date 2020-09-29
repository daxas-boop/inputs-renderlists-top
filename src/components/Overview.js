import React, { Component } from 'react'
import uniqid from "uniqid";

class List extends Component {

    render() {
        return(
        <ol className= 'max-w-screen-sm m-auto mt-2'>
            {this.props.tasks.map( (task) => (
                <div className= 'flex justify-center bg-teal-300 pl-3 pr-3' key={'box'+ task.id} >
                    <li key={uniqid()} id={uniqid()} className='p-4 mr-5 font-semibold text-lg'>{task.task}</li>
                    <button
                        onClick= { () =>  {this.props.removeTask(task.id)} }
                        className= 'btn bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded ml-2 self-center'
                    >
                        Delete
                    </button>
                </div>
            ))}
        </ol>
    )}
}

export default List;
