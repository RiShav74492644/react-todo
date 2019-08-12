/**
|--------------------------------------------------
| Todo presentational component
|--------------------------------------------------
*/

/**
 * Import required components
 */

import React from 'react';
import PropTypes from 'prop-types'

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HighlightIcon from '@material-ui/icons/HighlightOff';
import red from '@material-ui/core/colors/red';
import lightGreen from '@material-ui/core/colors/lightGreen';
const danger = red[900];
const  success = lightGreen[900];
/**
 * View todo < complete/ incomplete >
 */

const Todo = ({onClick, completed,text}) => (
    // <li
    //     onClick={onClick}
    //     style = {{
    //         textDecoration: completed ? 'line-through' : 'none'
    //     }}
    // >
    //     {text}
    // </li>
    <div>
    <ListItem button 
        onClick={onClick}
    >
        <ListItemText primary={text} />
        {completed ?<CheckCircleIcon style={{color: success}} /> : <HighlightIcon style={{color: danger}} /> }
    </ListItem>
    <Divider/>
    </div>
)

/**
 *  Proptypes used to validate props
 */

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}


export default Todo;