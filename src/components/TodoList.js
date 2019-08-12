/**
|--------------------------------------------------
| Presentational component for todo list
|--------------------------------------------------
*/

/**
 * Import required components
 */

import React from 'react'
import PropTypes from 'prop-types';
import Todo from './Todo';

import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      color: '#555'
    },
  }));
const TodoList = ({todos, toggleTodo}) =>{
    const classes = useStyles();
    return (    
        <List component="nav" className={classes.root} aria-label="mailbox folders">
            {
                todos.map( 
                    todo => (
                        <Todo key={todo.id} {...todo} onClick={()=> toggleTodo(todo.id)} />
                    )
                )
            }
        </List>
    );
}
/**
 *  Proptypes used to validate props
 */

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired
}

export default TodoList;