
const localStorageMiddleware = store => next => action => {
  const result = next(action);
  if (action.type === 'ADD_ADVERTISMENT' || action.type === 'DELETE_ADVERTISMENT' || action.type === 'UPDATE_ADVERTISMENT' || 
  action.type === 'LOAD_ADVERTISMENT' ) {
    localStorage.setItem('advertisments', JSON.stringify(store.getState().advertisments));
  }
  return result;
};

export default localStorageMiddleware;
