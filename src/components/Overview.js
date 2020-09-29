import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class List extends Component {
    render() {
        return(
            <ListItem>
                <ListItemText
                    primary={this.props.task}
                />
            </ListItem>
        )
    }
}

export default List;
