/**
|--------------------------------------------------
| Container for adding item to todo list
|--------------------------------------------------
*/

/**
 * Import required components
 */

import React,{useState} from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

/**
 * addTodo simple component to add item to the todo list
 */

const AddTodo = ({ dispatch }) => {
   /**
    * Hook used to create state
    */
    const [input, setInput] = useState('');
    const classes = useStyles();
    function storeItem(e){
        e.preventDefault()
        if (!input.trim()) {
            return
        }
        dispatch(addTodo(input))
        setInput('');
    }
    return (
        <Grid item xs={12} container justify='center'>
            <Paper className={classes.paper}>
                <form
                    onSubmit={e => storeItem(e)}
                >
                    <TextField
                        onChange={e => setInput(e.target.value)}
                        value={input}
                        type='text' 
                        required
                        label="Add item"
                    />
                    <Button type="submit" variant="contained" color="primary">Add Todo</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default connect()(AddTodo);