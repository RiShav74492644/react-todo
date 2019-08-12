/**
|--------------------------------------------------
| App.js file
|--------------------------------------------------
*/

/**
 * Import required components
 */

import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
	root: {
		height:'666px',	
		maxHeight: '100%',
		backgroundColor: '#ebebeb'
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

/**
 * App container 
 */

const App = () => {

    const classes = useStyles();
	return(
		<Container maxWidth='xl' className={classes.root}>
			<br/><br/>
			<Grid item xs={12} container justify="center">
				<Paper className={classes.paper}>
					<Header />
					<AddTodo />
					<Footer />
					<VisibleTodoList />
				</Paper>
			</Grid>
		</Container>
	);
}

export default App;
