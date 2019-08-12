/**
|--------------------------------------------------
| Presentational component for footer
|--------------------------------------------------
*/

/**
 * Import required components
 */

import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions";
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    grid: {
      padding: theme.spacing(2),
    },
  }));

/**
 * View links at footer for all,active and completed todos 
 */

const Footer = () => {
    const classes = useStyles();
    return(
        <Grid item xs={12} container justify='center' className={classes.grid}>
            <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
        </Grid>
    );
}

export default Footer;
