import React, { Component } from 'react'

class List extends Component {

    render() {
        return(
        <ol className= 'text-sm xl:max-w-screen-xl xl:text-xl  lg:max-w-screen-lg lg:text-lg md:max-w-screen-md md:text-base sm:max-w-screen-sm sm:text-sm m-auto mt-2'>
            {this.props.tasks.map( (task) => (
                <div className= 'flex fluid justify-center bg-teal-300 pl-3 pr-3 ' key={'box'+ task.id}>
                    <input 
                        key={task.id} 
                        id={task.id} 
                        defaultValue={task.task} 
                        disabled={task.disabledInput}
                        onChange={ (e) => {this.props.handleInputChange(e.target.value, task)} }
                        className={task.disabledInput ? 'pt-2 pb-2 bg-teal-300 font-semibold text-center rounded self-center' :
                        'pt-3 pb-3 mr-5 bg-red-300 font-semibold text-center rounded self-center md:ml-2' } 
                        />
                    <button
                        onClick= { () => {this.props.editTask(task)} }
                        className= 'btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 mr-1 px-3 rounded self-center'
                    >
                       {task.disabledInput ? 'Edit' : 'End edit'} 
                    </button>
                    <button
                        onClick= { () =>  {this.props.removeTask(task.id)} }
                        className= 'btn bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-1 rounded self-center'
                    >
                        Delete
                    </button>
                </div>
            ))}
        </ol>
    )}
}

export default List;
