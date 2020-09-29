import React, { Component } from 'react';
import List from './components/Overview';
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [{
        task:'Dummy Task',
        id: uniqid()
      }
      ],
      input: '',
    }

    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addTask () {
    const newTask = {
      task: this.state.input,
      id: uniqid()
    }
    let joined = this.state.tasks.concat(newTask);
    this.setState({ tasks: joined, input: ''})
  }

  removeTask(id) {
    this.setState({tasks: [...this.state.tasks.filter( task => 
      task.id !== id
   )]})
  }

  render() {
    return(
      <div>
        <List tasks={this.state.tasks} removeTask={this.removeTask} ></List>
        <form 
          onSubmit={(e)=> {e.preventDefault()}}
          className= 'bg-white shadow-md flex justify-center mt-5 pb-5 pt-5' 
        >
          <input
            value= {this.state.input}
            onChange={(e) => this.setState({ input: e.target.value })}
            placeholder="Task to do"
            className='bg-teal-100 border-2 border-teal-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-teal-500'
          />
          <button 
            onClick={ this.addTask }
            className= 'bg-teal-600 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded ml-2'
          >Send</button>
        </form>
      </div>
    )
  }
}

export default App;
