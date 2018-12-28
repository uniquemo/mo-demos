
import React, { useReducer } from 'react'

const initialState = { count: 0 }

function reducer (state, action) {
  switch (action.type) {
    case 'reset':
      return { count: action.payload }
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      // A reducer must always return a valid state.
      // Alternatively you can throw an error if an invalid action is dispatched.
      return state
  }
}

export default function Counter ({ initialCount = 0 }) {
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
    {type: 'reset', payload: initialCount}    // Lazy initialization
  )
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'reset', payload: initialCount })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}


