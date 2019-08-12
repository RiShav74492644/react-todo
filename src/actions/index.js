/**
|--------------------------------------------------
| Redux action index file
|--------------------------------------------------
*/


/**
 * Todo id counter
 */

let todoNextId = 0;

/**
 * Action for adding todo
 */

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: todoNextId++,
    text
})

/**
 * Action for setting visibility for todos
 */

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

/**
 * Action for toggling todos
 */

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

/**
 * Visibility filter variable
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}