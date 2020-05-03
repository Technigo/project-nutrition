export const functionName = () => {
  return (dispatch, getState) => {
    // code to be executed
  }
}

//the dispatch function allows to dispatch more actions to the store/global state 
//the getState function gets the current store/global state if needed 

export const functionName = () => {
  return (dispatch) => {
    dispatch(sliceName.actions.actionName())
    fetch('API-url')
      .then((res) => res.json())
      .then((json) => {
        dispatch(sliceName.actions.actionName(json))
        // other code to be executed if so
      })
  }
}