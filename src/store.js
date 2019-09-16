import {createStore} from 'redux'

const initialState = {
    name: '',
    category: '',
    authorFirstName: '',
    authorLastName: '',
    ingredients: [],
    instructions: [],
    recipes: []
}

export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const AUTHOR_FIRST_NAME = 'AUTHOR_FIRST_NAME'
export const AUTHOR_LAST_NAME = 'AUTHOR_LAST_NAME'
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS'
export const UPDATE_INSTRUCTIONS = 'UPDATE_INSTRUCTIONS'
export const ADD_RECIPE = 'ADD_RECIPE'

function reducer(state = initialState, action) {
    const {type, payload} = action
    switch(type) {
        case ADD_RECIPE: 
        const {name, category, authorFirstName, authorLastName, ingredients, instructions} = state
        const recipe = {name, category, authorFirstName, authorLastName, ingredients, instructions}
        const newRecipes = [...state.recipes, recipe]
        return {...state, recipes: newRecipes}
        case UPDATE_INSTRUCTIONS:
            const newInstructions = [...state.instructions, payload]
            return {...state, name: newInstructions}
        case UPDATE_INGREDIENTS:
            const newIngrediants = [...state.ingredients, payload]
            return {...state, name: newIngrediants}
        case AUTHOR_FIRST_NAME:
            return {...state, name: payload}
        case AUTHOR_LAST_NAME:
            return {...state, name: payload}
        case UPDATE_NAME:
            return {...state, name: payload}
        case UPDATE_CATEGORY:
            return {...state, name: payload}
        default:
            return state
    }
}

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
