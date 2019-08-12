/**
|--------------------------------------------------
| Presentational component for footer
|--------------------------------------------------
*/

/**
 * Import required components
 */

import React from "react";
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    typography: {
        padding: theme.spacing(1),
        color: '#555'
    },
}));

const Header = () => {
    const classes = useStyles();
    return(
        <Grid item xs={12} container justify='center'>
            <Typography variant="h3" component="h3" className={classes.typography}>
                Todo List
            </Typography>
        </Grid>
    )
}
export default Header;