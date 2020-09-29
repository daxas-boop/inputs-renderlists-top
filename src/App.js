import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {Icon} from '@material-ui/core'
import Input from '@material-ui/core/Input';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import List from './components/Overview'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [{
        todo:'Dummy Task',
        id: 1
      }],
      input: '',
    }

    this.handleClick = this.handleClick.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  handleClick () {
    const newTask = {
      todo:this.state.input,
      id: this.state.tasks.length + 1
    }

    let joined = this.state.tasks.concat(newTask);
    this.setState({ tasks: joined, input: ''})
  }

  removeTask(e) {
    const id = e.target.tabIndex
    console.log(id);
    this.setState({tasks: [...this.state.tasks.filter( task => 
      task.id !== id
   )]})
  }

  render() {
    return(
      <Container maxWidth="md">
        <Box display="flex" justifyContent="center">
          <ul>
            {this.state.tasks.map( (task) => (
              <Box key={'box'+ task.id} display="flex" justifyContent="center" alignItems="center" bgcolor='info.main' p={1}>
                <List tabIndex={task.id} key={'list'+task.id} task={task.todo} id={task.id} ></List>
                <button 
                  tabIndex={task.id}
                  onClick= { this.removeTask }
                >
                  Delete
                </button>
              </Box>
            ))}
          </ul>
        </Box>
        <Box display="flex" justifyContent="center">
          <Input 
            placeholder="Task to do" 
            value={this.state.input}
            onChange={(e) => this.setState({ input: e.target.value })} 
          />
          <Button 
            variant="contained" 
            color="primary" 
            endIcon={<Icon>send</Icon>}
            onClick={ this.handleClick }
          >
            Send
          </Button>
        </Box>
      </Container>
    )
  }

}

export default App;
