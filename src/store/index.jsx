import { createStore, applyMiddleware } from 'redux';
import advertismentReducer from '../reducers/advertismentReducer';
import localStorageMiddleware from '../middleware/advertismentMiddleware';

const persistedState = {
  advertisments: JSON.parse(localStorage.getItem('advertisments')) || []
};

const store = createStore(
  advertismentReducer,
  persistedState,
  applyMiddleware(localStorageMiddleware)
);

export default store;
