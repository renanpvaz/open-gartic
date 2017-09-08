const createReducer = (initialState, handlers) =>
  (state = initialState, action) => action.type in handlers
    ? ({ ...state, ...handlers[action.type](action, state) })
    : state

export default createReducer
