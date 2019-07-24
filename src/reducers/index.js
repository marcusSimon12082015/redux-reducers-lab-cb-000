export default function ingredientReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_INGREDIENT': return [...state,action.payload]
    default: return state
  }
}
