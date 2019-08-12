/**
|--------------------------------------------------
| Presentational component for link
|--------------------------------------------------
*/

/**
 * Import required components
 */

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

/**
 * View links 
 */


const Link = ({active, children, onClick}) => (
    <Button 
        onClick = {onClick}
        disabled = {active}
        style = {{marginLeft: '4px'}}
        variant="contained"
        color="secondary"
        size="small"
    >
        {children}
    </Button>
)

/**
 *  Proptypes used to validate props
 */

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}
  
export default Link;